import {Input } from "@nextui-org/react"


function CLientForm(){

    return (
        <div className="max-w-96 items-center">
            <Input label = "Nama Pelanggan" placeholder="Masukkan Nama Pelanggan" className="my-3"/>
            <Input label = "Nama Produk" placeholder="Masukkan Nama Produk" className="my-3"/>
            <Input label = "Harga" placeholder="Masukkan Harga /kg" className="my-3"/>
        </div>

    )
}

export default CLientForm