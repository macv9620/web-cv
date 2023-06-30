import HashLoader from 'react-spinners/HashLoader'
import './HashLoaderModal.css'

const HashLoaderModal = () => {
  return (
    <div
      className='spinner-background'
    >
      <HashLoader
        color='#2a9d8f'
        loading
      />
    </div>
  )
}

export { HashLoaderModal }
