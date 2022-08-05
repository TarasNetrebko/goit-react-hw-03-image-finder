export const ImageGalleryItem = ({ id, smallImage, onToggle }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onToggle(id)}>
      <img src={smallImage} alt={id} className="ImageGalleryItem-image"/>
    </li>
  );
};
