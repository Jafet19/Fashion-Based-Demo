import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext)

    const { cart, clearCart } = useContext(CartContext)

    return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className="flex items-cneter justify-between py-6 border-b">
            <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
            <div onClick={handleClose} className="cursor pointer w-8 h-8 flex justify-center items-center">
                <span className="cursor pointer text-2xl"> ⃯</span>
            </div>
        </div>
        <div>
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} />
            })}
        </div>
        {/* total price */}
        <div>
            <div className="bg-pink-200 flex w-full justify-between items-center">
                <div>
                    <span>Total:</span>$ 1000
                </div>
                <div onClick={clearCart} className="cursor-pointe py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                    <span>🗑️</span>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar