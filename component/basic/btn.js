import React from "react";
import Menu from "./menuapi";

const Btn = ({Filteritem,uniqueitem,setmenudata}) => {
    return <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="btn btn-group col-lg-7 col-sm-12">
                    <button className="btn btn-outline-info  " onClick={() => setmenudata(Menu)}>all</button>
                    {uniqueitem.map((cur) => {
                        return <button className="btn btn-outline-info  " onClick={() => Filteritem(cur)}>{cur}</button>

                    })
                    }
                </div>
            </div>

        </div>
    </>
}

export default Btn;