import styles from '../project.module.css'
import clsx from "clsx";
import { Metadata } from "next";
import { Video } from "@/components/Video";
import { FooterNav } from "@/components/FooterNav";

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
                <video src='/findtags.mp4' muted autoPlay loop />
            </div>
            <header className={headerClasses}>
                <h1>Findtags</h1>
                <p>A tumblr search alternative.</p>
            </header>
            <article className={styles.about}>
                <h2>About Findtags</h2>
                <p>After seeing a bunch of complaints about the updated tag search system, I used tumblr&apos;s API to recreate the older tag search while integrating some quality of life updates. </p>
                <p>Findtags was originally created in 2020 and rewritten in 2022 with React.</p>
            </article>

            <section className={sectionClasses}>
                <article>
                    <h2>Features</h2>
                    <ul>
                        <li>Unfiltered search results with optional per-user filters</li>
                        <li>Favorite tags</li>
                        <li>Timestamp based pagination</li>
                    </ul>
                </article>
                <Video src='/findtags-interactions.mp4' className={styles.videoContainer} />
            </section>

            <section className={sectionClasses}>
                <Video src='/findtags-filters.mp4' className={styles.videoContainer} />
                <article>
                    <h2>User filters</h2>
                    <p>Users can add key words that they don&apos;t want to appear in their search results. The option to view the post can also be disabled</p>
                </article>
            </section>
            <FooterNav
                footerClasses={footerClasses}
                siteStyles={styles.site}
                githubURL="https://github.com/cornetespoir/findtags"
                siteURL="https://findtags.egg.design"
            />
        </main>
    )
}