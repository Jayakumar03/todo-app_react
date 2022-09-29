import React, { useState } from "react";
import { ListGroup, ListGroupItem, ButtonDropdown, Button } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Axios } from "axios";




const Todo =({todos}) => {
   // STATE FOR MANAGING BACKGROUND COLOUR OF TASK
   const [isActive, setIsActive] = useState(false)
   const [isUpdated, setIsUpdated] = useState(false)
   const [edit, setEdit] = useState(false)


     //  ///////// updateTodo Function ////////// //
// update todo will make dummy call to the api for put, using console in browser we can see which todo is beind updated
const  updateTodo = (e,id, todo) => {
     
      e.preventDefault();
      toast(" Todo Updated!", {
         position: toast.POSITION.TOP_RIGHT
       });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
      {
         method: 'PUT'
      })
     .catch(err => console.error(err))
     console.log(`Updated todo ↓`)
     console.table(todo);
     setIsUpdated(true)
      
   }
      //  ///////// Delete todo Function ////////// //
   // Delete todo will make dummy call to the api for delete, using console in browser we can see which todo is beind deleted
const  deleteTodo = (e,id,todo) => {
     
      e.preventDefault();
      toast.warn(" Todo deleted!", {
         theme: "dark",
         position: toast.POSITION.TOP_RIGHT
       });

     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
      {
         method: 'DELETE'
      })
     .catch(err => console.error(err))
     console.log( `Deleted todo ↓`)
     console.table(todo);     
   }
        

   
   return(
      <div>
    <ListGroup className="mt-3 mb-2 items  ">
            {
               // .mop is used for itterating through the array and create us  single todos
               // since api provided todo is 200 in length to reduce it i have used .slice to just four
            todos.slice(0,4).map((todo) =>{
               const {id, title} = todo
               return(
                  <ListGroupItem key={id} className="mt-2 singleform"  >
                  <h3 className= {(isActive) ?"completedTodo": ""  } >{title}</h3>
                       <button 
                        onClick={(e) => updateTodo(e,id,todo)}
                        className= "btn btn-primary mx-2"
                        >Update</button>
                       <button className='btn btn-danger mx-2' onClick={(e) => deleteTodo(e,id,todo) } >Delete</button>
               </ListGroupItem>
               )
              })
         }
    </ListGroup>
    </div>
   )
}

export default Todo
