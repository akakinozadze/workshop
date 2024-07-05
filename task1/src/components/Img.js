import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

const Img = () => {
  function getImageFileObject(imageFile) {
    console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  return (
    <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  );
};

export default Img;
