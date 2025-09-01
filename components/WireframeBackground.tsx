'use client'

import { useEffect, useRef } from 'react'

export default function WireframeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const shapes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      rotation: number
      rotationSpeed: number
      type: 'cube' | 'pyramid' | 'sphere' | 'torus'
      size: number
    }> = []

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ['cube', 'pyramid', 'sphere', 'torus'][Math.floor(Math.random() * 4)] as any,
        size: 30 + Math.random() * 80
      })
    }

    const drawCube = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      
      const s = size / 2
      ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 + Math.sin(Date.now() * 0.002) * 0.2})`
      ctx.lineWidth = 2
      ctx.shadowColor = '#9333ea'
      ctx.shadowBlur = 10
      
      ctx.beginPath()
      ctx.moveTo(-s, -s)
      ctx.lineTo(s, -s)
      ctx.lineTo(s, s)
      ctx.lineTo(-s, s)
      ctx.closePath()
      
      ctx.moveTo(-s * 0.7, -s * 0.7)
      ctx.lineTo(s * 0.7, -s * 0.7)
      ctx.lineTo(s * 0.7, s * 0.7)
      ctx.lineTo(-s * 0.7, s * 0.7)
      ctx.closePath()
      
      ctx.moveTo(-s, -s)
      ctx.lineTo(-s * 0.7, -s * 0.7)
      ctx.moveTo(s, -s)
      ctx.lineTo(s * 0.7, -s * 0.7)
      ctx.moveTo(s, s)
      ctx.lineTo(s * 0.7, s * 0.7)
      ctx.moveTo(-s, s)
      ctx.lineTo(-s * 0.7, s * 0.7)
      
      ctx.stroke()
      ctx.restore()
    }

    const drawPyramid = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      
      const s = size / 2
      ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 + Math.sin(Date.now() * 0.002 + 1) * 0.2})`
      ctx.lineWidth = 2
      ctx.shadowColor = '#9333ea'
      ctx.shadowBlur = 10
      
      ctx.beginPath()
      ctx.moveTo(0, -s)
      ctx.lineTo(-s, s)
      ctx.lineTo(s, s)
      ctx.closePath()
      
      ctx.moveTo(0, -s)
      ctx.lineTo(0, s * 0.3)
      ctx.moveTo(-s, s)
      ctx.lineTo(s * 0.3, s * 0.3)
      ctx.moveTo(s, s)
      ctx.lineTo(-s * 0.3, s * 0.3)
      
      ctx.stroke()
      ctx.restore()
    }

    const drawSphere = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      
      const radius = size / 2
      ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 + Math.sin(Date.now() * 0.002 + 2) * 0.2})`
      ctx.lineWidth = 2
      ctx.shadowColor = '#9333ea'
      ctx.shadowBlur = 10
      
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.stroke()
      
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2
        ctx.beginPath()
        ctx.ellipse(0, 0, radius * Math.abs(Math.cos(angle)), radius, angle, 0, Math.PI * 2)
        ctx.stroke()
      }
      
      ctx.beginPath()
      ctx.ellipse(0, 0, radius, radius * 0.3, 0, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.restore()
    }

    const drawTorus = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      
      const outerRadius = size / 2
      const innerRadius = outerRadius * 0.6
      ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 + Math.sin(Date.now() * 0.002 + 3) * 0.2})`
      ctx.lineWidth = 2
      ctx.shadowColor = '#9333ea'
      ctx.shadowBlur = 10
      
      ctx.beginPath()
      ctx.arc(0, 0, outerRadius, 0, Math.PI * 2)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(0, 0, innerRadius, 0, Math.PI * 2)
      ctx.stroke()
      
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8
        const x1 = Math.cos(angle) * innerRadius
        const y1 = Math.sin(angle) * innerRadius
        const x2 = Math.cos(angle) * outerRadius
        const y2 = Math.sin(angle) * outerRadius
        
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
      
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        switch (shape.type) {
          case 'cube':
            drawCube(shape.x, shape.y, shape.size, shape.rotation)
            break
          case 'pyramid':
            drawPyramid(shape.x, shape.y, shape.size, shape.rotation)
            break
          case 'sphere':
            drawSphere(shape.x, shape.y, shape.size, shape.rotation)
            break
          case 'torus':
            drawTorus(shape.x, shape.y, shape.size, shape.rotation)
            break
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  )
}