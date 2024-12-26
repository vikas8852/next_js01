import Link from 'next/link';
const About=()=>{
    return(
        <div>
            <h1> About page</h1> 
            <br />
            <br />
            <Link href="/"> Go to Home page</Link>
         <br />
         <br />
            <Link href="about/aboutcollege"> Go to  about college page</Link>
            <br />
            <br />
            <Link href="about/aboutstudent"> Go to  about college page</Link>
        </div>
    )
}
export default About;