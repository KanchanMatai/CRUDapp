import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    bloodgroup: '',
    city: '',
    state: '',
    fathersname:'',
    mothersname:'',
    numberofsiblings:'',
  });
  
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        bloodgroup: '',
        city: '',
        state: '',
        fathersname:'',
        mothersname:'',
        numberofsiblings:'',
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        bloodgroup: '',
        city: '',
        state: '',
        fathersname:'',
        mothersname:'',
        numberofsiblings:'',
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="Container">
    <div className="row form">
    <div className ="col-9">
      <h1 className ="mt-3" style={{color:'white', textAlign:'center',fontSize:'30px'}}>CRUD App</h1>
      <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="name ms-5" style ={{textAlign:'center', color:'white'}}>Name</label><br></br>
            <input className="field" name="name" value={inputs.name} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="email ms-5" style ={{textAlign:'center', color:'white'}}>Email</label><br></br>
            <input className="field" name="email" value={inputs.email} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="bloodgroup ms-5" style ={{textAlign:'center', color:'white'}}>Blood Group</label><br></br>
            <input className="field" name="bloodgroup" value={inputs.bloodgroup} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="city ms-5" style ={{textAlign:'center', color:'white'}}>City</label><br></br>
            <input className="field" name="city" value={inputs.city} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="state ms-5" style ={{textAlign:'center', color:'white'}}>State</label><br></br>
            <input className="field" name="state" value={inputs.state} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="fathersname ms-5" style ={{textAlign:'center', color:'white'}}>Father's Name</label><br></br>
            <input className="field" name="fathersname" value={inputs.fathersname} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="motherssname ms-5" style ={{textAlign:'center', color:'white'}}>Mother's Name</label><br></br>
            <input className="field" name="mothersname" value={inputs.mothersname} onChange={handleChange} />
          </div><br></br>
          <div className="flex flex-col">
            <label className="numberofsiblings ms-5" style ={{textAlign:'center', color:'white'}}>Number of siblings</label><br></br>
            <input className="field" name="numberofsiblings" value={inputs.numberofsiblings} onChange={handleChange} />
          </div><br></br>
          <button type="submit" className="mybtn" style ={{color:'white'}}>
            {editClick ? "update" : "Add"}
          </button>
        </form><br></br>
    
      <div>

          <table className="table"style={{color:'white'}}>
  <thead>
    <tr>
      <th scope="col" className="ms-3">Name</th>
      <th scope="col" className="ms-3">Email</th>
      <th scope="col" className="ms-3">Blood Group</th>
      <th scope="col" className="ms-3">City</th>
      <th scope="col" className="ms-3">State</th>
      <th scope="col" className="ms-3">Father's Name</th>
      <th scope="col" className="ms-3">Mother's Name</th>
      <th scope="col" className="ms-3">Number of siblings</th>
      <th scope="col" className="ms-3">Action</th>
    </tr>
  </thead>
          <tbody className="text-white" style ={{color:'white'}}>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.bloodgroup}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.fathersname}</td>
                <td>{item.mothersname}</td>
                <td >{item.numberofsiblings}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;