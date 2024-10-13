import { Table, TableBody, TableColumn, TableRow,TableCell, TableHeader, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function TableTab (){
    return(
        <Table aria-label="Example static collection table" align="center">
            <TableHeader>
                <TableColumn>Kode Transaksi</TableColumn>
                <TableColumn>Nama Pelanggan</TableColumn>
                <TableColumn>Total Biaya</TableColumn>
                <TableColumn>Tabel Transaksi</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>020104</TableCell>
                    <TableCell>Lena Anjana</TableCell>
                    <TableCell>100.000</TableCell>
                    <TableCell><Link to = "/detail-trans"><Button variant="bordered" color="primary">Detail Transaksi</Button></Link></TableCell>
                </TableRow>
            </TableBody>
        </Table>
  );
}

export default TableTab