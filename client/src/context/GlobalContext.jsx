/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
  role: "public",
  isLoggenIn: false,
  login: () => {},
  logOut: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [isLoggenIn, setIsLoggenIn] = useState(initialContext.isLoggenIn);
  const [role, setRole] = useState(initialContext.role);

  // useEffect(() => {
  //     localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
  // }, [tasks]);
  useEffect(() => {
    //TO DO auth api > login
    setIsLoggenIn(false);
    setRole("public");
  }, []);

  function login() {
    setIsLoggenIn(true);
  }
  function logOut() {
    setIsLoggenIn(false);
  }

  const value = {
    isLoggenIn,
    setIsLoggenIn,
    logOut,
    role,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
