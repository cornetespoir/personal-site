'use client'
import { usePageContext } from "@/app/PageContext"
import { TransitionType } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface FooterNavProps {
    footerClasses: string
    githubURL: string
    siteURL: string
    siteStyles: string
}

export function FooterNav({
    footerClasses,
    githubURL,
    siteURL,
    siteStyles
}: FooterNavProps) {
    const { setTransition } = usePageContext()
    const router = useRouter()
    function pageTransition() {
        console.log('exit page from footer nav')
        setTransition(TransitionType.exit)
        setTimeout(() => {
            router.push('/')
        }, 1000)
    }
    return (
        <footer className={footerClasses}>
            <nav className='flex align-center space-between'>
                <button role='button' onClick={pageTransition}>Back</button>
                <Link href={githubURL} target='_blank'>View on GitHub</Link>
                <Link className={siteStyles} href={siteURL} target='_blank'>Visit Site</Link>
            </nav>
        </footer>
    )
}