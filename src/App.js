import { React360Viewer } from "react-360-product-viewer";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <React360Viewer
        imagesBaseUrl="./imageSeries/"
        imagesCount={9}
        imagesFiletype="png"
        mouseDragSpeed={30}
      />
    </>
  );
}

export default App;
