import { Project } from "@/types";
import Link from "next/link";
import { ReactElement } from "react";

interface FeaturedProjectProps {
    project: Project
}

export function FeaturedProject({
    project
}: FeaturedProjectProps): ReactElement | null {
    const {title, altText, image, url, description, emoji} = project
    const isExternalLink = url?.includes('https://')

    if (url?.trim() === '' || url == null) {
        return null
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
            <div className='buttons flex centered justify-center'>
                <Link href={url} target={isExternalLink ? '_blank' : ''}>Learn more</Link>
            </div>
        </article>
    )
}