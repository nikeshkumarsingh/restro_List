import React from"react";
export const Restroinput=({handleChange,handleSubmit,sortrating})=>{
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input  onChange={handleChange} id="name" type="text" placeholder="Enter your Restaurant Name" />
                <input  onChange={handleChange} id="Image" type="text" placeholder="Enter your Restaurant IMAGE  link" />
                <input  onChange={handleChange} id="rating" type="number" step="any" placeholder="enter rating " />
                <input  onChange={handleChange} id="categorie" type="text" placeholder="enter categorie"/>
                <input  onChange={handleChange} id="min_amount"type="text" placeholder="enter min amount per head"/>
                <input  onChange={handleChange} id="cash" type="checkbox" />
                <input  onChange={handleChange} id="upi" type="checkbox"/>
                <input onChange={handleChange} id="card" type="checkbox"/>
                <input  type="submit"/>
            </form>
            <button onClick={sortrating}>sort high to low rating</button>
        </div>
    )
}