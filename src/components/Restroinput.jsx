import React from"react";
export const Restroinput=({handleChange,name,img,handleClick})=>{
    return(
        <div>
            <form>
                <input value={name}  onChange={handleChange} type="text" placeholder="Enter your Restaurant Name" />
                <input value={img} onChange={handleChange} type="text" placeholder="Enter your Restaurant IMAGE  link" />
                <input value={rating} onChange={handleChange} type="number" placeholder="enter rating " />
                <input value={categorie} onChange={handleChange} type="text" placeholder="enter categorie"/>
                <input value={min_amount} onChange={handleChange} type="text" placeholder="enter min amount per head"/>
                <input value={payment} onChange={handleChange} type="checkbox"/>
            </form>
        </div>
    )
}