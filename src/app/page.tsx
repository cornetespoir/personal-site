'use client'
import Link from 'next/link'
import { useRef, WheelEvent } from 'react'
import styles from './page.module.css'
import clsx from 'clsx'
export default function Home() {

  const featuredWorkRef = useRef<HTMLDivElement | null>(null)

  function horizontalScrolling(e: WheelEvent<HTMLDivElement>) {
    if (featuredWorkRef.current == null) return
    e.preventDefault()
    featuredWorkRef.current.scrollLeft += e.deltaY;
  }
  const headerClasses = clsx(
    'flex space-around',
    styles.header
  )
  const navClasses = clsx(
    'flex space-around',
    styles.nav
  )
  return (
    <>
      <header className={headerClasses}>
        <div id='daynight-toggle' className='flex centered justify-center'><b className='toggle'></b></div>
        <nav className={navClasses}>
          <Link href='/'>Home</Link>
          <Link href='https://egg.design/tagged/blog' target='_blank'>Blog</Link>
        </nav>
        <div className='flex full space-between align-center'>
          <div className='text-content'>
            <h1>Hi! I'm <span>Bridgette</span></h1>
            <p>I'm a <span>designer</span> and front-end <span>developer</span>.</p>
          </div>
          <div className='other-content'>
          </div>
        </div>
        <div className='links flex'>
          <a href='https://www.tumblr.com/themes/by/eggdesign' target='_blank'>Tumblr themes
            <svg xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'>
              <path
                d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
            </svg></a>
          <a href='https://github.com/cornetespoir' target='_blank'>Github <svg xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path
              d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
          </svg></a>
          <a href='' target='_blank'>Codepen <svg xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path
              d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
          </svg></a>
        </div>
      </header>
      <main>
        <h2 className='label'>
          Personal Projects
        </h2>
        <section id='featured-work' onWheel={horizontalScrolling} ref={featuredWorkRef}>
          <article>
            <div className='preview'>
              <img
                src='https://64.media.tumblr.com/b8324530d946f5606057179cff71ca12/909224c0fa958c48-ad/s1280x1920/d7ce354284b7bf72bf702ae23b3e5e91044bbc5d.pnj' />
            </div>
            <div className='text'>
              <h3>Maestro</h3>
              <p>Creates a playlist of all audio posts that belong to a user's blog</p>
            </div>
            <div className='buttons flex centered justify-center'>
              <Link href='/project/maestro'>Learn more</Link>
            </div>
          </article>
          <article>
            <div className='preview'>
              <img src='buildatheme.png' />
            </div>
            <div className='text'>
              <h3>Build a Theme</h3>
              <p>Build and customize a tumblr theme without writing any code</p>
            </div>
            <div className='buttons flex centered justify-center'>
              <a href='/project/theme-builder' target='_blank'>Learn more</a>
            </div>
          </article>
          <article>
            <div className='preview'>
              <img
                src='https://64.media.tumblr.com/54633f119fae71facf53bc1dd43f9c6a/9bdd9f7b87f6c02d-28/s2048x3072/d0b1e98ab5985454bca88afcba92692c5dcc3690.png' />
            </div>
            <div className='text'>
              <h3>NPF theme base</h3>
              <p>A basic tumblr theme template that supports new post types</p>
            </div>
            <div className='buttons flex centered justify-center'>
              <a href='https://github.com/cornetespoir/npf-theme-base' target='_blank'>View on github</a>
            </div>
          </article>
          <article>
            <div className='preview'>
              <img src='findtags.png' />
            </div>
            <div className='text'>
              <h3>Findtags</h3>
              <p>An unfiltered (by default) tag search for tumblr posts by getting all posts directly from the API
              </p>
            </div>
            <div className='buttons flex centered justify-center'>
              <a href='https://github.com/cornetespoir/findtags-react' target='_blank'>View on github</a>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
