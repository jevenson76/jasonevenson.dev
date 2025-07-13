'use client';
import { useEffect, useState } from 'react';

export function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
      }))
    );
  }, []);
  return (
    <div className="quantum-field">
      {particles.map(p => (
        <div
          key={p.id}
          className="quantum-particle"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}