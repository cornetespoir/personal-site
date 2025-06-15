import Link from "next/link";
import styles from '../project.module.css'
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Project: Maestro',
}
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
            <div className={styles.video}>
                <video src='/maestro-demo.mp4' muted autoPlay loop />
            </div>
            <header className={headerClasses}>
                <h1>Maestro</h1>
                <p>A tumblr audio post playlist maker.</p>
            </header>
            <article className={styles.about}>
                <h2>About Maestro</h2>
                <p>Maestro came about upon realizing that existing tumblr blog playlist makers were not built to support the <Link href='https://www.tumblr.com/docs/npf' target='_blank'>Neue Post Format</Link>, meaning all posts made after around 2023 would no longer work.</p>
                <p>These playlist makers were very nostalgic for me, and I wanted to keep them going with modern tumblr posts.</p>
            </article>

            <section className={sectionClasses}>
                <article>
                    <h2>Features</h2>
                    <ul>
                        <li>Supports legacy and NPF posts</li>
                        <li>Keyboard navigation between tracks</li>
                        <li>Pagination between blog pages</li>
                    </ul>
                </article>
                <div className={styles.videoContainer}>
                    <video src='/maestro-demo.mp4' muted autoPlay loop />
                </div>
            </section>
            <footer className={footerClasses}>
                <nav className='flex align-center space-between'>
                    <Link href='/'>Back</Link>
                    <Link href='https://github.com/cornetespoir/audio-playlist?tab=readme-ov-file#maestro' target='_blank'>View on GitHub</Link>
                    <Link className={styles.site} href='https://maestro.bridgette.dev/' target='_blank'>Visit Site</Link>
                </nav>
            </footer>
        </main>
    )
}