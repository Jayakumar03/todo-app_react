import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todo =({todos}) => {
   return(
    <ListGroup className="mt-5 mb-2 items">
         {
            todos.map((todo) => (
               <ListGroupItem key={todo.id}>
                  <h3>{todo.title}</h3>
                  <h6>{todo.body}</h6>
                  <span
                  className="float-right"><FaCheckDouble /></span>
               </ListGroupItem>
              ))
         }
    </ListGroup>
   )
}

export default Todo
