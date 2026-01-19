import './Pill.css'

export default function Pill({ children, variant = 'default', className = '' }) {
  const variantClass = variant === 'muted' ? 'pill--muted' : ''
  
  return (
    <span className={`pill ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  )
}