import './Loading.css'

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="loading">
      <div className="loading__spinner" />
      <p className="loading__message">{message}</p>
    </div>
  )
}