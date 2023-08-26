import React,{useState} from 'react'
import"./List.css"
const List = () => {
    const[tex,settex]=useState("")
    const[data,setdata]=useState([])
    const[secondinput,setsecondinput]=useState("")
    const[editmode,seteditmode]=useState(false);
    const[editid,seteditid]=useState(null);
    const inputhandler=(e)=>{
      settex(e.target.value)
    }
  const Addhandler=()=>{
   if(tex.trim()!==" "){
    const todo={
      id:new Date().getTime(),
      item:tex
    }
    setdata([...data,todo])
    settex("")
   }
  
  }
  const updatehandler=()=>{
   const updatetodo= data.map((items)=>{
     if(items.id===editid){
      return{...items,item:secondinput}
     }
     return items
    })
    setdata(updatetodo)
    seteditmode(false)
    seteditid(null)
    setsecondinput("");
  }
  const secondinputhandler=(e)=>{
    setsecondinput(e.target.value)
  }
  const edithandler=(id,texxt)=>{
    seteditmode(true)
    seteditid(id)
    setsecondinput(texxt)
    
  }
  const deletehandler=(itemid)=>{
    const result=data.filter((item)=>
        item.id!==itemid)
    setdata(result);
  }
  return (
  
    <div className='maindiv'>
      <h1>TODOLIST</h1>
      <input type="text"name='inn'value={tex} onChange={inputhandler}/>
       
      {
      editmode?(<div className='domhaa'>
        <input type="text" value={secondinput} name='secondinput'onChange={secondinputhandler}/>
        <button onClick={updatehandler}>update</button>
      </div>):(<button onClick={Addhandler}>Add</button>)
      }
      
     <ol>
      {
        data.map((items)=>{
          return(
            <div>
            <li key={items.id}>{items.item}</li>
            <button onClick={()=>edithandler(items.id,items.item)}>edit</button>
            <button onClick={()=>deletehandler(items.id)}>delete</button>
            </div>
          )
          
        })
      }
     </ol>
      
    </div>
  )
}

export default List
