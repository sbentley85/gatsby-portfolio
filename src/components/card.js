import React from "react"
import portfolioStyles from "./portfolio.module.scss"

const Card = props => {
  const data = props.data
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      className={portfolioStyles.card}
    >
      <div className={portfolioStyles.cardImage}>
        <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
          <img src={data.imgSRC} alt={data.imgAlt} />
        </a>
      </div>
      <div className={portfolioStyles.cardContent}>
        <h3 className={portfolioStyles.cardTitle}>{data.title}</h3>
        {data.description}
      </div>
      <div className={portfolioStyles.cardButtons}>
        <a href={data.projectLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>

        {data.githubLink ? (
          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Card
