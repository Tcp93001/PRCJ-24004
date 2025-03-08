import './Card.css'

function Card({ className, children}) {
  const classes= `card ${className}`

  return (
    <div>
      <div className={classes}>{children}</div>
    </div>
  )
}

export default Card