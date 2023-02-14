import { createContext, useEffect, useReducer } from "react";
export const userContext = createContext();
const initialValues =JSON.parse(localStorage.getItem("user")) ||
 {
  user: null,
  isAuth: false,
  userInfo: null,
};

const reducer = (state, action) => {
    var data = null;
    switch (action.type) {
      case "LOGIN":
        data = {
          ...state,
          user: action.payload,
          isAuth: true,
        };
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      case "AddUSERINFO":
        data = {
          ...state,
          userInfo: action.payload,
        };
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      case "LOGOUT":
        data = {
          ...state,
          user: null,
          isAuth: false,
          userInfo: null,
        };
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      default:
        return state;
    }
  };
  
  export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);
  
    useEffect(() => {
      console.log("user context", state);
    }, [state]);
  
    return (
      <userContext.Provider value={[state, dispatch]}>
        {children}
      </userContext.Provider>
    );
  };