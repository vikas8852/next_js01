"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Login=()=>{
    const router =useRouter();
    const navigate=(page)=>{
        router.push("/login/"+page);
    }
    return(
        <div>
            <h1>
                hello login page
            </h1>   
            <br />
            <br />
            <Link href="/"> Go to Home page</Link>  <br />
            <br />
            <button onClick={()=>navigate("loginstudent")}> Go to Student Login Page</button>  <br /> <br />
            <button onClick={()=>navigate("loginteacher")}> Go to Teacher Login Page</button>
        </div>
    )
}
export default Login;