import {useEffect,useState} from 'react';
import Axios from "axios";
import Modals from "./modals";






function Historylist(){
    

    const[historyList,sethistoryList]=useState([])
    const[Data,setData]=useState([]);
    useEffect(() => 
    {
        Axios.get("http://localhost:3006/history").then((response) => {
            sethistoryList(response.data)
        });
    } ,[]);


    





    return (
      <div className='bodyy'> 
      <main className='table'>
       <section className='table_header'>
        <h2>HISTORY LIST</h2>
       </section>

       <section className='table_body'>
      <div className='tab table-reponsive'>
  

      
      <table>
        <thead>
          <tr>
            <th scope='col'><h4>OUTPASS NO.</h4></th>
            <th scope='col' ><h4>NAME</h4></th>
            <th scope='col'><h4>GOING DATE</h4></th>
            <th scope='col'><h4>RETURN DATE</h4></th>
            <th scope='col'><h4>REASON</h4></th>
            <th scope='col'><h4>STATUS</h4></th>
            <th scope="col" className='None'></th>
            <th scope="col"></th>
            

          </tr>
        </thead>

        <tbody className="table-group-divider">
          {historyList.map((val) => (
                
                <tr>
                      <th>{val.out_no}</th>

                      <td style={{padding:50,paddingRight:180}}>
                      <div className="InCard">
                           <p ><img src={val.image} alt="Student" className="InImg"/></p>
                            <p>{val.name}</p>
                            <p style={{fontSize:13, color:"#039BE5", fontWeight:"lighter"}}>{val.branch}</p>

                      </div>
                      </td>

                      <td>{val.go_date.substring(0,10)}</td>
                      <td>{val.return_date.substring(0,10)}</td>
                      <td> {val.reason}</td>
                      <td> {val.status}</td>
                       <td style={{paddingRight:40}}>
                       <button 
                       className="btn btn-outline-info"
                       //variant="outline-primary"
                        type="button"
                         style={{
                          borderColor:"darkblue", 
                          color:"blue" ,
                          
                          }} 
                          data-bs-toggle="modal"
                           data-bs-target="#exampleModal" 
                           onClick={()=>setData(val.out_no)}>
                           View 
      <svg 
      xmlns="http://www.w3.org/2000/svg"
       width="16"
        height="16"
         fill="currentColor" 
         className="bi bi-chevron-right"
          viewBox="0 0 16 16">
  <path
   fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"

   />
</svg>
</button>     
                       </td>

                       

                </tr>       
         
          ))}
          
        </tbody>

      </table>

     </div>
     <footer style={{opacity:0}}></footer>

     </section>

     </main> 
     <Modals outno={Data} bt="v"/>

      </div>
    );
}

export default Historylist;