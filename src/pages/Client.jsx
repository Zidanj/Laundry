import {Divider, Input, Select, SelectItem } from "@nextui-org/react"
import { Table, TableBody, TableColumn, TableRow,TableCell, TableHeader, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import AddClient from "./AddClient";
import EditClient from "./EditClient";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function ClientList (){
    return(
        <div>
            <Header2/>
        <AddClient/>
        <Divider className="my-4"/>
        <Table aria-label="Example static collection table" align="center">
        <TableHeader>
            <TableColumn>Kode Client</TableColumn>
            <TableColumn>Nama Client</TableColumn>
            <TableColumn>Total Transaksi</TableColumn>  
            <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>P0001</TableCell>
                <TableCell>Express</TableCell>
                <TableCell>10.000</TableCell>
                <TableCell className="flex justify-center" align="center">
                    <Button variant= "solid" color="primary">Remove</Button>
                    <EditClient/>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <Link to = "/home" className="flex items-center justify-end my-3"><Button variant="bordered" color="primary">Kembali</Button></Link>
    <Footer/>
        </div>
        
    )
}

export default ClientList