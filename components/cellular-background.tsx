"use client"

import { useEffect, useRef } from "react"

interface CellularBackgroundProps {
  cellSize?: number
  speed?: number
  color?: string
}

export function CellularBackground({
  cellSize = 30,
  speed = 0.5,
  color = "rgba(255, 255, 255, 0.15)",
}: CellularBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Animation loop
    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp
      const elapsed = timestamp - timeRef.current
      timeRef.current = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw cellular grid
      const cols = Math.ceil(canvas.width / cellSize) + 1
      const rows = Math.ceil(canvas.height / cellSize) + 1

      ctx.strokeStyle = color
      ctx.lineWidth = 1

      // Offset based on time for animation
      const offset = ((timestamp * speed) / 1000) % cellSize

      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * cellSize - offset
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * cellSize - offset
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw cells with varying opacity
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize - offset
          const y = j * cellSize - offset

          // Create a noise-like pattern
          const noise = Math.sin(x * 0.01 + timestamp * 0.0005) * Math.cos(y * 0.01 + timestamp * 0.0005) * 0.5 + 0.5

          if (noise > 0.7) {
            ctx.fillStyle = `rgba(255, 255, 255, ${noise * 0.1})`
            ctx.fillRect(x, y, cellSize, cellSize)
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    handleResize()
    window.addEventListener("resize", handleResize)
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [cellSize, speed, color])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-70 dark:opacity-100" />
}

