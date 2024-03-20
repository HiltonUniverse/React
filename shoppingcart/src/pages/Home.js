import { HomeCard } from "../components/HomeCard"

import { useDocumentTitle } from "../hooks/useDocumentTitle"

export const Home = () => {

  useDocumentTitle("Home")

  const products = [
    { id: 1, title: "Sony Wh-Ch510 Bluetooth Wireless", price: 149, imageSource: "../assets/1001.jpeg" },
    { id: 2, title: "boAt Rockerz 450", price: 49, imageSource: "../assets/1002.jpeg" },
    { id: 3, title: "JBL Tune 760NC", price: 179, imageSource: "../assets/1003.jpeg" },
    { id: 4, title: "Logitech H111 Wired", price: 39, imageSource: "../assets/1004.jpeg" },
    { id: 5, title: "APPLE Airpods Max Bluetooth Headset", price: 199, imageSource: "../assets/1005.jpeg" },
    { id: 6, title: "ZEBRONICS Zeb-Thunder Wired", price: 29, imageSource: "../assets/1006.jpeg" }
  ]

  return (
    <main>
      <section className="max-w-8xl">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {products.map((product) =>
            <HomeCard key={product.id} item={product} />
          )}
        </div>
      </section>
    </main>
  )
}