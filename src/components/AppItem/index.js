import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {imageUrl, appName} = appItemDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="app-icon" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
