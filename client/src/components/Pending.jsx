import {useEffect,useState} from 'react';
import Axios from "axios";
import Modals from "./modals";
import { Button, Modal } from 'react-bootstrap';






function Pendinglist(){
    

    const[pendingList,setpendingList]=useState([])
    const[Data,setData]=useState([]);
    const [showDenyModal, setShowDenyModal] = useState(false);
    const [reasonDenied, setReasonDenied] = useState('');
  
    const handleDeny = (outpassId) => {
      setData(outpassId);
      setShowDenyModal(true);
    };
  
    const handleDenySave = async () => {
      try {
        await Axios.put("http://localhost:3006/ButtonDeny/"+ Data, {
          reason_denied: reasonDenied,
        });
        setShowDenyModal(false);
        window.location.reload(true);
      } catch (err) {
        console.log('OH NO' + err);
      }
    };


    const ApproveOutpass =async (outpassId) => {
      try{
        await Axios.put("http://localhost:3006/ButtonApprove/"+ outpassId);
      }
      catch(err){
        console.log("OH NO"+err);
      }

   };


   

   
    
  
    
   

    useEffect(() => 
    {
        Axios.get("http://localhost:3006/Pending").then((response) => {
            setpendingList(response.data)
        });
    } ,[]);

   
    
    
       


    





    return (
      <div className='bodyy'> 
      <main  className=' table'>
       <section className='table_header'>
        <h2>PENDING LIST</h2>
       </section>

       
      <div className='tab table-reponsive table_body'>
  

      
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
            <th scope="col"></th>

            
            

          </tr>
        </thead>

        <tbody className="table-group-divider">
          {pendingList.map((val) => (
                
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
                           fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                         </svg>
                         </button>     
                </td>

  <td>
   <button className="approve-button"  onClick={() =>{ApproveOutpass(val.out_no);window.location.reload(true);}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-check"
    viewBox="0 0 16 16"
  >
    <path d="M11.388 2.553a.5.5 0 0 1 .057.638l-.057.07-7.5 9a.5.5 0 0 1-.638.057l-.07-.057-3.5-3a.5.5 0 0 1 .638-.765l.07.057 3.086 2.587 7.086-8a.5.5 0 0 1 .638-.057z" />
  </svg>
  
</button>

</td>


<td>
                    <button
                      className='round-button'
                      style={{ backgroundColor: 'red' }}
                      onClick={() => handleDeny(val.out_no)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='white'
                        className='bi bi-x'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.297 8L16 2.297 13.703 0 8 5.703 2.297 0 0 2.297 5.703 8 0 13.703 2.297 16 8 10.297l5.703 5.703 2.297-2.297L10.297 8z' />
                      </svg>
                    </button>
                  </td>





      
                       

                </tr>       
         
          ))}
          
        </tbody>

      </table>
      

     </div>

     <footer style={{opacity:0}}></footer>

  
</main>

  {/* Deny Modal */}
  <Modal show={showDenyModal} onHide={() => setShowDenyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Deny Outpass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type='text'
            className='form-control'
            placeholder='Reason for denial'
            value={reasonDenied}
            onChange={(e) => setReasonDenied(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowDenyModal(false)}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleDenySave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     <Modals outno={Data} bt="v"/>


      </div>
    );
}

export default Pendinglist;