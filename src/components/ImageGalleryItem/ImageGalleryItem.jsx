import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, smallImage, largeImg, onOpenModal }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={() => onOpenModal(largeImg)}>
      <img src={smallImage} alt={id} className={css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatUrl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
