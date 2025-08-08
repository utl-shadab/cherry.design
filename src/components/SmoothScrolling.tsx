"use client"
import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }: React.PropsWithChildren<{}>) {
  console.log("SmoothScrolling component rendered");

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true, gestureOrientation: 'vertical' }}>
      {children}

    </ReactLenis>
  )
}
export default SmoothScrolling
