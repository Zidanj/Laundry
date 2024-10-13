import {Input, Select, SelectItem } from "@nextui-org/react"


function Transaction(){

    return (
        <div className="max-w-96 items-center">
            <Input label = "Nama Pelanggan" placeholder="Masukkan Nama Pelanggan" className="my-3"/>
            <Input label = "Jenis Pakaian" placeholder="Masukkan Jenis Pakaian"/>
            <Select label="Jenis Layanan"  className="my-3">
                <SelectItem>Express</SelectItem>
            </Select>
            <Input label = "Masukkan Jumlah Item" placeholder="Jumlah" type = "number" className="my-3"/>
            <Input label = "Berat Item" placeholder="Berat Item (kg)" type = "number"/>
            <Input isDisabled label = "Total Harga" placeholder=" " className="my-3"/>
        </div>

    )
}

export default Transaction