import Link from "next/link";
import styles from '../project.module.css'
import clsx from "clsx";
import { Kirby } from "./Kirby";
import { Milk } from "./Milk";
import { Stardew } from "./Stardew";
import { Riddler } from "./Riddler";

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
                <p>Every &quot;image&quot; on this page is 100% CSS. Feel free to inspect the elements to see how it&apos;s made!</p>
            </header>

            <section className={sectionClasses}>
                <div className={styles.videoContainer}>
                    <Stardew />
                </div>
                <article>
                    <h2>Stardew Valley UI</h2>
                </article>
            </section>

            <section className={sectionClasses}>
                <article className={styles.push}>
                    <h2>Kirby</h2>
                    <p>An animated floating Kirby! The original version from 2017 also functioned as a container for text when hovered over.</p>
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
                    <p>A simple isometric Milk carton</p>
                </article>
            </section>

            <section className={sectionClasses}>
                <article className={styles.push}>
                    <h2>Riddler</h2>
                    <p>An attempt to recreate how he was seen in batman the animated series</p>
                </article>
                <div className={styles.videoContainer}>
                    <Riddler />
                </div>
            </section>
            <footer className={footerClasses}>
                <nav className='flex align-center space-between'>
                    <Link href='/'>Back</Link>
                    <Link className={styles.site} href='https://codepen.io/cornetespoir' target='_blank'>More Experiments</Link>
                </nav>
            </footer>
        </main>
    )
}