import {Link} from "react-router-dom";

interface props {
    path: string
}

const navList = [
    {to: '/', label: 'Home'},
    {to: '/apply', label: 'Apply'},
]

export default function Nav(props: props) {
    return (
        <nav id="nav" className="mobileUI-site-nav">
            <ul>
                {navList.map(({to, label}) => {
                    const className = to === props.path ? 'current_page_item' : '';
                    return <li className={className} key={to}><Link to={to}>{label}</Link></li>
                })}
            </ul>
        </nav>
    )
}
