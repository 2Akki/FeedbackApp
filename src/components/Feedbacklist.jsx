import { motion,AnimatePresence } from 'framer-motion'

import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import FeedbackContext from '../context/FeedbackContext'
export default function Feedbacklist() {
const {feedback} = useContext(FeedbackContext)

  if(!feedback||feedback.length === 0){
        return <p>No feedback Yet</p>
    }



    return(
      <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (

          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}  exit={{ opacity: 0 }}>

           
              
              <FeedBackItem item={item} key={item.id} />
           
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    )
  // return (
  //     <>
  //       <div className="feedback-list">
  //           {feedback.map((item)=>
              
  //             <FeedBackItem item={item} key={item.id} handleDlete={handleDlete}/>
  //             )}
  //       </div>
  //   </>
  
  // )
}
