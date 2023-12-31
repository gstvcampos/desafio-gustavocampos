'use client'

import { useEffect, useRef } from "react";

export const useOutClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        if (callback) callback()
      }
    }

    window.addEventListener("mousedown", handleOutClick)
    window.addEventListener("touchstart", handleOutClick)

    return () => {
      window.removeEventListener("mousedown", handleOutClick)
      window.removeEventListener("touchstart", handleOutClick)
    };
  }, [])

  return ref
}
