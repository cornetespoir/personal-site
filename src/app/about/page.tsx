import Link from 'next/link'
import styles from './about.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About'
}
export default function Home() {
    return (
        <section className={styles.about}>
            <article className='flex align-center'>
                <div className="pixel-container flex align-center justify-center">
                    <div className='me'></div>
                </div>
                <h1>About the dev</h1>  
                <p>
                    In 2015 I started making tumblr themes, and I&apos;ve been coding ever since! I primarily use React/Next.js in all my projects (both personal and professional). I love making
                    <span className='confetti'>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        animations
                    </span> 
                     and other <span className='fun'>fun</span> <span className='interactions'>interactions</span>. My pixel avatar, for example, is entirely CSS!
                     <br/>
                     When I&apos;m not coding, I like playing video games, reading comics, and drawing.
                </p>    
                <Link href="/" className={styles.back}>back to the home page</Link>    
            </article>
        </section>
    )
}