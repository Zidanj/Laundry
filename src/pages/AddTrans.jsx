import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Transaction from "./TransactionForm";

export default function AddTrans() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div>
    <Button variant= "bordered" color="primary" onClick={onOpen}>New Transaction</Button>
    </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Transaction</ModalHeader>
              <ModalBody>
                <Transaction/>
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