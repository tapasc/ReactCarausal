import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Carousal from "./components/Carousal/Carousal";
import { useState } from "react";
import { useReducer } from "react";
import { reducerFunction } from "./reducers/index";
import { imageListData } from "./data/imageList";

function App() {
  const [imageList] = useState(imageListData);
  const initialState = {
    ImageIndex: 0,
    maxLength: imageList.length,
  };
  const [App_Reducer_State, dispatch] = useReducer(
    reducerFunction,
    initialState
  );

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
