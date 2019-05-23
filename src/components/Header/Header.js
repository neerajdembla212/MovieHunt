import React from 'react';
import Styles from './Header.module.scss';
import hamburger from '../../assets/img/hamburger.png';
import path from '../../assets/img/Path.png';
import Logo from '../../assets/img/MovieHunt.png';
import { Link } from 'react-router-dom';
const cn = require('classnames');

const Header = (props) => {
    return (
        <div className={Styles.Header}>
            <div className={Styles.leftMenu}>
                <div className={Styles.icMenu}>
                    <img src={hamburger} alt="hamburger-menu-icon" />
                </div>
                <div className={Styles.logo}>
                    <img src={path} alt="path-icon" />
                    <img src={Logo} alt="logo-name" />
                </div>
            </div>
            <div className={Styles.TabContainer}>
                <div className={Styles.Tab}>
                    <Link className={Styles.TabLink}>Top Rated</Link>
                </div>
                <div className={Styles.Tab}>
                    <Link to="/movies" className={Styles.TabLink}>Movies</Link>
                </div>
                <div className={Styles.Tab}>
                    <Link className={Styles.TabLink}>Discover</Link>
                </div>
            </div>
            <div className={Styles.Divider}>
                <div className={Styles.VerticleDivider}></div>
            </div>
            <div className={Styles.LoginContainer}>
                <div className={Styles.LoginItem}>
                    Login
                </div>
                <div className={cn(Styles.LoginItem, 'RoundBtn')}>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Header;