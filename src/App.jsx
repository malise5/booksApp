import './App.css'
import Header from './Header.jsx'
import Form from './Form.jsx'
import Bookcontainer from './Bookcontainer.jsx'
import {useState} from 'react'
import Search from './Search.jsx'

import {buks} from './buks.jsx'

export default function App() {

  //bookcontaner array and book
  const[booklist,setBooklist] = useState(buks)
  const[allbooks, setAllbooks] =useState(buks)

  //search-bar
  const[search,setSearch] = useState('')

  //cart
  const[cart,setCart] = useState([])

  //useEffect(()=>{
  // fetch("api for the data")
  //.then(res=> res.json())
  //.then(books => {
  //  setBooklist(books)
  //  setSearch(books)= for search filter
  //})
  //},[])
  
  const handleSearch = (e) => {
    const filteredbooks = buks.filter(books => books.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setBooklist(filteredbooks)
  }

  //form
  const[formdata, setFormdata] = useState({
    title:'',
    author:'',
    description:''
  })

  const handleChange = (e) => {
  setFormdata({...formdata, [e.target.name]:e.target.value})
}
  //submit-form
  const handleSubmit = (e) =>{
    e.preventDefault()
    setBooklist([formdata, ...booklist])
    setFormdata({
    title:'',
    author:'',
    description:''
  })
  }

  //edit our books
  const editbook = (book) => {
    setFormdata({
    title:book.title,
    author:book.author,
    description:book.description
  })
  }

  //function add to cart
  const addToCart = (book) =>{
    setCart([...cart, book])
  }

  //delete a book
  const handleDelete = (book) => {
    const filterbooks = buks.filter(book => book.id !== book.id)
    setBooklist(filterbooks)
    setAllbooks(filterbooks)
  }
  
  return (
    <div className = "app">
      <h4>Cat:{cart.length}</h4>
      <Header />
      <Form handleSubmit={handleSubmit} 
        formdata ={formdata} handleChange={handleChange}/>
      <Search handleSearch = {handleSearch}/>
      <Bookcontainer 
        buks = {booklist} 
        editbook={editbook}
        handleDelete={handleDelete}
        addToCart={addToCart}
        />
    </div>
  )
}
