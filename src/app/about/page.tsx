import styles from './about.module.css'

export default function Home() {
    return (
        <section className={styles.about}>
            <aside>
            </aside>

            <article>
                <h1>About the dev</h1>  
                <p>
                    In 2015 I started making my own tumblr themes, and I've been coding ever since! I'm particularly passionate about <span>CSS</span> and pushing its limits with  
                    <span className='confetti'>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        animations
                    </span> 
                     and other <span className='fun'>fun</span> <span className='interactions'>interactions</span>.
                </p>    
                <a href="/" className={styles.back}>back to the home page</a>    
            </article>
        </section>
    )
}