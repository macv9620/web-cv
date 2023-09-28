import HashLoader from 'react-spinners/HashLoader'
import './HashLoaderModal.css'

const HashLoaderModal = () => {
  return (
    <div
      className='spinner-background'
    >
      <HashLoader
        color='#e76f51'
        loading
      />
    </div>
  )
}

export { HashLoaderModal }
