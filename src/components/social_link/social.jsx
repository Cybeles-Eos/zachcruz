import CSS from './social.module.css'


function Social({txt, link}){

   return(
      <div className={CSS.social_box}>
         <p>{txt}</p>
         <button onClick={()=>{
            window.open(link, "_blank", "noopener,noreferrer");
         }} className={CSS.social_btn}>{txt}</button>
      </div>
   )
}

export default Social