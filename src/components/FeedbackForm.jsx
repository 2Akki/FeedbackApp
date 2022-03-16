import React, { useState ,useContext,useEffect} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'
import {FaTimes,FaEdit} from "react-icons/fa" 

import RatingSelect from "./RatingSelect.jsx"
function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
      
      if(feedbackEdit.edit===true){
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false)
    }
    },[feedbackEdit])
   


    const handleTextChange =({ target: { value } })=>{
      
      if (value === '') {
        setBtnDisabled(true)
        setMessage(null)
        
   
      } else if (value.trim().length <= 10) { 
        setMessage('Text Must Be At Least 10 Characters')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }
        setText(value)


    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if (text.trim().length > 10) {
        const newFeedback = {
          text,
          rating,
        }
        
        if (feedbackEdit.edit === true) {
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }
  
      //
        setBtnDisabled(true) 
        setRating(10) 
        setText('')
        feedbackEdit.edit = false
        feedbackEdit.item = {}
        // removeFeedbackData()
      }
    }
  return (
    <Card>
      <form onSubmit = { handleSubmit}>
        <h2>How Would You Rate Your Service With Us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write A Review'
            value={text}
          />
       <Button type="submit" isDisabled={btnDisabled}  >Send</Button>
       <button className="edit" style={{fontSize: '23px'}} onClick={()=>{ 
         setBtnDisabled(true) 
        setRating(10) 
        setText('')
        feedbackEdit.edit = false
        feedbackEdit.item = {}}} ><FaEdit color="black" /></button>

        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm