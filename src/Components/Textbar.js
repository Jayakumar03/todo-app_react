import React, { useEffect, useState } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup
  } from "reactstrap";
  
  import { v4 } from "uuid";
  import Axios from "axios";
  import Todocard from "./Todocard";
import { get } from "lodash";


  const Textbar = () => {
// STATE
    const [apiTodos, setApiTodos] = useState([])
// new state for own todo
   const [todo, setTodo] = useState([])
  

// URLS
   const url = `https://jsonplaceholder.typicode.com/todos`;
   const postUrl = `https://jsonplaceholder.typicode.com/posts`;



    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo === ""){
          return ( alert("Please enter a todo"))
          // error getting data from api first time even if its undefined
        }

        // console.log(todos)
        getTodos()

        // posting data to api
        Axios.post(`${postUrl}`,{
            title:{todo}
        }).then(response => response.json)
        .then((json, setTodo) =>{setTodo={json}; console.log(todo)})
        .catch(err => console.error(err))

        setTodo("");

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