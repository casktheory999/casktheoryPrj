import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>首頁</Link></li>
                <li><Link to='/News'>News</Link></li>
                <li><Link to='/Illustrations'>酒精圖鑑</Link></li>
                <li><Link to='/Bar'>酒吧地圖</Link></li>
                <li><Link to='/Route2'>路跑路線</Link></li>
                <li><Link to='/About'>關於我們</Link></li>
            </ul>
        </div>
    )
}

export default Navbar