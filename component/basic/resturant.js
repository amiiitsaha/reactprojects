import React , { useState } from "react";
import "./res.css";
import Menu from "./menuapi.js";
import Item from "./item";
import Btn from "./btn";

const uniqueitem=[...new Set(Menu.map((curr)=>{
        return curr.category;
    })
    )]
    // console.log(uniqueitem[0]);

const Nav=()=>{
    return (
        <>
            <div className="container bg-info">
            <nav className="row justify-content-between align-item-center">
            <div className="col-lg-2 display-5"><b>HH</b></div>
                <div className="col-lg-6">
                    <ul className="row justify-content-around">
                        <li className="text-light py-2  col">Home</li>
                        <li className="text-light py-2  col">About</li>
                        <li className="text-light py-2  col">Contact</li>
                        <li className="text-light py-2  col">Sign in</li>
                    </ul>
                </div>

            </nav>

        </div>
        </>
    );
}
function Resturant(){
    const [menudata,setmenudata]=useState(Menu);
    const Filteritem=(cate)=>{
         let newdata=Menu.filter((curr)=>{
            return curr.category===cate;
         })
        // console.log(newdata);
        setmenudata(newdata);
    }
return(
<>
        <Nav />
        <Btn Filteritem={Filteritem} uniqueitem={uniqueitem} setmenudata={setmenudata}/>
        <Item menu={menudata}/>
</>
);

}

export default Resturant;