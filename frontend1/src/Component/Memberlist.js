import React, { useState, useEffect } from "react";
 
import { Link } from "react-router-dom";
import axios from "axios";
 import "../style/table.css";
function Memberlist()
{  
    const[member, setMember]= useState([]);
     
    useEffect( ()=>{
        const getMember= ()=>{
            fetch("http://127.0.0.1:8000/api/memberlist")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                //console.log(response.members)
                setMember(response.members)
            })
            .catch(error=>{ console.log(error)});
        }
        getMember();
    },[]);
  
   
    const deleteMember = (id) => {
        axios.delete('http://127.0.0.1:8000/api/memberdelete/'+id).then(function(response){
            //console.log(response.data);
            alert("Successfully Deleted id =  "+id);
        });
    }
     
    return(
        <React.Fragment>
            <div className="container  rowContainer container_overflow">
                <div className="row  ">
                    <div className="col-12">
                        <h5 className="mb-4">member List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered table-responsive ">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Member Name</th>
                                <th scope="col"> Member Age</th>
                                <th scope="col">member address</th>
                                <th scope="col" width="200">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        member.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{pdata.id } </td>
                                            <td>{pdata.name } </td>
                                            <td>{pdata.age } </td>
                                            <td>{pdata.address } </td><td>
                                            {/* <td><img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" height={50} width={90} /></td>
                                            <td> */}
                                            {/* <button onClick={() => handleButtonClick('/editmember/${pdata.id}/')} className="btn btn-success mx-2">edit</button> */}
                                            <Link to={`/editmember/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                                <button onClick={() => deleteMember(pdata.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Memberlist;