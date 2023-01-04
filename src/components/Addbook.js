import {useState} from 'react'
import './Addbook.css'
function Addbook({addbooks}){
    const [currtitle,setCurrTitle]=useState('');
    const [currauthor,setCurrAuthor]=useState('');
    const [currisbn,setCurrIsbn]=useState('');
    const addbookformhandler=(e)=>{
        e.preventDefault();
        if(currtitle==='' || currauthor==='' || currisbn==='' || currisbn<0)
        {
            alert('please enter title,author,isbn and isbn has to be a positive number')
            return;
        }
        addbooks(currtitle,currauthor,currisbn)
        setCurrTitle('');
        setCurrAuthor('');
        setCurrIsbn('');
    }
return(
    <div className='addbook'>
        <form onSubmit={(e)=>{addbookformhandler(e)}} className='addbook-form'>
            <div className='addbook-row'>
                <div>Title</div>
                <input type='text' value={currtitle} onChange={(e)=>{setCurrTitle(e.target.value)}} className='addbook-input'></input>
            </div>
            <div className='addbook-row'>
                <div>Author</div>
                <input type='text' value={currauthor} onChange={(e)=>{setCurrAuthor(e.target.value)}} className='addbook-input'></input>
            </div>
            <div className='addbook-row'>
                <div>ISBN</div>
                <input type='number' value={currisbn} onChange={(e)=>{setCurrIsbn(e.target.value)}} className='addbook-input'></input>
            </div>
            <div className='addbook-submit-row'>
                <input type='submit' value='Add Book' className='addbook-submit' ></input>
            </div>
        </form>
    </div>
)
}
export default Addbook;