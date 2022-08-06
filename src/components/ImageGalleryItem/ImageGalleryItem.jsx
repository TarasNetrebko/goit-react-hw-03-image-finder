export const ImageGalleryItem = ({ id, smallImage, largeImg, onToggle }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onToggle(largeImg)}>
      <img src={smallImage} alt={id} className="ImageGalleryItem-image"/>
    </li>
  );
};
