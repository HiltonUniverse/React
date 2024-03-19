import { Link } from "react-router-dom"

export const Footer = () => {
  return (

    <footer className="max-w-screen-2xl m-auto max-xl:mx-4 bg-white rounded shadow my-4 dark:bg-gray-800">
        <div className="mx-auto p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Hilton™</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:underline mr-4">Youtube</a>
              </li>
              <li>
                  <a href="https://www.google.com" target="_blank" rel="noreferrer" className="hover:underline">Google</a>
              </li>
          </ul>
        </div>
    </footer>

  )
}