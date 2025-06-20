'use client'
import { ReactNode, useContext, useEffect, useState } from "react"
import { PageContext, TransitionType } from "@/types"
import clsx from "clsx"

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
    // default states
    const [transition, setTransition] = useState<TransitionType | null>(TransitionType.enter)

    const initialValues = {
        transition, setTransition
    }
    
    const pageClasses = clsx(
            'transition',
            transition === TransitionType.exit && 'transition-exit',
            transition === TransitionType.enter && 'transition-enter'
    )

    return (
        <PageContext.Provider value={initialValues}>
          <div className={pageClasses}>
                  {children}
          </div>
        </PageContext.Provider>
    )
}

/**
 * Force context to be used inside of context provider
 */
export const usePageContext = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error('must be used within the SearchDataProvider')
  }
  return context
}