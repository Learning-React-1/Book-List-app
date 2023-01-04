
import './App.css';
import Header from './components/Header'
import Books from './components/Books'
import Addbook from './components/Addbook'
import { useEffect, useState } from 'react';
function App() {
  const [books,setBooks]=useState([]);
  /*********************************run at start of book list app************************************************** */
  useEffect(()=>{
    const initializebooks=async()=>{
      const res=await fetch('/books',{'method':'GET'});
      const ret=await res.json();
      setBooks(ret);
    }
    initializebooks()
  },[])
  /*********************************run at start of book list app************************************************** */
  /*************************************handling state of books(**************************************************) */
  const addbooks=async (currtitle,currauthor,currisbn)=>{
    const res=await fetch('/books',{'method':'POST','headers':{'Content-type':'application/json'},'body':JSON.stringify({bookname:currtitle,author:currauthor,isbn:Number(currisbn)})});
    const ret=await res.json();
    console.log(ret);
    setBooks((prevbooks)=>{
      const updatedbooks=prevbooks.map((book)=>{return {...book}})
      // updatedbooks.push({id:Math.random()*1000000,bookname:currtitle,author:currauthor,isbn:Number(currisbn)})
      updatedbooks.push(ret);
      return updatedbooks;
    })
  }
  const deletebooks=async(bookid)=>{
    await fetch(`/books/${bookid}`,{'method':'DELETE'});
    setBooks((prevbooks)=>{
      const updatedbooks=prevbooks.map((book)=>{
        return {...book};
      })

      return updatedbooks.filter((book)=>{return book.id!==bookid})
    })
  }
  /*************************************handling state of books(**************************************************) */

  return (
    <div className="App">
      <Header></Header>
      <Addbook addbooks={addbooks}></Addbook>
      <Books books={books} deletebooks={deletebooks}></Books>
    </div>
  );
}

export default App;
