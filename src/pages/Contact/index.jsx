import { Link } from "react-router-dom"
import Mail from "../../assets/mail.webp"

const About = () => {
  return (
    <>
      <main className="main">
        <div className="contact_text">
          <p>
            Vous avez un projet ? <br />
            Votre site a besoin de renouveau ? <br />
            Ecrivez-moi :
          </p>
          <Link to="mailto:ingridseurin@gmail.com">
            <img className="mail" src={Mail} alt="" />
          </Link>
        </div>
      </main>
    </>
  )
}
export default About
