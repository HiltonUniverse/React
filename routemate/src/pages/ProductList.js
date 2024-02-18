// this is used when the user does a search in the URL like this:
// http://localhost:3000/products?keyword=react2&instock=true&rating=4
//to access keyword, instock and rating we must use useSearchParams. If this was related to a specific link in our
//Route, the appropairate component would have been launched.
// We use this like the useState
import { useSearchParams, useLocation } from "react-router-dom"

export const ProductList = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("keyword"),
        searchParams.get("instock"),
        searchParams.get("rating"))

    const location = useLocation();
    console.log(location)
    return (
        <main>
            <div className="component">ProductList</div>
        </main>
    )
}
