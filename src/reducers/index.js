export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "Go_Next":
      return { ...state, ImageIndex: action.payload };

    case "Go_Previous":
      return { ...state, ImageIndex: action.payload };
    default:
      return state;
  }
};
