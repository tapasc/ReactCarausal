import CircleButton from "../Buttons/CircleButton/CircleButton";
import React, { Suspense, lazy } from "react";
import "./Carousal.css";

const ImageContainer = lazy(() => import("../ImageContainer/ImageContainer"));

export default function Carousal({ nextHandler, previousHandler, imgPath }) {
  return (
    <div className="CarousalOuter">
      <div className="inner_container">
        <div className="LeftPanel">
          <CircleButton iconDirection="left" clickHandler={previousHandler} />
        </div>
        <div>
          <Suspense fallback="loading...">
            <ImageContainer path={imgPath} />
          </Suspense>
        </div>
        <div className="RightPanel">
          <CircleButton iconDirection="right" clickHandler={nextHandler} />
        </div>
      </div>
    </div>
  );
}
