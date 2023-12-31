'use client'

import { useEffect, useRef } from 'react'

export default function useKeyDown(
  callback: (element: HTMLDivElement) => void,
) {
  const ref = useRef(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (ref.current && event.key === 'Escape') {
        if (callback) callback(ref.current)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return ref
}
