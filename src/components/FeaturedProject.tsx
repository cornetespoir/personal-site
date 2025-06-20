'use client'
import { usePageContext } from "@/app/PageContext";
import { Project, TransitionType } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

interface FeaturedProjectProps {
    project: Project
}

export function FeaturedProject({
    project
}: FeaturedProjectProps): ReactElement | null {
    const {setTransition} = usePageContext()
    const {title, altText, image, url, description, emoji} = project
    const isExternalLink = url?.includes('https://')
    const router = useRouter()
    if (url?.trim() === '' || url == null) {
        return null
    }

    function pageTransition() {
        setTransition(TransitionType.exit)
        setTimeout(() => {
            router.push(url ?? '/')
        }, 1000)
    }
    return (
        <article>
            <div className='emoji'><span>{emoji}</span></div>
            <div className='preview'>
                <img alt={altText} src={image} />
            </div>
            <div className='text'>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className='buttons flex centered justify-center' onClick={pageTransition}>
                {isExternalLink ? (<Link href={url} target={isExternalLink ? '_blank' : ''}>Learn more</Link>) : <span>Learn More</span>}
            </div>
        </article>
    )
}