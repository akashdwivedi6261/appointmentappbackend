import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styles from "./style.module.css";

import moment from 'moment'
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SlotsTiming from './SlotsTiming';
export default function SlotsPage() {
  const [dateState, setDateState] = useState(new Date())
  
  const { data, setData, setOpen,secondSlot, firstSlot, setFirstSlot, availableDates, setAvailableDates } = useContext(AuthContext)
  const { id } = useParams()
 let navigate = useNavigate()
  const goToHome = () => { 
    navigate("/")
   }
  React.useEffect(async () => {
    await axios.get(`https://nodejsappointment.herokuapp.com/doctors/${id}`).then((res) => {
      const { data: [doctorDetail] } = res
      const { availability } = doctorDetail
      setAvailableDates(availability)
      
      console.log(availability);
    })
  }, [])
  console.log("data", data);
  const changeDate = (e) => {
    // console.log(e.toDateString().split(" ")[2]);

    setDateState(e)

  }

  const checkAvailability = (val, e) => {
    availableDates.forEach((ele) => {
      if (ele.split("-")[0] == val.toDateString().split(" ")[2]) {
        if(firstSlot === 0 && secondSlot === 0) {
          setAvailableDates(availableDates.filter((a) => a.split("-")[0] !== ele.split("-")[0]))
        }
        setOpen(true)
        return
      }
     
    })
    // console.log(val.toDateString().split(" ")[2])
  }
  return (
    <div className={styles.parent}>
      <button className={styles.back} onClick={goToHome}>Back</button>
      <SlotsTiming />
      <div className={styles.slot}>

        <Calendar
          value={dateState}
          onChange={changeDate}
          onClickDay={checkAvailability}
        />
      </div>
      <div style={{margin: "1rem", color: "teal"}}>Dr. will be available on below dates-
        {
          availableDates?.map((dates) => {
            return (<div style={{margin: "0.4rem", color: "teal"}}>{dates}</div>)
          })
        }
      </div>

    </div>
  )
}