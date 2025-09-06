import { Direction, Project } from '@/types'
import { FeaturedProject } from './FeaturedProject'
import { ReactElement, useState } from 'react'
import clsx from 'clsx'

interface ProjectProps {
  projects: Project[]
}

function getIndexWrapper(base: number, offset: number, length: number) {
  return (base + offset + length) % length
}

function getIndex(activeIndex: number, length: number) {
  return {
    prevPrev: getIndexWrapper(activeIndex, -2, length),
    prev: getIndexWrapper(activeIndex, -1, length),
    active: activeIndex,
    next: getIndexWrapper(activeIndex, +1, length),
    nextNext: getIndexWrapper(activeIndex, +2, length),
  }
}

function Projects({ projects }: ProjectProps): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'' | Direction>('')
  const [animating, setAnimating] = useState(false)

  function navigation(dir: Direction) {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
  }
  function getItemsToRender() {
    const order = getIndex(activeIndex, projects.length)

    const items = [
      { key: projects[order.prev].id, project: projects[order.prev], position: 'left' },
      { key: projects[order.active].id, project: projects[order.active], position: 'center' },
      { key: projects[order.next].id, project: projects[order.next], position: 'right' },
    ]

    if (direction === 'right') {
      items.push({
        key: projects[order.nextNext].id,
        project: projects[order.nextNext],
        position: 'offscreen-right',
      })
    } else if (direction === 'left') {
      items.unshift({
        key: projects[order.prevPrev].id,
        project: projects[order.prevPrev],
        position: 'offscreen-left',
      })
    }

    return items
  }


  function handleAnimationEnd() {
    if (!direction) return
    const offset = direction === 'right' ? 1 : -1
    setActiveIndex(getIndexWrapper(activeIndex, offset, projects.length))
    setDirection('')
    setAnimating(false)
  }

  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragEndX, setDragEndX] = useState(0)

 
  function handlePointerDown(e: React.PointerEvent) {
    setDragStartX(e.clientX)
    setDragEndX(0)
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (dragStartX === null) return
    const delta = e.clientX - dragStartX
    setDragEndX(delta)
  }

  function handlePointerUp() {
    if (dragStartX === null) return

    const threshold = 30 
    if (dragEndX > threshold) {
      navigation('left') 
    } else if (dragEndX < -threshold) {
      navigation('right')  
    }

    setDragStartX(null)
    setDragEndX(0)
  }

  const itemsToRender = getItemsToRender()
  const projectClassNames = clsx('projects', `animation-${direction}`)

  return (
    <div className='project-container'>
      <div
        className={projectClassNames}
        onAnimationEnd={handleAnimationEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {itemsToRender.map(({ project, position, key }) => (
          <FeaturedProject
            key={key}
            project={project}
            position={position}
          />
        ))}

      </div>

      <div className="pagination flex space-between align-center">
        <button onClick={() => navigation('right')}>Show more projects</button>
      </div>
    </div>
  )
}



export { Projects }