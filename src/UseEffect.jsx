import {useEffect} from 'react'

//hear state change everytime
useEffect(()=>{
  if(cart.length > 0)alert(`${cart[cart.length-1].title} added to cart`)
},[cart])

//how to use effect and alert when a component is removed from the screen
useEffect(() =>{
  fetch("/cats",{
    method: 'POST',
    headers:{
      'content-type' : 'Application/json'
    },
    body: JSON.stringify(formData)
  })
  .then (res=> res.json())
  .then(book => {
    setBookList([book,...bookList])
  })
})


//delete
const handleDelete = (book) => {
  fetch("/delete/`${book.id}`",{
    method : "DELETE"
  })
  .then(()=>{
    const filt = allBooks.filter(book => book.id !== book.id)
    setBookList(filt)
  })
}