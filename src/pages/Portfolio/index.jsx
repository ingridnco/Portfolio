import "../../styles/index.scss"
import data from "../../data/projets.json"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import Card from "../../components/Card"
import SlideShow from "../../components/SlideShow"

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
          <h2 style={{ color: "#fff" }}>{selectedCard.title}</h2>
          <SlideShow pictures={selectedCard.pictures} />
          <button className="modal-close" onClick={closeModal} style={{ backgroundColor: "#fff", border: "none", borderRadius: "10px" }}>
            X
          </button>
        </Modal>
      )}
    </div>
  )
}

export default CardWrapper
