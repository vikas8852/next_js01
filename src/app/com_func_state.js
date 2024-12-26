// 'use client'
// import { Nanum_Myeongjo } from "next/font/google";
// import styles from "./page.module.css";                      ALL THE SAME CODE OF PAGE.JS
// import {useState} from 'react'

// export default function Home() {
//   const[name,setName]=useState("Anil");
//   const apple=()=>{
//     setName("Sidhu")
//     //alert("Fruit");
//   }
//   const Hello=()=>{         //making component inside the component
//     return(
//       <h2>Heloo</h2>           //using state
//     )
//   }
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//       {/* <User  name="vikas"/> */}
       
//      <h1>Event function and state {name}</h1>
//    <button onClick={()=>alert("Hello next js")}>Click ME</button>
//    <button onClick={()=>apple()}>Click ME</button>

//     <Hello/>
//     {
//       Hello()
//     }
      
//       </main>
    
//     </div>
//   );
// }
// const User=(props)=>{
//   return(
//     <div>
//       <h2>User Name is {props.name}</h2>
//     </div>
  
//   );

// }