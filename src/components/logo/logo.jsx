import CSS from './logo.module.css';

function Logo(){
   return(
      <>
         <figure className={CSS.logo}>
            <span className={CSS.i}></span>
            <span className={CSS.i}></span>
            <span className={CSS.i}>
               <p>Z</p>
            </span>
         </figure>  
      </>
   )
}

export default Logo