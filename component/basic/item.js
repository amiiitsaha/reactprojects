import React from "react";

function Item({menu}){
return (

    <>
    <div className="container">
        <div className="row justify-content-start mt-5">
        {menu.map((cur)=>{
            const {id,name,image,description}=cur;        
             return (
             <div className="col-lg-4 col-sm-12  col-md-6 mt-4">
            <div className="card" key={id}>
                <img src={image} className="card-img-top " height={300}  alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <span  className="btn btn-primary">Buy</span>
                </div>
                </div>
            </div>
             );
        })}
    
        </div>
    </div>
    </>

);
}

export default Item;