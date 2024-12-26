'use client'

import Link from 'next/link'
import { Nanum_Myeongjo } from "next/font/google";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

export default function Home() {
 const router =useRouter();
 const navigate=(name)=>{     // to navigate
  router.push(name);
 }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     <h1>  Basic | Routing </h1>
     <Link href="/login"> Go to Login page</Link>
     <Link href="/about"> Go to About page</Link>


     {/* <button onClick={()=>router.push("/login")}>Go to Login Page</button>
     <button onClick={()=>router.push("/about")}>Go to About Page</button> */}
      <button onClick={()=>navigate("/login")}>Go to Login Page</button>
      <button onClick={()=>navigate("/about")}>Go to About Page</button>
      </main>
    
    </div>
  );
}
