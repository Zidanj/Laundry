import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar"
import { Button } from "@nextui-org/react"
import AddTrans from "../pages/AddTrans"
import { Link } from "react-router-dom"

function SidebarPage (){
   return(
   <Sidebar className="bg-blue-700 rounded-lg">
      <Menu>
         <SubMenu label = "Menu">
            <MenuItem><AddTrans/></MenuItem>
            <MenuItem><Link to="/product-list" className="hover:underline hover:text-blue-600">Product</Link></MenuItem>
            <MenuItem><Link to = "/client-list" className="hover:underline hover:text-blue-600">Client</Link></MenuItem>
         </SubMenu>
      </Menu>
   </Sidebar>
   )
}

export default SidebarPage