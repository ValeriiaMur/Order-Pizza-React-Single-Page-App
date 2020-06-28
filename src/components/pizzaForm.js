import React, {useState, useEffect} from "react";
import { Button, setRef } from '@material-ui/core';
import yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PizzaForm = () => {

    const history = useHistory();

    // function orderConfirmed() {
    //   history.push("/success");
    // }

    let yup = require('yup');

    let [newOrder, setOrder] = useState({
        name: "",
        size:"",
        olives: "",
        tom: "",
        corn: "",
        pep:"",
        onions:"",
        pine: "",
        note:""
    })
    const [result, setRes] = useState("");

    //validation
    const formSchema = yup.object().shape({
        name: yup.string()
            .required("Name is required")
            .min(2)
    })

    //submit
    const handleSubmit = (e) => {
      e.preventDefault();
      formSchema.isValid(newOrder).then(isFormValid => {
        if(isFormValid === true) {
          axios.post("https://reqres.in/api/users", newOrder)
          .then(res => {
              if (res.status == "201"){
                history.push("/success");
              }
            })
            .catch(err =>{
                console.log(err)
          })
        }
      })
    }

    const changeValue = (e) =>{
        newOrder = {
            ...newOrder,
            [e.target.name] : e.target.name === "olives" 
                || e.target.name === "tom" 
                || e.target.name === "corn"
                || e.target.name === "pep"
                || e.target.name === "onions"
                || e.target.name === "pine"
                ? e.target.checked : e.target.value
        }
        setOrder(newOrder);
        console.log(newOrder)
    }


  return (
    <div>
      <h2>Order Now</h2>
      <form onSubmit = {handleSubmit}>
          <label className = "inp">
              Name:
              <input 
                type = "text"
                id = "name"
                value = {newOrder.name}
                name="name"
                onChange={changeValue}>
              </input>
          </label>
          <label className = "inp">
              Pizza size:
              <select 
                value={newOrder.size}
                name="size"
                onChange={changeValue}>
                  <option></option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
              </select>
          </label>
          <label className = "check">
              Add Toppings:
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="olives"></input>
                Olives
              </label>
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="tom"></input>
                Tomatoes
              </label>
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="corn"></input>
                Corn
              </label>
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="pep"></input>
                Peppers
              </label>
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="onions"></input>
                Onions
              </label>
              <label>
                <input type = "checkbox"
                onChange={changeValue}
                name="pine"></input>
                Pineapples
              </label>
          </label>
          <br></br>
          <label className = "inp">
              Special Instructions:
              <textarea 
                value = {newOrder.note}
                name="note"
                onChange={changeValue}
                placeholder = "Anything else you'd like to add?">
              </textarea>
          </label>
          <br></br>
          <Button type = "submit"
          variant="contained" color="primary">Order</Button>
      </form>
      
    </div>
  );
};

export default PizzaForm;