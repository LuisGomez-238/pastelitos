import './Y2KDecorations.css'

export function Butterfly({ className = '' }) {
  return (
    <div className={`butterfly-decoration ${className}`}>
      🦋
    </div>
  )
}

export function Star({ className = '' }) {
  return (
    <div className={`star-decoration ${className}`}>
      ⭐
    </div>
  )
}

export function Sparkles({ className = '' }) {
  return (
    <div className={`sparkles-decoration ${className}`}>
      ✨
    </div>
  )
}