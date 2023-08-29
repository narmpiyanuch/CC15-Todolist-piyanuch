import './App.scss';
import { FaHome, FaSearch } from 'react-icons/fa';
import Search from './Search.jsx';

function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <FaHome />
            </div>
            <div className='header__text'>
                <h1>TodoList</h1>
            </div>
            <div className='header__search'>
                <Search />
            </div>
        </header>
    );
}

export default Header;