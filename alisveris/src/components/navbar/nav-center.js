import "../../styles/navbar/nav-center.css"
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.png';
import User from '../../assets/user.png';
import Basket from '../../assets/shopping-basket.png';
function Navcenter() {
    return ( 
        <div className="navbar-center">
            <div className="navbar-center-left">
                <NavLink to = '/'>
                    <img src={Logo} alt=""/>
                </NavLink>
            </div>
            <div className="navbar-center-right">
                <div className="search">
                    <input type="search" placeholder="Ne aramıştınız ?"/> 
                    <img src={Search} alt=""></img>
                </div>
                <div className="account">
                    <NavLink to='/login'>
                        <img src={User} alt=""/>
                    </NavLink>
                </div>
                <div className="basket">
                <NavLink to='/'>
                        <img src={Basket} alt=""/>
                    </NavLink>
                </div>
            </div>
            <div className="number">
                <p>0</p>
            </div>
        </div>
     );
}

export default Navcenter;
