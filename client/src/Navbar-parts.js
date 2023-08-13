import Pending from './components/Pending';
import history from './components/history';
import Extra from './components/Extra';
import help from './components/help';

//these are the parts of Navbar that i want along with the corresponding components and props that each part requires
const parts =[
    {
        key:1,
        name: "Pending",
        component: Pending,
        
    },
    {
        key:2,
        name:"History",
        component: history,
        
    },
    {
        key:3,
        name:"Help",
        component: help,
        props:{
            name: "Shama4"
        }
    },
    {
        key:4,
        name:"Logout",
        component: Extra,
        props:{
            name: "Shama3",
            num: 1
        }
        
    }
    
]

export default parts;

