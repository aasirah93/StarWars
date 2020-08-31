import React from 'react'


function Searchbar({planet}) {


    const [filter, setFilter] = React.useState("");

    return (
        <div>
           <h1>Planets</h1> 
           <input type = "text" placeholder="Search Planet" value={filter} onChange={(e) => setFilter(e.target.value)}/>
           <ul>
           {planet.map(p => { 
               if(filter.length !== 0){
                   if(p.startsWith(filter)){
                    return <li>{p} </li> 
                //    }else{
                //        return null
                   }
                }
           })}
           </ul>
        </div>
    )
}

export default Searchbar;
