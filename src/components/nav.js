import React from 'react'
import { Link } from 'react-router-dom'

//variables
const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Login',
        path: '/login'
    }
]


export default function Nav() 
{

    return (

        <nav>
            <div className="desktop-navigation">

                    { navLinks.map((link, index) =>
                        (
                        <temp key={index} class="nav-item">
                            <Link to ={link.path}>{link.title}</Link>
                        </temp>
                        
                        ))
                    }
                    
            </div>
        </nav>

    )

}