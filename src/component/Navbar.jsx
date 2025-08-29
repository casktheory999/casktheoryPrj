import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../scss/_reset.scss'
import '../scss/Navbar.scss'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (e, id) => {
        e.preventDefault()
        const target = document.querySelector(id)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <div id='topbar'>
            <div className="logo"><Link to='/'>酒桶理論</Link></div>
            <div className="navbar">
                <button
                    className={`hamburger ${isOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className={`navigation ${isOpen ? 'show' : ''}`}>
                    <ul className='menu'>
                        <li><Link to='/News'>最新消息</Link></li> 
                        <li><Link to='/Illustrations'>酒精圖鑑</Link></li> 
                        <li><Link to='/Bar'>酒吧地圖</Link></li> 
                        <li><Link to='/BarRoute'>路跑路線</Link></li> 
                        <li><Link to='/Member'>會員專區</Link></li> 
                        <li><Link to='/About'>關於我們</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
