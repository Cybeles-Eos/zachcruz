import { Outlet, Link } from "react-router-dom";
import CSS from './nav.module.css';
import { useState, useEffect } from "react";

// Components
import Logo from "../logo/logo.jsx";
import Social from "../social_link/social.jsx";

function Nav(){ 
   // Icons
   let at = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--dark)"><path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"></path></svg>;
   let close_at = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--white)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>;
   let menu = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--white)"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>;

   // Page pointer save.
   let [pointer, setPointer] = useState('home');
   useEffect(()=>{
      let saved = localStorage.getItem("save_point") || "home";
      setPointer(saved);
   }, []);

   let [menu_toggle, setMenu_toggle] = useState(true);
   const toggleMenu = () => {
      const newState = !menu_toggle; // Manually compute the new value
      setMenu_toggle(newState);
    
      let body = document.querySelector('#menuBar');
      body.setAttribute("data-toggle-menu", !newState ? "open" : "close");
    };
    
   return(
      <>
         <header className={CSS.header}>
            <nav className={CSS.nav_bar} id="menuBar" data-toggle-menu="close">
               <div className={CSS.logo}>
                  <Logo />
               </div>
            
               
               <div className={CSS.nav_body} data-pointer={pointer}>
                  <ul>
                     <li><Link onClick={()=>{
                        setPointer("home");
                        localStorage.setItem("save_point", "home");
                     }} to='/'>Home</Link></li>
                     <li><Link onClick={()=>{
                        setPointer("project");
                        localStorage.setItem("save_point", "project");
                     }} to='/project'>Projects</Link></li>
                     <li><Link onClick={()=>{
                        setPointer("about");
                        localStorage.setItem("save_point", "about");
                     }} to='/about'>About</Link></li>
                  </ul>
               </div>
               
               
               <div className={CSS.social_links}>
                  <Social txt="facebook" link="https://www.facebook.com/anica.cruz.58"/>
                  <Social txt="github" link="https://github.com/Cybeles-Eos"/>
               </div>
               <button onClick={toggleMenu} className={CSS.menu_btn}>
                  {menu_toggle ? menu : close_at}
               </button>
            </nav>
         </header>

         <Outlet />
      </>
   )
}  

export default Nav