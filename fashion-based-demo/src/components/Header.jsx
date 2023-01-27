import { useContext } from "react"
import { SidebarContext } from "./SidebarContext"

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext)

    return (
        <div className='bg-pink-200'>
            <div>Header</div>
            <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-2xl">
                    🛍️
                </span>
                </div>
        </div>
    )
}
export default Header