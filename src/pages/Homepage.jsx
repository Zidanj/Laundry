import Sidebar from "../components/sidebar"
import { Table, TableColumn, TableHeader } from "@nextui-org/react"
import Test from "./AddTrans"
import SidebarPage from "../components/sidebar"
import Header2 from "../components/Header2"
import TableTab from "../components/Table"
import Footer from "../components/Footer"



function Homepage (){
    return(
        <>
        <Header2/>
        <div className="flex justify-between items-center">
            <header className="text-3xl flex my-3">Daftar Transaksi</header>
            <SidebarPage/>
        </div>
        <TableTab/>
        <Footer/>

        </>
    )
}

export default Homepage