import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function App() {
  let [Data,setData]=useState([]);
  useEffect(()=>{
    console.log('Hello');

    async function FetchData(){
      let Res= await axios.get(`http://localhost:5400/api/data`);
      setData(Response.data)
      console.log(Response.data);

    }
    FetchData();

  },[])
  return (
    <div>
      <center>
        <h1>
          Hello
        </h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          let Name=e.target[0].value;
          let Age=e.target[1].value;
         
          async function sendData(){
            let Res= await axios.post(`http://localhost:5400/api/sendData`, {"Name":Name,"Age":Age});
            console.log(Res.data);

          }
          sendData();

          //send data to server here
        }}>
          <input type="text" name="Name" />
          <input type="number" age=" Age" />
          <button >Submit</button>
        </form>
      </center>
    </div>
  )
}
