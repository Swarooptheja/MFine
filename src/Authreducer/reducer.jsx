let Token = JSON.parse(localStorage.getItem("ADDAUTH")) || [];

let initData = {
  isAuth: Token.length === 0 ? false : true,
  isLoading: false,
};

export const reducer = (state = initData, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case "GET_LOGIN_REQUEST":
      return { ...state, isLoading: true };
    case "GET_LOGIN_SUCCESS":
      return { ...state, isLoading: false, isAuth: true };
    default:
      return state;
  }
};
