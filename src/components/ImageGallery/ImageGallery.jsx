import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from "./ImageGallery.module.css"
import PropTypes from "prop-types"

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatUrl, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          smallImage={webformatUrl}
          largeImg={largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatUrl: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onOpenModal: PropTypes.func.isRequired
}