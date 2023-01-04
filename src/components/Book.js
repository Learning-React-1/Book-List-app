import './Book.css'
function Book({tempid,book,deletebooks}){
return(
    <tr className='book-row'>
        <td>{tempid+1}</td>
        <td>{book.bookname}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td onClick={()=>{deletebooks(book.id)}} className='delete-button'>x</td>
    </tr>
)
}
export default Book;