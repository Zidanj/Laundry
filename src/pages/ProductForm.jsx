import {Input, Select, SelectItem } from "@nextui-org/react"


function ProductForm(){

    return (
        <div className="max-w-96 items-center">
            <Input label = "Kode Produk" placeholder="Masukkan Kode Produk" className="my-3"/>
            <Input label = "Nama Produk" placeholder="Masukkan Nama Produk" className="my-3"/>
            <Input label = "Harga" placeholder="Masukkan Harga /kg" className="my-3"/>
        </div>

    )
}

export default ProductForm