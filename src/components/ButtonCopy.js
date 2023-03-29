import './ButtonCopy.css'

const ButtonCopy = ({cod}) => {
  return (
    <div className='divButton'>      <button className='btn' onClick={() => {
      navigator.clipboard
      .writeText(cod)
      
    }}>Copiar</button></div>
  )
}

export default ButtonCopy