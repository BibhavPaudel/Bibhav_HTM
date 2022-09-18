import styles from "../styles/nav.module.css"
import Link from "next/link"
import Wallet from "./wallet"
// import { LogOutBtn } from "../pages/authIndex"
export default function   NavR() {
  return (
    <>
    {/* <LogOutBtn /> */}
    <wrapperR>
      <Wallet />
    </wrapperR>
    </>
  )
}
