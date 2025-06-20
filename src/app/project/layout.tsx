'use client'
import { useEffect } from 'react';
import { usePageContext } from '../PageContext';
import { TransitionType } from '@/types';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { setTransition} = usePageContext()
    
    useEffect(() => {
        setTransition(null)
        setTransition(TransitionType.enter)
    }, [])
  return (
    <div>
        {children}
    </div>
  )
}
