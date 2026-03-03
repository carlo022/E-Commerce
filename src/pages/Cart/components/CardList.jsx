import { useState } from "react"
import { CartCard } from "./CartCard"
import { Checkout } from "./Checkout"

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  
  const cartlist = [
    {
      "id": 16,
      "name": "Gaming Monitor",
      "price": 15999,
      "category": "Electronics",
      "stock": 7,
      "In_stock": true,
      "image": "https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=2400/34244460/files/best-display-monitors-for-3d-artists-asusrog.png",
      "new": true,
      "sale": false,
      "description": "27-inch gaming monitor with 144Hz refresh rate and 1ms response time.",
      "long_description": "Experience smooth and immersive gaming with this 27-inch gaming monitor. It features a 144Hz refresh rate and a 1ms response time, reducing motion blur and providing a competitive edge in fast-paced games. The monitor supports Full HD resolution for crisp visuals and vibrant colors. It also includes multiple connectivity options, including HDMI and DisplayPort, for easy setup with your gaming rig."
    },
    {
      "id": 7,
      "name": "LED Desk Lamp",
      "price": 1299,
      "category": "Home & Kitchen",
      "stock": 18,
      "In_stock": true,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidCdPSc4IthseD-BqybjAGv2YPC0HO8SvJA&s",
      "new": true,
      "sale": false,
      "description": "Adjustable LED desk lamp with touch controls and USB charging port.",
      "long_description": "Illuminate your workspace with this adjustable LED desk lamp. It features touch controls for easy brightness adjustment and color temperature settings. The lamp includes a built-in USB charging port, allowing you to charge your devices conveniently while working. Its sleek design and energy-efficient LED technology make it a stylish and practical addition to any desk."
    }
  ]

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartlist.length})
        </p>
      </section>
      
      <section>
       { cartlist.map((product) => (
        <CartCard key={product.id} product={product} />
       )) }
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>$99</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button onClick={() => setCheckout(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      { checkout && <Checkout setCheckout={setCheckout} />}
    </>
  )
}