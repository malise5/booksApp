import './App.css'
import {useState} from 'react'

export default function Book({book, editbook, handleDelete, addToCart}) {
  const[like, setLike] = useState(0)

  const handleCick = () =>{
    setLike(like => like + 1)
  }
  return (
    <>
      <div className = 'books'>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
       <div className = "button">
          <button onClick = {handleCick}>Likes:{like}</button>
          <button onClick ={() => editbook(book)}> Edit!</button>
          <button onClick = {()=>addToCart(book)}>Add to Cart</button>
          <button onClick= {()=>handleDelete(book)}>Delete!</button>
       </div>
      </div>
    </>
  )
}