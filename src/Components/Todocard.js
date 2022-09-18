import React, { useState } from "react";
import { ListGroup, ListGroupItem, ButtonDropdown, Button } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todo =({todos}, {todo}) => {
   // STATE FOR MANAGING BACKGROUND COLOUR OF TASK

   const [active, setActive] = useState(false)


   const changeClassName = () => {
      // need to get parent bg color to change

   }

   
   return(
      <div>
    <ListGroup className="mt-5 mb-2 items">
         {
            todos.slice(0,1).map((todo) =>{
               const {id, title} = todo
               return(
                  <ListGroupItem key={id}>
                  <h3>{title}</h3>
                  <div  className="float-right">
                  < Button color="success"  onClick={changeClassName}>
                     <FaCheckDouble/>
                       </ Button>
                   <Button color="info">add</Button>
                   <Button color="danger">del</Button>
                  </div>
                  
               </ListGroupItem>
               
               )
              })
         }
    </ListGroup>

{/* <ListGroup className="mt-5 mb-2 items">
{
   todo.map((todo) =>{
      const {id, title} = todo
      return(
         <ListGroupItem key={id}>
         <h3>{title}</h3>
         <div  className="float-right">
         < Button color="success"  onClick={changeClassName}>
            <FaCheckDouble/>
              </ Button>
          <Button color="info">add</Button>
          <Button color="danger">del</Button>
         </div>
         
      </ListGroupItem>
      
      )
     })
}
</ListGroup> */}
</div>
   )
}

export default Todo
