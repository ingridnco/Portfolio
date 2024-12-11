import "../../styles/index.scss"

const Card = ({ imgSrc, title, description, onCardClick, skills }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img className="img" src={require(`../../assets/${imgSrc}`)} alt={title} />
      <h3 className="noDeco">{title}</h3>
      <div className="card__logos">
        {skills.map((skill, index) => (
          <img key={index} className="card__logo" src={require(`../../assets/${skill}`)} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      <p className="noDeco">{description}</p>
    </div>
  )
}

export default Card
