import { Route, Routes } from "react-router-dom";
import {Cart, Home} from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            
            <Route path="/" element={<Home/>} title="Home"/>
            <Route path="/Cart" element={<Cart/>} titlel="Cart"/>
            
        </Routes>
    </>
  )
}