import { NextResponse } from "next/server";

export  function middleware(request){
 
  // if(request.nextUrl.pathname!="/login"){
    return NextResponse.redirect(new URL ("/login",request.url));
  // }
}
export const config={
    matcher:["/about/aboutcollege","/studentlist/:path*"]
}
//for 1  routing the only about/aboutcollege page   and /studentlist/:path for all path inside studentlist