import "./InfoCrosshair.css"
import ButtonCopy from "./ButtonCopy"

const InfoCrosshair = ({player, img, cod}) => {
  return (
    <div className="container">
      <div className="containerCrosshair">
        <div className="containerName">
          <h4>{player}</h4>
        </div>
        <div><img src={img} alt="Mira" /></div>
        <ButtonCopy cod={cod}/>
      </div>
    </div>
  )
}

export default InfoCrosshair