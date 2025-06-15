import Link from "next/link";
import styles from '../project.module.css'
import clsx from "clsx";
import { Kirby } from "./Kirby";
import { Milk } from "./Milk";

export default function Home() {

    const headerClasses = clsx(
        'flex column centered',
        styles.header
    )
    const footerClasses = clsx(
        'flex centered',
        styles.footer
    )

    const sectionClasses = clsx(
        'flex centered',
        styles.section
    )
    return (
        <main className={styles.project}>
            <header className={headerClasses}>
                <h1>CSS Gallery</h1>
                <p>A collection of CSS art</p>
            </header>
            <section className={sectionClasses}>
                <article className={styles.push}>
                  <h2>Kirby</h2>
                </article>
                <div className={styles.videoContainer}>
                    <Kirby />
                </div>
            </section>
            <section className={sectionClasses}>
                <div className={styles.videoContainer}>
                    <Milk />
                </div>
                  <article>
                  <h2>Milk</h2>
                </article>
            </section>
            <footer className={footerClasses}>
                <nav className='flex align-center space-between'>
                    <Link href='/'>Back</Link>
                    <Link href='https://codepen.io/cornetespoir' target='_blank'>More</Link>
                </nav>
            </footer>
        </main>
    )
}