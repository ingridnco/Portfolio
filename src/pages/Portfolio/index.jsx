import "../../styles/index.scss"
import data from "../../data/projets.json"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import Card from "../../components/Card"
import SlideShow from "../../components/SlideShow"
import Collapse from "../../components/Collapse"
import { Link } from "react-router-dom"

Modal.setAppElement("#root")

const CardWrapper = () => {
  const [cards, setCards] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    setCards(data)
  }, [])

  const openModal = card => {
    setSelectedCard(card)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCard(null)
    setIsModalOpen(false)
  }

  return (
    <div className="main flexwrap">
      <div className="card-wrapper">
        {cards.map((card, index) => (
          <Card key={index} imgSrc={card.imgSrc} title={card.title} skills={card.skills} description={card.description} onCardClick={() => openModal(card)} />
        ))}
      </div>

      {/* Modale */}
      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Détails de la carte"
          style={{
            content: {
              backgroundColor: "#6a72ae",
              inset: "20px",
              borderRadius: "20px",
              border: "none", // Retirer la bordure par défaut
              padding: "20px", // Ajout d'un peu de padding
              maxWidth: "800px", // Pour contrôler la largeur
              margin: "auto", // Centrer horizontalement
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Assombrir l'arrière-plan
            },
          }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
    <Link
      to={selectedCard.lien}
      target="_blank"
      style={{
        color: "#fff",
        fontSize: "24px",
        textDecoration: "none",
        transition: "color 0.3s",
        position: "relative",
      }}
      onMouseEnter={e => {
        const tooltip = e.target.nextElementSibling;
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";
      }}
      onMouseLeave={e => {
        const tooltip = e.target.nextElementSibling;
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden";
      }}>
      {selectedCard.title}
    </Link>
    <span className="seeCode">
      Voir le code
    </span>
  </div>
          <SlideShow pictures={selectedCard.pictures} />
          <div className="modal__description">
            <Collapse title="Détails" content={selectedCard.paragraphe} />
          </div>
          <button className="modal-close" onClick={closeModal} style={{ backgroundColor: "#fff", border: "none", borderRadius: "10px" }}>
            X
          </button>
        </Modal>
      )}
    </div>
  )
}

export default CardWrapper
