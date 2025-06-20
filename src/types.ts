import { createContext, Dispatch, SetStateAction } from "react"

export interface Project {
    title?: string
    image?: string
    altText?: string
    url?: string
    description?: string
    emoji?: string
}

export enum TransitionType {
    enter = 'enter',
    exit = 'exit'
}
export interface PageContextType {
    transition: TransitionType | null
    setTransition: Dispatch<SetStateAction<TransitionType | null>>
}

export const PageContext = createContext<PageContextType| undefined>(undefined)
