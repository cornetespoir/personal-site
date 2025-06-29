import { FeaturedProject } from '@/components/FeaturedProject'
import { projects } from './projects'
import { useEffect, useRef, WheelEvent } from 'react'
import clsx from 'clsx'
import styles from './page.module.css'
import Link from 'next/link'
import { usePageContext } from './PageContext'
import { TransitionType } from '@/types'

export function PageContents() {

    const featuredWorkRef = useRef<HTMLDivElement | null>(null)
    const { setTransition} = usePageContext()
    function horizontalScrolling(e: WheelEvent<HTMLDivElement>) {
        if (featuredWorkRef.current == null) return
        e.preventDefault()
        featuredWorkRef.current.scrollLeft += e.deltaY;
    }
    const headerClasses = clsx(
        'main-header flex space-around',
        styles.header
    )
    const navClasses = clsx(
        'flex space-around',
        styles.nav
    )
    useEffect(() => {
        setTransition(null)
        setTransition(TransitionType.enter)
    }, [])
    return (
        <>
            <header className={headerClasses}>
                <Link href='/project/css' target='_blank' id='daynight-toggle'
                    className='flex centered justify-center'>
                    🎨<span className='sr-text'>Open the CSS Art Gallery</span>
                </Link>
                <nav className={navClasses}>
                    <Link href='/'>Home</Link>
                    <Link href='/about' target='_blank'>About</Link>
                    <Link href='https://egg.design/tagged/blog' target='_blank'>Blog</Link>
                </nav>
                <div className='flex full space-between align-center'>
                    <div className='text-content'>
                        <h1>Hi! I&apos;m <span className='confetti'>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            Bridgette</span></h1>
                        <p>I&apos;m  a front-end developer and designer.</p>
                    </div>
                    <div className='other-content'>
                        <div className='little-guy'>
                            <div className='little-guy-pixel'></div>
                        </div>
                    </div>
                </div>
                <div className='links flex'>
                    <Link href='https://www.tumblr.com/themes/by/eggdesign' target='_blank'>Tumblr themes
                        <svg xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'>
                            <path
                                d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                        </svg></Link>
                    <Link href='https://github.com/cornetespoir' target='_blank'>Github <svg xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path
                            d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                    </svg></Link>
                    <Link href='https://codepen.io/cornetespoir' target='_blank'>Codepen <svg xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'>
                        <path
                            d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                    </svg></Link>
                </div>
            </header>
            <main>
                <h2 className='label'>
                    Personal Projects
                </h2>
                <section id='featured-work' onWheel={horizontalScrolling} ref={featuredWorkRef}>
                    {projects.map((project, index) =>
                        <FeaturedProject
                            key={index}
                            project={project}
                        />
                    )}
                </section>
            </main>
        </>
    )
}