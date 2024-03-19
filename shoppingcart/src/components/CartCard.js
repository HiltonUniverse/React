export const CartCard = ({ product }) => {
  const { imageSource, name, price } = product
  return (
    <div>
      <div className="flex justify-between shadow-md rounded border-1 m-4 items-center pr-4">
        <img className="h-40 p-4 rounded-lg" src={imageSource} alt="First itesm in cart" />
        <span>{name}</span>
        <span>${price}</span>
        <button className="bg-red-700 hover:bg-red-900 rounded px-4 h-8 text-white">Remove</button>
      </div>
    </div>
  )
}
