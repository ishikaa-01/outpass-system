import react from 'react';
import Footer from "./Footer";
import HomeText from './hometext';
import Card from './homecards';

function createOutpass(props){
    return(
        <div className='pad'>
             <HomeText/>
             <Card tag="Pending" name="Pending" link="ppending"/>
             <Card tag= "Approved" name="History" link="approved"/>
            <Card tag="Denied"  name="History" link="denied"/>

            <Footer></Footer>
     </div>
    );
}

export default createOutpass;