import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Grid background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1 }}>
          {/* Icon */}
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '70px',
              fontWeight: '700',
              color: 'white',
            }}
          >
            {'{dp}'}
          </div>

          {/* Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '56px', fontWeight: '700', color: 'white' }}>
              Daniel Piro
            </div>
            <div style={{ fontSize: '32px', color: '#3B82F6' }}>
              Technical Lead @ Meta
            </div>
            <div style={{ fontSize: '24px', color: '#94a3b8' }}>
              AI Wearables Integration
            </div>
          </div>
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '60px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: '2px solid #22c55e',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#22c55e',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Generative AI
          </div>
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: '2px solid #3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              color: '#3B82F6',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Wearables
          </div>
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: '2px solid #f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              color: '#f59e0b',
              fontSize: '18px',
              fontWeight: '600',
            }}
          >
            Computer Vision
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '20px',
            color: '#64748b',
          }}
        >
          danielpiro.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

