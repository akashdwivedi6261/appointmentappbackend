import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../Contexts/AuthContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SlotsTiming() {
const { handleOpen, handleClose, open, setOpen, firstSlot, setFirstSlot, secondSlot, setSecondSlot, history, setHistory } = React.useContext(AuthContext)
const {id} = useParams()
const bookSlot = async () => { 
    if(firstSlot > 20) {
       await axios.get(`https://nodejsappointment.herokuapp.com/doctors/${id}`).then((res) => {
           console.log(res.data[0])
           setHistory([...history, {name:res.data[0].name, time: "First"}])
       })
        setFirstSlot(firstSlot-20)
        alert("your slot has been booked for 20 minutes")
        handleClose()
    }
 }

 const bookSlot2 = async () => { 
    if(secondSlot > 20) {
        await axios.get(`https://nodejsappointment.herokuapp.com/doctors/${id}`).then((res) => setHistory([...history, {name:res.data[0].name, time:"second"}]))
        setSecondSlot(secondSlot-20)
        alert("your slot has been booked for 20 minutes")
        handleClose()

    }
 }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1>Select your slot</h1>
          <div>
          <Button style={{border: "1px solid grey", margin: "1rem"}} onClick={bookSlot}>9:30AM-12:30PM</Button>
          <div>Dr. will be available for-{(firstSlot/60).toFixed(2)}hr in first slot</div>
          </div>
          <div>
          <Button style={{border: "1px solid grey", margin: "1rem"}} onClick={bookSlot2}>4:30PM-8:30PM</Button>
          <div>Dr. will be available for-{(secondSlot/60).toFixed(2)}hr in second slot</div>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
