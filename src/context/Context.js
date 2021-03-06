import React, { createContext, useState, useEffect } from "react";
// import {firebase, db, auth} from "../firebase";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [user, setUser] = useState("");
  const [selectedItem, setSelectedItem] = useState();
  const [selectedCat, setSelectedCat] = useState("0");
  const [total, setTotal] = useState(0);
  const [newOrderProductList, setNewOrderProductList] = useState([]);
  const [selected, setSelected] = useState("home");
  const [leftOpen, setLeftOpen] = useState(false);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("logged in", user);
  //       setUser(user);
  //     }
  //     else console.log("Not logged in")
  //   })
  // }, [])

  return (
    <Context.Provider
      value={
        {
          user, setUser,
          data, setData,
          total, setTotal,
          selectedCat, setSelectedCat,
          selectedItem, setSelectedItem,
          newOrderProductList, setNewOrderProductList,
          selected, setSelected,
          leftOpen, setLeftOpen,
          
        }
      }
    >
      {children}
    </Context.Provider>
  )
};
export default ContextProvider;

