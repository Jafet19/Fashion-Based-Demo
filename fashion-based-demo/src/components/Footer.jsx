import { Link } from "react-router-dom"
const Footer = () => {
    return (
    <footer className="bg-black text-white py-12">
        <div className="container mx-auto">
            <p className="text-white text-center">
                Copyright &copy; Eccomerce Shop 2023. All rights reserved.
                </p>
                <p className="text-center">
                Example and step guide by:
                <a href="https://www.youtube.com/watch?v=lGnuiAZCjuM&list=LL&index=6" target="_blank"> Christian Mihai</a>
            </p>
        </div>
    </footer>)
}
export default Footer