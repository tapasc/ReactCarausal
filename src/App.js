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
    if (App_Reducer_State.ImageIndex + 1 >= App_Reducer_State.maxLength) {
      dispatch({ type: "Go_Next", payload: 0 });
    } else {
      dispatch({ type: "Go_Next", payload: App_Reducer_State.ImageIndex + 1 });
    }
  };
  const onBack = () => {
    if (App_Reducer_State.ImageIndex - 1 <= 0) {
      dispatch({
        type: "Go_Previous",
        payload: App_Reducer_State.maxLength - 1,
      });
    } else {
      dispatch({
        type: "Go_Previous",
        payload: App_Reducer_State.ImageIndex - 1,
      });
    }
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
