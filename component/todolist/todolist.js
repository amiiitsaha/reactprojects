import React, { useEffect, useState } from "react";
import "./todo.css";

const getlocalitem=()=>{
    const list=localStorage.getItem("mytodolist");
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}

const Todo=()=>{
    const [datas,setdatas]=useState("");
    const [items,setitems]=useState(getlocalitem());
    const [edititems,setedititems]=useState("");
    const [toggle,settoggle]=useState(false);
    const [searchitem,setsearchitem]=useState([]);
    const [searchtoggle,setsearchtoggle]=useState(true);

    const additem =()=>{
        if(toggle){
            setitems(items.map((cur)=>{
                if(cur.id===edititems){
                    return {...cur,name:datas};
                }else{
                    return cur;
                }
            }));
            setdatas("");
            setedititems("")
            settoggle(false);

        }else{
            const newdata={
            id:new Date().getTime().toString(),
            name:datas
        }
        setitems([...items,newdata]);
        // console.log(datas);
        setdatas("");
        }
        
    };

    const deleteitem=(c)=>{
        const updateditem=items.filter((cur)=>{
            return c!==cur.id;
        })

        setitems(updateditem);
        

    }

    const edititem=(d)=>{
        // setdatas(d);
        const newitemdata=items.find((cur)=>{
            return cur.id===d;
        })

        // const newitems=items.filter((cur)=>{
        //     return cur.id!==d;
        // })
        setedititems(d);
        // setitems(newitems);
        setdatas(newitemdata.name);
        settoggle(true);
    }

    const removeall=()=>{
        setitems([]);
    }
    const search=()=>{
        if(datas!==""){
        const searchdata=items.filter((cur)=>{
            return cur.name.includes(datas);
        })
        setsearchitem(searchdata);
        setsearchtoggle(false);
    }
        // console.log(searchdata);
        // console.log(b.indexOf("apple"));
    }

    const home=()=>{
        setsearchtoggle(true);
    }
    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(items));
    },[items])
    return <>
            <div className="text-center">
                <p className="display-2 text-light">To Do List </p>
            </div>
            <div className="text-center">
                <button className="btn btn-danger btn-lg mb-3" onClick={()=>removeall()}>Remove All</button>
            </div>
                <div className="row justify-content-center">
                <div className="col-lg-8 col-sm-12">
                <div className="input-group">
                
                { toggle ? 
                <>
                <input type="text" className="form-control" value={datas} onChange={(e)=>setdatas(e.target.value)}/>
                <span className="input-group-text btn btn-outline-success" onClick={()=>additem()} ><i class="bi bi-pencil-square"></i></span>
                </>
                :
                <>
                <span className="input-group-text btn btn-outline-info" onClick={()=>home()} ><i class="bi bi-house"></i></span>
                <input type="text" className="form-control" value={datas} onChange={(e)=>setdatas(e.target.value)}/>
                <span className="input-group-text btn btn-outline-info" onClick={()=>additem()} ><i class="bi bi-plus-lg"></i></span>
                <span className="input-group-text btn btn-outline-info" onClick={()=>search()} ><i class="bi bi-search"></i></span></>
                }
                
                </div>
                </div>
                </div>
                
                <div className="mt-5">

            {   searchtoggle?
                
                items.map((curr)=>{
                return (
                    <div className=" row justify-content-center mt-1" key={curr.id}>
                    <div className="col-lg-8  col-sm-12">
                    <div className="input-group">
                    <span className="form-control">{curr.name}</span>
                    <span className="input-group-text btn btn-outline-success" onClick={()=>edititem(curr.id)}><i className="bi bi-pencil-square"></i></span>
                    <span className="input-group-text btn btn-outline-danger" onClick={()=>deleteitem(curr.id)}><i className="bi bi-trash"></i></span>
                    </div>
                    </div>
                    </div>
            

                );
            }):
            searchitem.map((curr)=>{
                return (
                    <div className=" row justify-content-center mt-1" key={curr.id}>
                    <div className="col-lg-8  col-sm-12">
                    <div className="input-group">
                    <span className="form-control">{curr.name}</span>
                    <span className="input-group-text btn btn-outline-success" onClick={()=>edititem(curr.id)}><i className="bi bi-pencil-square"></i></span>
                    <span className="input-group-text btn btn-outline-danger" onClick={()=>deleteitem(curr.id)}><i className="bi bi-trash"></i></span>
                    </div>
                    </div>
                    </div>
            

                );
            })

            
            
            }
            </div>
    </>
}

export default Todo;