import { Card, CardBody, CardHeader, Divider, Table, TableHeader, TableBody,TableColumn, TableCell, TableRow, Button, CardFooter } from "@nextui-org/react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Detailed (){
    return(
        <div>
            <Header2/>
            <Card>
             <CardHeader>
                <h1>Riwayat transaksi : Lena</h1>
             </CardHeader>
             <Divider/>
             <CardBody>
                    <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Kode Transaksi</TableColumn>
                    <TableColumn>Paket Laundry</TableColumn>
                    <TableColumn>Total Biaya</TableColumn>
                    <TableColumn>Tanggal Transaksi</TableColumn>
                    <TableColumn>Status</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>020104</TableCell>
                        <TableCell>Express</TableCell>
                        <TableCell>100.000</TableCell>
                        <TableCell>10 September 2024</TableCell>
                        <TableCell>Selesai</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </CardBody>
            <CardFooter className="flex items-center justify-end">
            <Link to = "/home"><Button variant="bordered" color="primary">Kembali</Button></Link>
            </CardFooter>
        </Card>

        <Footer/>
        </div>
        
    )
}

export default Detailed