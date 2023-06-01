export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "Get_Latest_Index":
      return { ...state, ImageIndex: state.ImageIndex };
    case "Go_Next":
      if (state.ImageIndex + 1 >= state.maxLength) {
        return { ...state, ImageIndex: 0 };
      } else {
        return { ...state, ImageIndex: +state.ImageIndex + 1 };
      }
    case "Go_Previous":
      if (state.ImageIndex - 1 <= 0) {
        return { ...state, ImageIndex: state.maxLength - 1 };
      } else {
        return { ...state, ImageIndex: +state.ImageIndex - 1 };
      }
    default:
      return state;
  }
};
