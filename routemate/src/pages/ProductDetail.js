import { useParams } from "react-router-dom"

export const ProductDetail = () => {
    //this is the dynamic parameters passed to ProductDetails component from <Route>
    const params = useParams();
    return (
        <main>
            <div className="component"> ProductDetail - {params.id}</div>
        </main>
    )
}
