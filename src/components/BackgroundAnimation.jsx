import { useState, useEffect, useRef } from 'react'

const COLORS = ['#8B5CF6', '#06B6D4', '#F59E0B']

function createParticles() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 30,
    baseX: Math.random() * 100,
    baseY: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    speed: 0.15 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
  }))
}

const BackgroundAnimation = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const [tick, setTick] = useState(0)
  const target = useRef({ x: 0.5, y: 0.5 })
  const raf = useRef()
  const cursorGlow = useRef(null)
  const [particles] = useState(createParticles)

  const [driftOrbs] = useState(() =>
    [
      { color: 'rgba(6,182,212,0.2)', size: 350, blur: 80, speedX: 0.12, speedY: 0.18, phaseX: 0, phaseY: 2, ampX: 40, ampY: 40 },
      { color: 'rgba(245,158,11,0.18)', size: 300, blur: 90, speedX: 0.1, speedY: 0.15, phaseX: 3, phaseY: 1, ampX: 35, ampY: 35 },
    ]
  )

  useEffect(() => {
    const handleMouse = (e) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
      if (cursorGlow.current) {
        cursorGlow.current.style.left = `${e.clientX}px`
        cursorGlow.current.style.top = `${e.clientY}px`
      }
    }
    const handleLeave = () => {
      target.current = { x: 0.5, y: 0.5 }
    }
    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    let frame = 0
    const animate = () => {
      frame += 0.01
      setMouse((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.06,
        y: prev.y + (target.current.y - prev.y) * 0.06,
      }))
      setTick(frame)
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  const mw = mouse.x * window.innerWidth
  const mh = mouse.y * window.innerHeight

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true" style={{ zIndex: -1 }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {driftOrbs.map((orb, i) => {
        const ox = orb.ampX * Math.sin(tick * orb.speedX + orb.phaseX)
        const oy = orb.ampY * Math.cos(tick * orb.speedY + orb.phaseY)
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle at center, ${orb.color}, transparent 70%)`,
              left: `calc(50% + ${ox}%)`,
              top: `calc(50% + ${oy}%)`,
              transform: 'translate(-50%, -50%)',
              filter: `blur(${orb.blur}px)`,
            }}
          />
        )
      })}

      {particles.map((p) => {
        const w = window.innerWidth
        const h = window.innerHeight
        const floatX = Math.sin(tick * p.speed + p.phase) * 20
        const floatY = Math.cos(tick * p.speed * 0.7 + p.phase) * 25

        const px = (p.baseX / 100) * w + floatX
        const py = (p.baseY / 100) * h + floatY

        const dx = mw - px
        const dy = mh - py
        const dist = Math.sqrt(dx * dx + dy * dy)
        const repel = dist > 0 && dist < 250 ? (250 - dist) / 250 : 0
        const angle = Math.atan2(dy, dx)
        const pushX = Math.cos(angle) * repel * 80
        const pushY = Math.sin(angle) * repel * 80

        return (
          <div
            key={p.id}
            className="absolute"
            style={{
              width: p.size,
              height: p.size,
              left: px + pushX,
              top: py + pushY,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(5px)',
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{ backgroundColor: p.color, opacity: 0.8 }}
            />
          </div>
        )
      })}

      <div
        ref={cursorGlow}
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  )
}

export default BackgroundAnimation
