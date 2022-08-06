import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ images, onToggle }) => {
    return <ul className="ImageGallery">
      {images.map(({ id, webformatUrl, largeImageURL }) => <ImageGalleryItem key={id} id={id} smallImage={webformatUrl} largeImg={largeImageURL} onToggle={onToggle} />)}
  </ul>;
};
