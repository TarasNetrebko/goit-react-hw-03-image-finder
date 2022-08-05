import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ images, onToggle }) => {
    return <ul className="ImageGallery">
      {images.map(({ id, webformatUrl }) => <ImageGalleryItem key={id} id={id} smallImage={webformatUrl} onToggle={onToggle} />)}
  </ul>;
};
