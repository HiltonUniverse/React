import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto p-4 md:flex md:justify-between border-b-2">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2024 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved. </span>
        <ul className="flex text-gray-500 text-sm item-center">
          <li>
              <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
              <a href="#" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
              <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Youtube</a>
          </li>
          <li>
              <a href="#" target="_blank" className="hover:underline">Github</a>
          </li>
        </ul>
    </div>
    </footer>
  )
}
