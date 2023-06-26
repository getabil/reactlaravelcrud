import React, { useState } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function Addmember()
{  
    const navigate = useNavigate();
     
    const[txtname, setName]= useState('');
    const[txtage, setAge]= useState('');
    const[txtaddress, setAddress]= useState('');
    const[message, setMessage]= useState('');
 
    const uploadmember= async()=>{
       // console.log(fileimage)
        const formData= new FormData();
        formData.append('name', txtname);
        formData.append('age',txtage);
        formData.append('address', txtaddress);
        const responce= await axios.post("http://127.0.0.1:8000/api/create", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
           // console.log(responce)
            setMessage(responce.message); //"message": "member successfully created."
            setTimeout(()=>{
                navigate('/memberlist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadmember();
 
   }
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Add Member </h5> 
                <p className="text-warning">{ message}</p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Member Name </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setName(e.target.value)}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Age </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e)=>setAge(e.target.value)}  />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">member Address</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default Addmember;