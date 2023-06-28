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

        <div className='modal-message-container__text'>{modalMessageToShow.message}</div>
        <div className='modal-message-container__buttons'>
          <button
            className={modalMessageToShow.type === 'success'
              ? 'modal-message-container__buttons--green'
              : 'modal-message-container__buttons--red'}
            onClick={hideModal}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export { ModalMessage }
