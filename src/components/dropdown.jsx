import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch } from "@nextui-org/react"
import Transaction from "../pages/TransactionForm"
import Test from "../pages/AddTrans"

function DropdownButton (){
    return(
        <Dropdown className="flex flex-row max-w-32">
        <DropdownTrigger className="text-medium font-sans">
            <Button
            variant="bordered"
            color="primary"
            >
                Menu
            </Button>
        </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem>Add Transaction</DropdownItem>
                <DropdownItem>Edit Customer</DropdownItem>
                <DropdownItem>Add Product</DropdownItem>
            </DropdownMenu>
    </Dropdown>
    )
}

export default DropdownButton