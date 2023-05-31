import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousal from "./components/Carousal/Carousal";
import { ImageProvider } from "./context/ImageContext";
import { useState } from "react";
import useImageStore from "./hooks/useImageStore";
function App() {
  const [imageList] = useState([
    "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
  ]);

  const [Index, updateNextFunction, updatePreviousFunction] = useImageStore({
    initialState: 0,
    maxLength: imageList.length,
  });

  const state = {
    _currentImage: imageList[Index],
    _next: () => {
      updateNextFunction();
    },
    _back: () => {
      updatePreviousFunction();
    },
  };

  return (
    <div className="App">
      <HeaderComponent title="Carousal Component" />
      <ImageProvider value={state}>
        <Carousal />
      </ImageProvider>
    </div>
  );
}

export default App;
