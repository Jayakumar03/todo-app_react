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



// URL
const url = `https://jsonplaceholder.typicode.com/todos`;


  const Textbar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(todo);

        if(todos === ""){
            alert("Please enter a todo")
        }

        setTodos("");
        

    }


// FUNCTION FOR GETTODOS FROM API 
    const getTodos = async() => {

   const {data} = await Axios.get(`${url}`)
   setTodos(data)
 }


// STATE
    const [todos, setTodos] = useState("")

// FETCHING DATA FROM API 
    useEffect( () => {
        getTodos()
    },[])
    


    return(
        <div>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Your next Todo"
              value={todos}
              onChange={(e) => setTodos(e.target.value)}
            />
              <Button
                color="warning"
                onClick={ 
                    handleSubmit
                }
              >
                Add
              </Button>
          </InputGroup>
        </FormGroup>
      </Form>
      <Todocard todo={todos} />
      </div>
      
    )
  }


  export default Textbar;