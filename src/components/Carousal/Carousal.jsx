import CircleButton from "../Buttons/CircleButton/CircleButton";
import { ImageContext } from "../../context/ImageContext";
import React, { useContext, Suspense, lazy } from "react";
import "./Carousal.css";

const ImageContainer = lazy(() => import("../ImageContainer/ImageContainer"));

export default function Carousal() {
  const { _back, _next, _currentImage } = useContext(ImageContext);
  return (
    <div className="CarousalOuter">
      <div className="inner_container">
        <div className="LeftPanel">
          <CircleButton iconDirection="left" clickHandler={_back} />
        </div>
        <div>
          <Suspense fallback="loading...">
            <ImageContainer path={_currentImage} />
          </Suspense>
        </div>
        <div className="RightPanel">
          <CircleButton iconDirection="right" clickHandler={_next} />
        </div>
      </div>
    </div>
  );
}
