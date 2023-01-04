import bookshelf from './images/bookshelf.png'
import './Header.css'
function Header(){
    
return(
    <div className='header'>
        <img src={bookshelf} alt="bookshelf" className='book-img'></img>
        <div className='banner'><span id='b-1'>My</span><span id='b-2'>Book</span><span id='b-3'>List</span></div>
    </div>
)
}
export default Header;