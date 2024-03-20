import { Link } from "react-router-dom"
import { useCart } from "../context/CardContext";
import { useEffect, useState } from "react";


export const HomeCard = ({ item }) => {
    const { title, price, imageSource } = item;

    const { addToCart, removeFromCart, cartList } = useCart();

    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const productIsInCart = cartList.find(current => current.id === item.id);
        setIsInCart(productIsInCart);
    }, [cartList, item.id])

    return (

        <div className="w-96 bg-white mx-4 m-4 p-4 shadow-lg rounded flex flex-col justify-between">
            <Link to="#">
                <img className="h-64 w-full rounded" src={imageSource} alt="" />
            </Link>
            <div className="py-4 flex flex-col gap-8">
                <Link href="#">
                    <h5 className="text-lg font-md text-gray-900">{title}</h5>
                </Link>
                <div className="flex justify-between">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
                    {isInCart ? <span className="text-white bg-rose-600 rounded p-2 cursor-pointer hover:bg-rose-700" onClick={() => removeFromCart(item)}>Remove</span>
                        : <span className="text-white bg-sky-600 rounded p-2 cursor-pointer hover:bg-sky-700" onClick={() => addToCart(item)}>Add To Cart</span>}

                </div>
            </div>
        </div>

    )
}