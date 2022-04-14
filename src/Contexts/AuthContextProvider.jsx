import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Box } from "./Navbar.styled.js";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [data, setData] = React.useState([])
  const [availableDates, setAvailableDates] = useState([])
  const [show, setShow] = React.useState(false)
  const [firstSlot, setFirstSlot] = React.useState(180)
  const [secondSlot, setSecondSlot] = React.useState(240)
  const [open, setOpen] = React.useState(false);
  const [history, setHistory] = useState([])
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AuthContext.Provider value={{open2, setOpen2 ,history, handleClose2,handleOpen2, setHistory,secondSlot, setSecondSlot, data, setData, availableDates, setAvailableDates, show, setShow, handleOpen, handleClose, open, setOpen, firstSlot, setFirstSlot }}>
      {children}
    </AuthContext.Provider>
  );
}
