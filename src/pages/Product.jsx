import {Divider, Input, Select, SelectItem } from "@nextui-org/react"
import { Table, TableBody, TableColumn, TableRow,TableCell, TableHeader, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduk from "./EditProduk";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

function ProductList (){
    return(
        <div>
            <Header2/>
        <AddProduct/>
        <Divider className="my-4"/>
        <Table aria-label="Example static collection table" align="center">
        <TableHeader>
            <TableColumn>Kode Produk</TableColumn>
            <TableColumn>Nama Produk</TableColumn>
            <TableColumn>Harga /item</TableColumn>
            <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>P0001</TableCell>
                <TableCell>Express</TableCell>
                <TableCell>10.000</TableCell>
                <TableCell className="flex justify-center">
                    <Button variant= "solid" color="primary">Remove</Button>
                    <EditProduk/>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <Link to = "/home" className="flex items-center justify-end my-3"><Button variant="bordered" color="primary">Kembali</Button></Link>
    <Footer/>
        </div>

    )
}

export default ProductList