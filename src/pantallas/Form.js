import React, {useState} from 'react'

export default function Form() {
  
  const [name,setName]=useState("");
  const [team,setTeam]=useState("");
  const [country,setCountry]=useState("");
  const [image,setImage]=useState("");
  
  var url='https://api-example-udb.herokuapp.com/api/list';
  const [data, setData] = useState([]);//los corchetes son para especificar que la variable "data" va a recibir un objeto
    //constante con hook para capturar los datos de la petición fetch
    fetch(url)
    .then((res)=>res.json()).then((resJson)=>setData(resJson));
    var lastID;
    data.map((stadium,i) =>{
      lastID=stadium.id
    }
    );
    
    

  return (
    <div style={{background:'lightblue',textAlign:'center'}}>
        <p style={{fontSize:30}}>Form</p>
        <form>
          <label>
            
          </label>
          <label>
            Nombre:
            <input type="text" id='id'  onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Equipo:
            <input type="text" id='id'  onChange={(e) => setTeam(e.target.value)}/>
          </label>
          <label>
            País:
            <input type="text" id='id'  onChange={(e) => setCountry(e.target.value)}/>
          </label>
          <label>
            URL Imagen:
            <input type="text" id='id'  onChange={(e) => setImage(e.target.value)}/>
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
                    name: name,
                    team: team,
                    country: country,
                    image: image   
                }   
            )
        }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));}}>Añadir estadio</button>    
        
    </div>
  )
}
