import Link from "next/link";
import styles from '../project.module.css'
import clsx from "clsx";

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
                <video src='/theme-builder.mp4' muted autoPlay loop />
            </div>
            <header className={headerClasses}>
                <h1>Theme Builder</h1>
                <p>Build and customize a custom tumblr theme without any code.</p>
            </header>
            <article className={styles.about}>
                <h2>About the project</h2>
                <p>Tumblr theme bases are a staple in the theme making community, but a lot of bases are single column with limited options. I wanted to make an easy way to introduce more complex layouts to people interested in making themes! While the theme builder makes fully functional themes, they're flexible enough to be expanded upon to make completely unique and elaborate themes.</p>
            </article>
            <section className={sectionClasses}>
                <article>
                    <h2>Theme options</h2>
                    <p>When building your theme, you can</p>
                    <ul>
                        <li>Change the layout from single column, contained, or grid</li>
                        <li>Add a sidebar, header, or footer</li>
                        <li>Chang the location of the title, description, and navigation</li>
                    </ul>
                </article>
                <div className={styles.videoContainer}>
                    <video src='/theme-options.mp4' muted autoPlay loop />
                </div>
            </section>
            <section className={sectionClasses}>
                <div className={styles.videoContainer}>
                    <video src='/post-options.mp4' muted autoPlay loop />
                </div>
                <article>
                    <h2>Post options</h2>
                    <p>You can set your theme to use 400, 540, and 700px wide posts (as per Tumblr's media blocks), change the location of the post information, enable like and reblog buttons, and change the style of pinned posts.</p>
                </article>
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