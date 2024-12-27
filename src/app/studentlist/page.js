import Link from "next/link";
export default function StudentList(){
    return(
        <div>
            <h1> Student List</h1>
            <ul>
                <li>
                   <Link href="/studentlist/anil">Anil   </Link> 
                 </li>
                <li>
                <Link href="/studentlist/ravi">Ravi  </Link> 
                </li>
                <li>
                <Link href="/studentlist/shyam">Shyam   </Link> 
                </li>
                <li>
                <Link href="/studentlist/ayush">Ayush  </Link> 
                </li>
            </ul>
        </div>
    )
}