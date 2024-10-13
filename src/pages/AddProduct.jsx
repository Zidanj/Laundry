import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import ProductForm from "./ProductForm";

export default function AddProduct() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className="flex justify-between items-center my-4">
    <header className="text-3xl"><h1>Daftar Produk</h1></header>
    <Button variant= "bordered" color="primary" onClick={onOpen}>Tambah Produk</Button>
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Tambah Produk</ModalHeader>
              <ModalBody>
                <ProductForm/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}