import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContextProvider'
import { useContext } from 'react'

import styles from "./style.module.css";
const ShowDoctors = ({card}) => {
  const {history, setShow, show} =  useContext(AuthContext)
    
  let navigate =  useNavigate()
  const goToBook = () => { 
      navigate(`/${card._id}`)
   }
  return (
    <div className={styles.card}>
        <h2>{card.name}</h2>
        <button onClick={goToBook}>Book Slot</button>
        <button onClick={() => setShow(!show)}>History</button>
        
    </div>
  )
}

export default ShowDoctors