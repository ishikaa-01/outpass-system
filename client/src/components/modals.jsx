import React, { useEffect, useState } from "react";
import axios from "axios";
function Modals(props){
  const [Out,setOutpass]=useState([]);
        useEffect(()=>{
            
        const ShowOutpass=async (outno)=>{
            try{
                const res=await axios.get("http://localhost:3006/Pending/"+outno );
                
                setOutpass(res.data);
            }
            catch(err){
                console.log("oh no!"+err);
            }
    
        };
        ShowOutpass(props.outno)},[props]
        );
    return(
        
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Outpass Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {Out.map((val)=>(
        <div className="ModCard">
      <p ><img src={val.image} alt="Student" className="InImg"/></p>
      <h2><p style={{paddingLeft:85}}>{val.name}</p></h2>
      <p className="lower">{val.hostel_no+", "+val.room_no}</p>
      <hr></hr>
      <p>Reason: {val.reason}</p>
      <p>Going Date: {val.go_date.substring(0,10)}</p>
      <p>Return Date: {val.return_date.substring(0,10)}</p>
      <p className="Stat">Status: {val.status}</p>
      <p>{val.email}</p>
      <p>{val.branch + ", "+val.year +" year"}</p>
      <p>{val.regno}</p>

      </div>
      ))}
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Modals