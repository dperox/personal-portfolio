"use client"

import { useEffect, useRef, useState } from "react"

export function CodeGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const tiltRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMotionGranted = () => setMotionEnabled(true)
    const handleMotionRevoked = () => setMotionEnabled(false)

    window.addEventListener("motionPermissionGranted", handleMotionGranted)
    window.addEventListener("motionPermissionRevoked", handleMotionRevoked)

    return () => {
      window.removeEventListener("motionPermissionGranted", handleMotionGranted)
      window.removeEventListener("motionPermissionRevoked", handleMotionRevoked)
    }
  }, [])

  useEffect(() => {
    if (!motionEnabled) return

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const beta = event.beta || 0 // -180 to 180
      const gamma = event.gamma || 0 // -90 to 90

      // Normalize to -1 to 1 range and dampen
      tiltRef.current.x = Math.max(-1, Math.min(1, gamma / 45)) * 0.3
      tiltRef.current.y = Math.max(-1, Math.min(1, beta / 90)) * 0.3
    }

    window.addEventListener("deviceorientation", handleOrientation)

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation)
    }
  }, [motionEnabled])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff41"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const tiltOffsetX = motionEnabled ? tiltRef.current.x * 20 : 0
        const x = i * fontSize + tiltOffsetX
        const y = drops[i] * fontSize

        const opacity = Math.min(1, Math.max(0.1, 1 - (y / canvas.height) * 0.5))
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }

        drops[i] += 0.3
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [motionEnabled])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-black opacity-30"
      style={{ imageRendering: "pixelated" }}
    />
  )
}
