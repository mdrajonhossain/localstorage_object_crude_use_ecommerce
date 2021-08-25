import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const data = [
  {Product_name:"Mobile", qnt: 1},
  {Product_name:"Laptop", qnt: 1},
  {Product_name:"Headphone", qnt:1},
  {Product_name:"mouse", qnt:1},
  {Product_name:"Keyboard", qnt:1},
  {Product_name:"Modem", qnt:1},
  {Product_name:"Pendrive", qnt:1}
]


function App() {
  const [showdata, setShowdata] = useState([]);


useEffect(()=>{

  setInterval(function(){
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    setShowdata(users);
  },100);
})


var a = 1;
 const cress = (e)=> {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
   
  if(users.length === 0){
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({Product_name: e.Product_name, qnt: e.qnt});
    localStorage.setItem("users", JSON.stringify(users));
  }else{
    var mach = users.filter((dt)=> {
      return dt.Product_name.match(e.Product_name)
    })
    if(mach.length === 0){
      var users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push({Product_name: e.Product_name, qnt:e.qnt});
      localStorage.setItem("users", JSON.stringify(users));
    }else{ 
      var users = JSON.parse(localStorage.getItem("users") || "[]");  
      var index = users.findIndex(x => x.Product_name === e.Product_name);
      users[index].qnt = users[index].qnt + 1 ;
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}


const delet = (e) =>{
  const users = JSON.parse(localStorage.getItem("users"));
  users.splice(e, 1);
  localStorage.setItem('users',JSON.stringify(users));

}
 
  return (
    <div className="head_grid">
      
      <div className="div_left">
        {data.map((dad)=> {
          return <div className="inline_div" onClick={()=>cress(dad)}>{dad.Product_name} <span>{dad.qnt} </span></div>
    
        })}
      </div>

      <div className="div_right">
        {showdata.map((dad, index)=> {
          return <div className="inline_div">{dad.Product_name} <span>{dad.qnt} </span> <span className="dlt" onClick={()=>delet(index)}> Delete </span></div>    
        })}
      </div>

    </div>
  );
}

export default App;
