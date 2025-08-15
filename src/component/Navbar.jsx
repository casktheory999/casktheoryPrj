import { Link } from 'react-router-dom';
import '../scss/_reset.scss'
import '../scss/Navbar.scss'

const Navbar = () => {
    return (
        <div id='topbar'>
            <div className="logo"><Link to='/'>酒桶理論</Link></div>
            <nav className="navigation">
            <ul className='manu'>
                <li><Link to='/News'>最新消息</Link></li>
                <li><Link to='/Illustrations'>酒精圖鑑</Link></li>
                <li><Link to='/Bar'>酒吧地圖</Link></li>
                <li><Link to='/BarRoute'>路跑路線</Link></li>
                <li><Link to='/Member'>會員專區</Link></li>
                <li><Link to='/About'>關於我們</Link></li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar