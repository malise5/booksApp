import './App.css'
import {useState} from 'react'

export default function Form({handleSubmit,formdata,handleChange}) {
  

const clear = (e)=>{
  handleSubmit(e,formdata)
  setFormdata({
    title:'',
    author:'',
    description:''
  })
}
  
  
  return (
    <form className="form" onSubmit = {handleSubmit} >
      <label>Title</label>
      <input type="text" name="title" value={formdata.title} onChange = {handleChange} aria-label="title"/>
      <label>Author</label>
      <input type="text" name="author" value={formdata.author} onChange = {handleChange} aria-label="author"/>
      <label>Desription</label>
      <input type="text" name="description" value={formdata.description} onChange = {handleChange} aria-label="description"/>
      <input cassName = 'button' type='submit'/>
    </form>
  )
}