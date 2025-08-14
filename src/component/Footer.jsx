import { Link } from 'react-router-dom';
import '../scss/_reset.scss'
import '../scss/Footer.scss'

const Footer = () => {
    return (
        <div className='Footer'>
            <ul className='sitemap'>
                <li><Link to='/'>首頁</Link></li>
                <li><Link to='/News'>News</Link></li>
                <li>
                    <Link to='/Illustrations'>酒精圖鑑</Link>
                    <ul>
                        <li className='WineType'><Link to='/#'>六大基酒</Link></li>
                        <li className='WineType'><Link to='/#'>經典調酒</Link></li>
                        <li className='WineType'><Link to='/#'>大眾調酒</Link></li>
                        <li className='WineType'><Link to='/#'>家庭調酒</Link></li>
                    </ul>
                </li>
                <li><Link to='/Bar'>酒吧地圖</Link></li>
                <li><Link to='/BarRoute'>路跑路線</Link></li>
                <li><Link to='/About'>關於我們</Link></li>
            </ul>
            <small>Copyright &copy; 酒桶理論Cask Theory</small>
        </div>
    )
}

export default Footer