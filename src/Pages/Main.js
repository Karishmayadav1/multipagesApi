import React,{ useState} from 'react';
import { useEffect } from 'react';
import Card from './Card';





function Main() {

   /* const[allData,setAllData] = useState("");
  
    const loadData =()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then(
        (data)=>{
          setAllData(data);
        }, (error) =>{
          console.log("Error:"+error);
        }
      )*/

      
  const[allData,setAllData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=> res.json())
    .then(
      (data)=>{
        setAllData(data);
      }, (error) =>{
        console.log("Error:"+error);
      }
    )
  });



  return (

    <div>
    {allData.map((item)=> <Card data ={item}/>)} 
  </div>
  )

  }
export default Main;

