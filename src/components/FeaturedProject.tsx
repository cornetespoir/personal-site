'use client'
import { usePageContext } from "@/app/PageContext";
import { Project, TransitionType } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { ReactElement } from "react";

interface FeaturedProjectProps {
    project: Project
    position?: string
}

export function FeaturedProject({
    project,
    position
}: FeaturedProjectProps): ReactElement | null {
    if (project == null) {
        return null
    }
    const { title, altText, image, url, description } = project
    const isExternalLink = url?.includes('https://')
    if (url?.trim() === '' || url == null) {
        return null
    }
    const projectClassNames = clsx(
        'project',
        position && `project-${position}`
    )

    const featured = project.title === 'Maestro'

    return (
        <article className={projectClassNames}>
            {featured && <div className="sparkle"><span></span></div>}
            <div className='preview'>
                <img alt={altText} src={image} />
            </div>
            <div className='text'>
               <div className='title flex space-between align-center'>
                 <h3>{title}</h3>
                 <span className='pill'>View Project</span>
               </div>
                <p>{description}</p>
                              {featured && <div className="sparkle"><span></span></div>}

            </div>
            <Link
                className='flex centered justify-center stretched'
                href={url}
                target={isExternalLink ? '_blank' : ''
                }>
                    <span className='sr-text'>Go to the project</span>
            </Link>
        </article>
    )
}