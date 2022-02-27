import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, []);
    return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src="https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="netflix_logo" />
        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar_logo" />
    </div>
  )
}

export default Nav
