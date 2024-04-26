import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Upload = () => {
    const [formData,setFormData]=useState([]);
    const [headings,setHeadings]=useState([]);
    const [selectedItem,setSelectedItem]=useState({});
    const [updatedData,setUpdatedData]=useState({})
    const [index,setIndex]=useState(null)

    const navigate=useNavigate();

    const handleFileUpload=(data, fileInfo) =>{ 
        console.dir(data);
    setFormData(data);
             const heading =Object.keys(data[0])

              console.log("heading",heading)
              setHeadings(heading);

    
    }
    const handleSubmit=async()=>{
        if(formData.length>0){
            console.log("formData",formData);
        // const response=await axios.post("http://localhost/api/v1/upload",{
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:{
        //         ...formData
        //     }
        // });
        const response =await axios.post("http://localhost:8080/api/v1/upload",formData);
        const data=response.data;
        console.log("data",data)
    }else{
        alert("CSV file must contain min 1 entry")
    }
    }

    const handleUpdate=(item,index)=>{
        setSelectedItem(item);
        setIndex(index)
        console.log(selectedItem);
    }

    const handleDataUpdate=(e)=>{
e.preventDefault;
        const newFromData=[...formData];
        newFromData[index]=selectedItem;
        setFormData(newFromData);
    }

    const handleDelete=(item,index)=>{
         const newFromData=[...formData];
         newFromData.splice(index,1);
         setFormData(newFromData)
    }

    const handleChange =(e)=>{
        const {name,value}=e.target;
         setSelectedItem({
            ...selectedItem,
           [name]:value
         })
    }


    return (
        <><div>
            <button onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>
            <div>Upload the CSV file</div>
            <CSVReader
                // accept={".csv, text/csv"}
                parserOptions={{ header: true }}
                onFileLoaded={handleFileUpload}
            />
            <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <table border={"2"}>
                    <thead >
                 <tr>
                        {headings && (
                           headings.map((item,index)=>{
                            return(
                                <th key={index}>{item}</th>
                            )
                           }) 
                        
                        )
                        }   
                           <th>Delete</th>
                           <th>Update</th> 
                        </tr> 
                      
                     
                    </thead>
                    <tbody>
                        { formData && 
                            formData.map((item,index)=>{
                                return (
                                    <tr>
                            <td>{item?.id}</td>
                            <td>{item?.name}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.email}</td>
                            <td>{item?.credit}</td>
                           <td><button onClick={ handleDelete}>Delete</button></td>
                           <td><button onClick={()=>handleUpdate(item,index)}>Update</button></td>
                        </tr>
                                )
                            })
                        }
                   
                      
                    </tbody>
                </table>
            </div>

            <div>
                {selectedItem && 
                <form>
                    <div>
                        <label>Id</label>
                        <input name='id' value={selectedItem.id} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input name='name' value={selectedItem.name}  onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input name='name' value={selectedItem.phone}  onChange={handleChange}/>
                    </div>
                    <div>
                        <label>email</label>
                        <input name='email' value={selectedItem.email}  onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input name='phone' value={selectedItem.phone}  onChange={handleChange}/>
                    </div>
                    <div>
                        <label>credit</label>
                        <input name='credit' value={selectedItem.credit}  onChange={handleChange}/>
                    </div>
                    <button onClick={handleDataUpdate}>Update</button>

                </form>
}
            </div>
        </>

    )
}

export default Upload