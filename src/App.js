
import './App.css';
import Header from './components/Header'
import Books from './components/Books'
import Addbook from './components/Addbook'
import Search from './components/Search';
import { useCallback, useEffect, useState } from 'react';
function App() {
  const [books,setBooks]=useState([]);
  const [searchresults,setSearchResults]=useState([]);//for search
  const [searchterm,setSearchTerm]=useState('');//for search
  const [showsearch,setShowSearch]=useState(false);//for search
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
    setSearchResults((prevbooks)=>{
        const updatedbooks=prevbooks.map((book)=>{return {...book}})
        return updatedbooks.filter((book)=>{return book.id!==bookid})
    })
  }
  /*************************************handling state of books(**************************************************) */
  /*************************************handling search************************************************************ */
  useEffect(()=>{
    if(searchterm===''){
      setShowSearch(false)
    }
    else{
      setShowSearch(true)
    }
  },[searchterm])
  const showsearchresults=useCallback((currsearchterm)=>{
    
    setSearchTerm(currsearchterm)
    setSearchResults((prevsearch)=>{
      const updatedsearch=books.map((book)=>{
        return {...book};
      }).filter((book)=>{
        return book.bookname.includes(currsearchterm)
      })

      return updatedsearch;
    })
    
  },[books])
  /*************************************handling search************************************************************ */
  return (
    <div className="App">
      <Header></Header>
      <Addbook addbooks={addbooks}></Addbook>
      <Search showsearchresults={showsearchresults}></Search>
      {showsearch ? <Books books={searchresults} deletebooks={deletebooks}></Books> : <Books books={books} deletebooks={deletebooks}></Books>}
    </div>
  );
}

export default App;
