import {Link} from "react-router-dom";
import {useLocation} from 'react-router';
interface props {
    path: string
}

const navList = [
    {to: '/home', label: 'Home'},
    {to: '/register-api', label: 'Register API'},
    {to: '/list-api', label: 'API List'},
    {to: '/list-api-detail', label: 'API Details'},
]

export default function Nav(props: props) {
    const location = useLocation();
    console.log('location',location )
    return (
        <nav id="nav" className="mobileUI-site-nav">
            <ul>
                {navList.map(({to, label}) => {
                    const className = location.pathname.includes(to) ? 'current_page_item' : '';
                    return <li className={className} key={to}><Link to={to}>{label}</Link></li>
                })}
            </ul>
        </nav>
    )
}
