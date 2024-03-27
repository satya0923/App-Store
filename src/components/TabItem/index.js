// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabItemDetails
  const tabClassName = isActive ? 'active' : 'non-active'
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-name ${tabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
