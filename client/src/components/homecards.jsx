import React, { useEffect, useState } from "react";
import axios from "axios";
const Card=(props)=>{
    const [Out,setOutpass]=useState([]);
    useEffect(()=>{
        
    const ShowOutpass=async (link)=>{
        try{
            const res=await axios.get("http://localhost:3006/" + link);
            
            setOutpass(res.data);
        }
        catch(err){
            console.log("oh no!"+err);
        }

    };
    ShowOutpass(props.link)},[props]
    );
    


return(
    <div className="flex-container">

    {Out.map(c=>(
        
        <div className="card">
        <h1 style={{fontSize:"7vw"}}>
        {c.count}
        </h1>
        <h3 style={{paddingBottom:"2vw"}}>{props.tag + " Outpasses"}</h3>
        <button type="button" className="btn btn-outline-info"  ><a href={"/"+props.name} style={{color:"darkblue"}}>Click to View <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></a> </button>
        </div>
        
    ))}
    
     
    </div>
)
}
export default Card;