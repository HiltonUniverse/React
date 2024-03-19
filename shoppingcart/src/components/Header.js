import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/logo/logo.png"

export const Header = () => {
  const activeLink = "text-lg font-medium rounded sm:m-2 px-4 py-2 bg-slate-200 hover:bg-slate-200"
  const inactiveLink = "text-lg font-medium rounded sm:m-2 px-4 py-2 hover:bg-slate-200"

  return (
    <div className="max-w-7xl flex justify-between mx-auto my-4 px-2 border-b-2 pb-4">
      
      <div>
        <Link to="/" className="flex items-center">
          <img className="size-12" src={Logo} alt="logo" />
          <span className="text-xl pl-2 font-medium">Shopping Cart</span>
        </Link>
      </div>

      <div>
        <ul className="flex max-sm:invisible">
          <li>
            <NavLink to="/" className={({isActive}) => {return isActive ? activeLink : inactiveLink}}> Home </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({isActive}) => {return isActive ? activeLink : inactiveLink}}> Cart </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-row items-center text-xl font-medium">
        <span className="select-none">Cart: 2</span>
      </div>

    </div>
  )
}
