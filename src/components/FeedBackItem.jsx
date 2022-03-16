import Card from "./shared/Card"
import React, { useContext } from 'react'
import {FaTimes,FaEdit} from "react-icons/fa" 
import FeedbackContext from '../context/FeedbackContext'
export default function FeedBackItem({item}) {
  const {deleteFeedback,editFeedback,feedbackEdit} = useContext(FeedbackContext)


 
  return (
   
    <Card >
        <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
      <FaTimes color="purple"/>
      </button>
      <button onClick={()=>editFeedback(item)} className="edit" ><FaEdit color="purple"  /></button>  
        <div className="text-display">{item.text}</div>
     
    </Card>
  )
}

