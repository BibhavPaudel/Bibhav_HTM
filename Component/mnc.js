
import Link from "next/link"
import Router, { useRouter } from "next/router"
import AddEmp from "../pages/addemp"
export default function  Mainc({children}) {
  return (
    <>
    <div className="main-content"> 
    {children}
    </div>
    </>
  )
}
