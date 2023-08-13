import React from "react";
function Footer(){
    const date= new Date();
        let year= date.getFullYear();
    return(
    <div className="foot">

        <footer >
        
                <ul >
                <div  style={{fontSize:'large',color:'black'}}>Visit us:</div>
                    <li><a  style={{color:'black'}} href="https://www.snuchennai.edu.in/" >Website: www.snuchennai.edu.in</a></li>
                    <li><p>Address:</p>
                        <p> Shiv Nadar University Chennai,</p>
                        <p>Rajiv Gandhi Salai (OMR),</p>
                        <p>Kalavakkam – 603 110,</p>
                        <p>Tamil Nadu, India.</p></li>
                </ul>
                <ul >
                <div  style={{fontSize:'large',color:'black'}}>Contact us:</div>
                    <li>Phone No: 0987345678</li>
                    <li>Email: snuuuu@snuchennai.edu.in</li>
                <div  style={{fontSize:'large',color:'black',paddingTop:50}}>Help Desk:</div>
                <li>Phone No:099345678</li>
                <li>Email: snu@snuchennai.edu.in</li>

                </ul>
                
                
            </footer>
            <div style={{textAlign:'center',padding:30,backgroundColor:'#074698',color:'black',backgroundImage:'URL(https://i.pinimg.com/564x/0e/2d/b6/0e2db63cd1f795ff7b4c19b79432b502.jpg)'}}>
                Copyright © {year}
                </div>
                <div className="foot-url"></div>
    </div>);
}
export default Footer;