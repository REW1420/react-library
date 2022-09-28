import React, {useState} from 'react'

export default function List() {

    var url='https://api-example-udb.herokuapp.com/api/list';
    const [data, setData] = useState([]);//los corchetes son para especificar que la variable "data" va a recibir un objeto
    //constante con hook para capturar los datos de la petición fetch
    fetch(url)
    .then((res)=>res.json()).then((resJson)=>setData(resJson));

    

    
  return (
    <div style={{background:'lightblue',textAlign:'center'}}>
        <p style={{fontSize:30}}>List</p>
        {
            data.map((stadium)=>
            { 
                if(stadium.id >0){
                    return(
                        <div style={{background:'blue',color:'white', padding:30}}> 
                            <p style={{fontSize:30}}>{stadium.name}</p>
                            <p style={{fontSize:30}}>{stadium.team}</p>
                            <p style={{fontSize:30}}>{stadium.country}</p>
                            <img src={stadium.image} style={{width:500,height:200}}/>
                        </div>
                        )
                }

            }
            )
        }

        <button style={{margin:40}} onClick={()=>{
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(
                    {
                        id: "7",
                        name: "Allianz Arena",
                        team: "F.C. Bayern Münich",
                        country: "Alemania",
                        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/M%C3%BCnchen_-_Allianz-Arena_%28Luftbild%29.jpg"   
                    }   
                )
            }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));
        }}>Añadir estadio</button>    
        
    </div>
  )
}
