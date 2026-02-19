import React from 'react'
import "../../App.css"
import { Link } from 'react-scroll'
const Sidebar: React.FC = ()=>{


    return(
        <div className='sidebar'>
            <Link to="testimonial" smooth={true}>testimonial</Link>
        </div>
    )

    
}

export default Sidebar;