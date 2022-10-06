import React, {useState} from 'react'

export default function Form() {
  
  const [author,setAuthor]=useState("");
  const [name,setName]=useState("");
  const [pages,setPages]=useState("");
  
  var url='https://api-library-service.herokuapp.com/api/list';
  const [data, setData] = useState([]);//los corchetes son para especificar que la variable "data" va a recibir un objeto
    //constante con hook para capturar los datos de la petición fetch
    fetch(url)
    .then((res)=>res.json()).then((resJson)=>setData(resJson));
    var lastID;
    data.map((book,i) =>{
      lastID=book.id
    }
    );
    
    

  return (
    <div style={{background:'lightblue',textAlign:'center'}}>
        <p style={{fontSize:30}}>Form</p>
        <form>
          <label>
            
          </label>
          <label>
            Autor:
            <input type="text" id='id'  onChange={(e) => setAuthor(e.target.value)}/>
          </label>
          <label>
            Nombre:
            <input type="text" id='id'  onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Paginas:
            <input type="text" id='id'  onChange={(e) => setPages(e.target.value)}/>
          </label>
          
        </form>
        <button style={{margin:40}} onClick={()=>{
          fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(
                {
                    id: (parseInt(lastID)+1).toString(),
                    author: author,
                    name: name,
                    pages: pages
                }   
            )
        }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));}}>Añadir libro</button>    
        
    </div>
  )
}
