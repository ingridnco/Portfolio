import { useState } from "react"
import BW_arrow from "../../assets/BW_arrow.webp"
import FW_arrow from "../../assets/FW_arrow.webp"

const SlideShow = ({ pictures }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const totalImages = pictures.length

  const handlePrevImage = () => setImageIndex(currentIndex => (currentIndex > 0 ? currentIndex - 1 : totalImages - 1))

  const handleNextImage = () => setImageIndex(currentIndex => (currentIndex < totalImages - 1 ? currentIndex + 1 : 0))

  const SlideShowStyle = {
    transform: `translateX(-${imageIndex * 99.752}%)`,
    transition: "transform 0.6s ease",
  }

  return (
    <section className="SlideShow">
      {totalImages > 1 && (
        <>
          <div className="SlideShow__left">
            <img className="SlideShow__arrows" src={BW_arrow} alt="Précédente" onClick={handlePrevImage} />
          </div>
          <div className="SlideShow__right">
            <img className="SlideShow__arrows" src={FW_arrow} alt="Suivante" onClick={handleNextImage} />
          </div>
        </>
      )}

      <div className="SlideShow__pics">
        <div className="SlideShow__anim" style={SlideShowStyle}>
          {pictures.map((picture, index) => (
            <img key={`photo-${index}`} className="SlideShow__photo" src={picture} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        {totalImages > 1 && (
          <div className="imageCount">
            {imageIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </section>
  )
}

export default SlideShow
