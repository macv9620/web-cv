import HashLoader from 'react-spinners/HashLoader'
import './HashLoaderModal.css'

const HashLoaderModal = () => {
  return (
    <div
      className='spinner-background'
    >
      <HashLoader
        color='#47BB78'
        loading
      />
    </div>
  )
}

export { HashLoaderModal }
