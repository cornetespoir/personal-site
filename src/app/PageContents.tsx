import { projects } from './projects'
import Link from 'next/link'
import { Projects } from '@/components/Projects'

export function PageContents() {


    return (
        <>
            <nav className="flex space-around">
                <Link href="/">Home</Link>
                <Link target="_blank" href="/about">About</Link>
                <Link target="_blank" href="https://egg.design/tagged/blog">Blog</Link>
            </nav>
            <header className='full-width flex align-center justify-center'>
                <div className='half-width'>
                    <div className='folder'>
                        <h1> I&apos;m <span className="confetti"><i></i><i></i><i></i><i></i><i></i><i></i>Bridgette</span>, a front-end developer</h1>
                        <p>I develop responsive, accessible UI and love pushing the boundaries of CSS. </p>
                    </div>
                </div>
                <div className="pixel-container flex align-center justify-center">
                    <div className='me'></div>
                </div>
            </header>
            <main>
                <section>
                    <h2>Skills</h2>
                    <div className='skills'>
                    <article>
                        <div className='sparkle'><span></span></div>
                        <h3><span>React</span> Development + Architecture</h3>
                        <ul>
                            <li>Building and maintaining reusable components with Storybook</li>
                            <li>Context API for state management</li>
                            <li>Utilizing built-in and custom hooks</li>
                            <li>Unit testing with Jest</li>
                            <li>SSR + dynamic routing with Next.js </li>
                        </ul>
                           <div className='sparkle'><span></span></div>
                    </article>
                    <article>
                        <h3><span>Styling + UI</span> HTML5, CSS3, JavaScript</h3>
                        <ul>
                            <li>Responsive design with Flexbox and CSS Grid</li>
                            <li>Semantic HTML</li>
                            <li>WCAG standards, ARIA labels, screen-reader friendly UI</li>
                        </ul>
                    </article>
                    <article>
                        <h3><span>Languages</span> Libraries + Frameworks</h3>
                        <ul>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>GraphQL</li>
                        </ul>
                    </article>
                    <article>
                        <h3><span>Workflow</span> Soft skills</h3>
                        <ul>
                            <li>Mentoring and teaching front end skills and best practices</li>
                            <li>Collaboration with UI design teams</li>
                            <li>Architecture discussions and documentation</li>
                            <li>Explaining concepts and decisions to non-technical teams</li>
                        </ul>
                    </article>
                     <article>
                        <h3><span>Misc.</span> Also familiar with</h3>
                        <ul>
                            <li>C# / .NET</li>
                            <li>React Native</li>
                            <li>Vue</li>
                            <li>Figma</li>
                        </ul>
                    </article>
                    </div>
                </section>
                <section className='passions'>
                    <article className='flex space-between'>
                        <div className='content'>
                            <h2 className='funky-underline'>Specializations</h2>
                        <div className='p'>
                            <p>I&apos;m all about adding <span className='confetti'><i></i><i></i><i></i><i></i><i></i><i></i>whimsy</span> to web development. I like using fun shapes, animations, and interactive elements, all while keeping things as accessible as possible! While I use Bootstrap in my professional work, I like writing my CSS from scratch to explore what&apos;s possible with unique layouts and interactions.</p>
                        </div>
                        </div>
                    </article>
                </section>
                <section>
                    <h2><span>Misc. Projects</span></h2>
                    <Projects projects={projects} />
                </section>
            </main>
        </>
    )
}