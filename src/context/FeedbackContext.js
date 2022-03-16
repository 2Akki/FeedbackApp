import { createContext,useState } from "react";
import {v4 as uuidv4} from "uuid"
import FeedbackData from "../data/feedbackData";



const FeedbackContext = createContext()



export function FeedbackProvider({children}) {
    const [feedback,setFeedback] =useState([
        {
            id:1,
            text: 'this is feedBack Item 2',
            rating:6,
        },
        {
            id:2,
            text: 'this is feedBack Item 3',
            rating:9,
        },
        {
            id:3,
            text: 'this is feedBack Item 4',
            rating:4,
        }
    ])
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    const addFeedback =(newFeedback) =>{
        newFeedback.id =uuidv4()
          setFeedback([newFeedback,...feedback,])
      }
      const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
          setFeedback(feedback.filter((item)=>item.id!==id)) 
        }
       
      }
      const updateFeedback = (id,updItem)=>{
       setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}: item))
      }

     
      
      const editFeedback = (item) => {
          setFeedbackEdit({
              item,
              edit:true,
          })
      }
      



     
    
  return (
    <FeedbackContext.Provider value={{
        feedback:feedback,
        addFeedback:addFeedback,
        deleteFeedback:deleteFeedback,
        editFeedback:editFeedback,
        feedbackEdit:feedbackEdit,
        updateFeedback:updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
  )
}




export default  FeedbackContext