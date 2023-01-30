import { useContext, useState, useEffect } from "react"
import { SidebarContext } from "./SidebarContext"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import Logo from '../img/Logo.jpeg'

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { itemAmount } = useContext(CartContext)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className="container mx-auto flex items-center justify-between h-full">
            <Link to={'/'}>
                <div>
                    <img className='w-[40px]' src={Logo} />
                </div>
            </Link>
            <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-2xl">
                    🛍️
                </span>
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
                </div>
                </div>
        </header>
    )
}
export default Header