import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todo =({todos}) => {
   return(
    
    <ListGroup>
         <ListGroupItem>
        {
           todos.map((todo) => {
            <div>
                    <h4 key={todo.id}>{todo.title}</h4>
                    <h6>{todo.body}</h6>
             </div>
           })
        }
         </ListGroupItem>
    </ListGroup>
   )
}

export default Todo
