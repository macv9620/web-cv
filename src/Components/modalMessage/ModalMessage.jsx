/* eslint-disable react/prop-types */
import { CircleCheck } from '../../icons/CircleCheck'
import { Close } from '../../icons/Close'
import './ModalMessage.css'

// eslint-disable-next-line react/prop-types
const ModalMessage = ({ setShowModalMessage, modalMessageToShow }) => {
  const hideModal = () => {
    setShowModalMessage(false)
  }

  return (
    <div className='modal-message-background'>
      <div className='modal-message-container'>
        {modalMessageToShow.type === 'success' && (
          <div className='modal-message-container__type--success'>
            <CircleCheck />
          </div>
        )}
        {modalMessageToShow.type === 'error' && (
          <div className='modal-message-container__type--error'>
            <Close />
          </div>
        )}
        <div>
          <div className='modal-message-container__text text-xl px-2'>{modalMessageToShow.message}</div>
          <div className='modal-message-container__text text-xl px-2 text-black'>También puedes encontrarme en <a target='_blank' className='underline font-bold' href='https://www.linkedin.com/in/mateo-alejandro-casta%C3%B1o-vasco-702555153' rel='noreferrer'>Linkedin</a></div>
        </div>

        <div className='modal-message-container__buttons'>
          <button
            className={modalMessageToShow.type === 'success'
              ? 'self-center h-full flex text-white bg-[#2a9d8f] border-0 py-2 px-6 focus:outline-none hover:bg-[#2a857a] rounded text-lg text-center'
              : 'self-center h-full flex text-white bg-[#e76f51] border-0 py-2 px-6 focus:outline-none hover:bg-[#e76f51] rounded text-lg text-center'}
            onClick={hideModal}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export { ModalMessage }
