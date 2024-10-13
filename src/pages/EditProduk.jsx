import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input} from "@nextui-org/react";

export default function EditProduk() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div>
    <Button variant= "solid" color="secondary" className="ml-3" onClick={onOpen}>Edit</Button>
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Transaction</ModalHeader>
              <ModalBody>
                 <div className="max-w-96 items-center">
                    <Input label = "Kode Produk" placeholder="Masukkan Kode Produk" className="my-3"/>
                    <Input label = "Nama Produk" placeholder="Masukkan Nama Produk" className="my-3"/>
                    <Input label = "Harga" placeholder="Masukkan Harga /kg" className="my-3"/>
                </div>
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