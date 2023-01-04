import Book from "./Book";
import './Books.css'
function Books({books,deletebooks}){
return(
    <div>
        <table className="book-table">
          <thead>
              <tr className="book-head-row">
                <th>Row</th>
                <th>Name</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
              </tr>
          </thead>
           
          <tbody>
              {books.map((book,index)=>{
              return <Book key={index} tempid={index} book={book} deletebooks={deletebooks}></Book>;
              })}
          </tbody>
          
        </table>
    </div>
)
}
export default Books;