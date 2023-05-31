import { useState, useEffect } from "react";
const useImageStore = ({ initialState = 0, maxLength }) => {
  const [currentIndex, setCurrentIndex] = useState(initialState);

  useEffect(() => {
    console.log("currentIndex::", currentIndex);
  }, [currentIndex]);

  function updateNextCount() {
    setCurrentIndex((previousState) => {
      if (+previousState < +(maxLength - 1)) {
        return previousState + 1;
      } else {
        return previousState;
      }
    });
  }
  function updatePreviousCount() {
    setCurrentIndex((previousState) => {
      if (+previousState >= 1) {
        return previousState - 1;
      } else {
        return previousState;
      }
    });
  }
  return [currentIndex, updateNextCount, updatePreviousCount];
};
export default useImageStore;
