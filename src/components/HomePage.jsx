import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import ShowDoctors from './ShowDoctors'
import styles from "./style.module.css";

const HomePage = () => {
    const {setData, data, history, show} =  useContext(AuthContext)
    React.useEffect(async () => {
       await axios.get("https://nodejsappointment.herokuapp.com/doctors").then((res) => {
            setData(res.data)
            console.log(data);
        })
    }, [])
  return (
   <div>
    <div className={styles.home}>
        {
            data.map((card) => <ShowDoctors card={card} />)
        }
       
    </div>
    <h1>History is available here</h1>
    {
          (history.length > 0 &&show) ? (history.map((ele) => {
            return (<div style={{margin: "1rem"}}>Appointment is for {ele.name} in {ele.time} slot</div>)
          })):null
        }
    </div>
  )
}

export default HomePage