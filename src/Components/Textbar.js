import React, { useEffect, useState } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup
  } from "reactstrap";
  

import { ToastContainer, toast } from 'react-toastify';
import Axios from "axios";
import Todocard from "./Todocard";
import { get } from "lodash";


  const Textbar = () => {
// STATE
    const [apiTodos, setApiTodos] = useState([])
    const [todo, setTodo] = useState([])
  

// URLS
   const url = `https://jsonplaceholder.typicode.com/todos`;
   const postUrl = `https://jsonplaceholder.typicode.com/posts`;


  //  ///////// Post Call Function ////////// //
// this function will post the todo in the api and console the responsce
    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo === ""){
          return ( alert("Please enter a todo"))
        }
  
        getTodos()

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
            body: JSON.stringify({
             title: {todo},
             userId: 1,
     }),
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

        setTodo("");

        toast.success("Success!", {
          icon: "🚀",
          theme: "dark"
        });
    }


// FUNCTION FOR GET TODOS FROM API 
  const getTodos = async() => {
   const {data} = await Axios.get(`${url}`)
   setApiTodos(data)
    console.log(data);
 }

    return(
        <Form >
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              value={todo}
              placeholder="Your next Todo"
              onChange={(e) => setTodo(e.target.value)}
            />
              <Button
                color="warning"
                onClick={ 
                   (e)=>handleSubmit(e)
                  
                }
              >
                Add
              </Button>
          </InputGroup>
        </FormGroup>
       
        <Todocard todos={apiTodos} />

        
        
      </Form>
    )
  }


  export default Textbar;