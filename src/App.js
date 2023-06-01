import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousal from "./components/Carousal/Carousal";
import { useState } from "react";
import { useReducer } from "react";
import { reducerFunction } from "./reducers/index";

function App() {
  const [imageList] = useState([
    "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
  ]);

  const [App_Reducer_State, dispatch] = useReducer(reducerFunction, {
    ImageIndex: 0,
    maxLength: imageList.length,
  });

  const onNext = () => {
    dispatch({ type: "Go_Next" });
  };
  const onBack = () => {
    dispatch({ type: "Go_Previous" });
  };

  const currentImage = imageList[App_Reducer_State.ImageIndex];

  return (
    <div className="App">
      <HeaderComponent title="Carousal Component" />
      <Carousal
        nextHandler={onNext}
        previousHandler={onBack}
        imgPath={currentImage}
      />
    </div>
  );
}

export default App;
