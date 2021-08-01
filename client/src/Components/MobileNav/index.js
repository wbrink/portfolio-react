import React, {useState} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function MobileNav(props) {
  const [open, setOpen] = useState(false);
  let classes = "hamburger"
  let sideNavClass = "mobile-sidenav-container";
  let overlayClass = "sidenav-overlay d-none";

  const hamburgerClick = () => {
    console.log("clicked the hamburger menu");
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  if (open) {
    classes = "hamburger open";
    sideNavClass = "mobile-sidenav-container open";
    overlayClass = "sidenav-overlay d-block"
  } 

  return (
    <div>
      <header id="mobile-header">
        {/* navbar that stays on the top holds logo and hamburger menu */}
        <nav id="mobile-nav">
        
        <div className="mobile-logo">Will Brink</div>
        <div className={classes} onClick={hamburgerClick}>
          <div className="hamburger-menu" ></div>
        </div>

        </nav>
      </header>

      {/* sidenav that glides in from left */}
      <div className={sideNavClass}>
        <div className="mobile-sidenav">
            <div className="picture-name-container mobile">
              <div className="picture-name-container-inside mobile">
                <img id="nav-photo" src="/images/me_circle_smaller.png" alt=""/>
              </div>
              
            </div>
            
            
            
            {/* Person (About Link)  */}
            <Link className="nav-links" smooth to="/#about" onClick={() => {setOpen(false)}}>
              <svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <li>About</li>
            </Link>

            {/* Tools (skills link)  */}
            <Link className="nav-links" smooth to="/#skills" onClick={() => {setOpen(false)}}>
              <svg className="bi bi-tools" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
                <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
              </svg>
              <div>Skills</div>
            </Link>

            {/* Book (Portfolio link)  */}
            <Link className="nav-links" smooth to="/#portfolio" onClick={() => {setOpen(false)}}>
              <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
                <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
              </svg>
              <div>Portfolio</div>
            </Link>
              

          
            
            {/* envelope open (contact link) */}
            <Link className="nav-links" smooth to="/#contact" onClick={() => {setOpen(false)}}>
              <svg class="bi bi-envelope-open" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 8.917l7.757 4.654-.514.858L8 10.083.757 14.43l-.514-.858L8 8.917z"/>
                <path fill-rule="evenodd" d="M6.447 10.651L.243 6.93l.514-.858 6.204 3.723-.514.857zm9.31-3.722L9.553 10.65l-.514-.857 6.204-3.723.514.858z"/>
                <path fill-rule="evenodd" d="M15 14V5.236a1 1 0 0 0-.553-.894l-6-3a1 1 0 0 0-.894 0l-6 3A1 1 0 0 0 1 5.236V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM1.106 3.447A2 2 0 0 0 0 5.237V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.236a2 2 0 0 0-1.106-1.789l-6-3a2 2 0 0 0-1.788 0l-6 3z"/>
              </svg>
              <div>Contact</div>
            </Link>

            
        </div>

      </div>

      {/* overlay that covers the screen when clicked on will close the sidenav */}
      <div className={overlayClass} onClick={() => {setOpen(false)}}>
      </div>        

    </div>
    
    
  )
}


export default MobileNav;