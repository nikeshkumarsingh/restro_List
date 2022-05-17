import { useEffect,useState } from "react";
export const Restaurantlist=({list,setList,load,handlePrev,handleNext,page})=>{
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            {
              load?<loader/>:list.map((e)=><div key={e.id} style={{textAlign:"center"}}><div><img src={e.Image} alt="Image"/></div><div><h3>{e.name}</h3>
              <p>Categorie: {e.categorie}</p>
              <div>
              <p>Min:{" ₹"+e.min_amount}</p>
              <div style={{background:"green",color:"white",width:"10%",marginLeft:"45%"}}>{e.rating}</div>
              </div>
              <div>{e.cash=="on" ?"cash":""} | {e.upi=="on" ?"upi":" "} | {e.card=="on" ?"card":""}</div> 
              </div></div>)
            }
            <button disabled={page==1} onClick={handlePrev}>prev</button>
            <button  onClick={handleNext}>Next</button>
        </div>
    )
}