import React, {useState} from 'react'

export default function Delete() {
  
  const [id,setID]=useState("");

  return (
    <div style={{background:'lightblue',textAlign:'center'}}>
        <p style={{fontSize:30}}>Delete</p>
        <form>
          
          <label>
            Id del estadio a borrar:
            <input type="text" id='id'  onChange={(e) => setID(e.target.value)}/>
          </label>
        </form>
        <button style={{margin:40}} onClick={()=>{
             var url='https://api-example-udb.herokuapp.com/api/list/'+id;
             fetch(url,{
                method: 'DELETE'
            }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));
             
         }}>Eliminar estadio</button>    
        
    </div>
  )
}
