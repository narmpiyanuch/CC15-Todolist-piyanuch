import { FaSearch } from 'react-icons/fa';

function Search() {
    return (
        <div className='search'>
            <span className='search__icon'>
                <FaSearch />
            </span>
            <input className='search__input' type='text' placeholder='Search' />
        </div>
    );
}

export default Search;