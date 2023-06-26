import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
function Editmember()
{
    const navigate = useNavigate();
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [inputs, setInputs] = useState({
        name:'',
        age:'',
        address:''
    });
    
    const handleChange = (event) => {
        const name1 = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name1]: value}));
        console.log(name1);
        console.log(value);
    }
    const uploadMember= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', inputs.name);
        formData.append('age',inputs.age);
        formData.append('address', inputs.address);
        const response= await axios.post("http://127.0.0.1:8000/api/memberedit/"+id, formData
         );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        setTimeout(()=>{
            navigate('/memberlist');
        }, 2000);
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadMember();
 
   }
   
    useEffect(() => {
        getMember();
        // console.log(inputs.name)
    }, []);
   
    function getMember() {
        axios.get('http://127.0.0.1:8000/api/members/'+id).then(function(res) {
           //response.data.member
            setInputs({...inputs,name:res.data.name,age:res.data.age,address:res.data.address});
            // console.log( setInputs);
        });
    }
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Edit member </h5> 
                <p className="text-success"><b>{ message }</b></p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">member name </label>
                    <div className="col-sm-9">
                        <input type="text"  value={inputs.name} className="form-control" name="name" onChange={ handleChange}/>
                    </div>
                    </div>
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Age </label>
                    <div className="col-sm-9">
                        <input type="text"value={inputs.age} className="form-control" name ="age" onChange={handleChange} />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    <label  className="col-sm-3">address </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.address} className="form-control" name="address" onChange={ handleChange} />
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
export default Editmember;