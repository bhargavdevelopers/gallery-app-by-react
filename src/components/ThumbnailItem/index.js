import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const thumbnailClassName = isActive ? `active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
