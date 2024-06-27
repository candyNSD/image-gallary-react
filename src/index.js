import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

const gallarys = [
  {
    img:'/assest/img/dog1.jpg',
    petname:"Rocky"
  },
  {
    img:'/assest/img/dog2.webp',
    petname:"Buddy"
  },
  {
    img:'/assest/img/dog10.jpg',
    petname:"Cooper"
  },
  {
    img:'/assest/img/dog4.png',
    petname:"Max"
  },
  {
    img:'/assest/img/dog5.jpeg',
    petname:"Milo"
  },
  {
    img:'/assest/img/dog6.webp',
    petname:"Charlie"
  },
  {
    img:'/assest/img/dog7.jpg',
    petname:"Dobber"
  },
  {
    img:'/assest/img/dog8.webp',
    petname:"Oliver"
  }
]
const Gallary = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Image Gallary</h1>
      <div  style={{display:"flex", gap:"10px",flexWrap:"wrap",backgroundColor:"#e2e0e0",margin:"10px",padding:"10px",justifyContent:"center"}}>
      {
        gallarys.map((item) => {
          return (
            <App gallaryImg={item.img} petnames={item.petname}></App>
          )        
        })
      }
      </div>
      
      
    </div>
  )}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Gallary></Gallary>
);

