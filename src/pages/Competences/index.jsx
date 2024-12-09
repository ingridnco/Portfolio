import htmlLogo from "../../assets/htmlLogo.webp"
import cssLogo from "../../assets/cssLogo.webp"
import reactLogo from "../../assets/reactLogo.webp"
import jsLogo from "../../assets/jsLogo.webp"
import nodeLogo from "../../assets/nodeLogo.webp"
import expressLogo from "../../assets/expressLogo.webp"
import mongoLogo from "../../assets/mongoLogo.webp"
import yellowStar from "../../assets/yellow_star.webp"
import greyStar from "../../assets/grey_star.webp"

// Composant pour une seule compétence
const SkillCard = ({ title, logo, level }) => {
  return (
    <div className="skill-card">
      <p className="skill-title">{title}</p>
      <img src={logo} alt="Skill logo" className="skill-logo" />
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={i < level ? yellowStar : greyStar} alt="star" className="star" />
        ))}
      </div>
    </div>
  )
}

// Liste des compétences
const Skills = () => {
  const skills = [
    { title: "HTML 5", logo: htmlLogo, level: 5 },
    { title: "CSS 3", logo: cssLogo, level: 5 },
    { title: "React", logo: reactLogo, level: 4 },
    { title: "JavaScript", logo: jsLogo, level: 3 },
    { title: "Node.js", logo: nodeLogo, level: 3 },
    { title: "Express.js", logo: expressLogo, level: 3 },
    { title: `MongoDB Atlas`, logo: mongoLogo, level: 3 },
  ]

  return (
    <div className="main">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} logo={skill.logo} level={skill.level} />
        ))}
      </div>
    </div>
  )
}

export default Skills
