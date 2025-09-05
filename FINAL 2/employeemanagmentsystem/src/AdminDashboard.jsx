// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// export default function AdminDashboard() {
//   const [isshowadd, setIsShowAdd] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contactno, setContactno] = useState('');
//   const [role, setRole] = useState('');
//   const [salary, setSalary] = useState(0.0);
//   const [img, setImg] = useState('');
//   const [department, setDepartment] = useState('');
//   const [users, setUsers] = useState([]);
//   const [updateform,setUpdateForm]=useState(false);






//   const handleImg = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const fullPath = URL.createObjectURL(file); // For preview only
//       setImg(fullPath);
//     }
//   };

//   const addemp = async () => {
//     const newemp = { name, email, contactno, role, salary, department, img };
//     try {
//       const response = await axios.post("http://localhost:8080/saveemp", newemp);
//       if (response.data != null) {
//         alert("Employee added");
//         fetchEmpData(); // refresh list
//         clearForm();
//       }
//     } catch (error) {
//       alert("Error while adding employee");
//       console.error(error);
//     }
//   };

//   const fetchEmpData = () => {
//     axios.get("http://localhost:8080/saveemp/findallemp")
//       .then((response) => {
//         setUsers(response.data);
//         console.log(users)
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//       });
//   };

//   useEffect(() => {
//     fetchEmpData();
//   }, []);

//   const deleteemp=(id)=>{
//     alert(id);
//     axios.delete(`ht`)
//     .then((response)=>{
//       if(response.data){
//         alert("Employee record deleted suceddfuly");
//         setUsers(users.filter((user)=>user.eid!=id))
//       }
//     })
//     .catch((error)=>{
//       alert("Error while deleting the record")
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addemp();
//   };

//   const clearForm = () => {
//     setName('');
//     setEmail('');
//     setContactno('');
//     setRole('');
//     setSalary(0.0);
//     setImg('');
//     setDepartment('');
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center text-danger mb-4">Admin Dashboard</h1>

//       <button className="btn btn-warning mb-3" onClick={() => setIsShowAdd(!isshowadd)}>
//         {isshowadd ? "Hide Form" : "Add Employee"}
//       </button>

//       {isshowadd && (
//         <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
//           <div className="mb-3">
//             <label>Name:</label>
//             <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Email:</label>
//             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Contact No:</label>
//             <input type="text" className="form-control" maxLength="10" pattern="^[0-9]{10}$" value={contactno} onChange={(e) => setContactno(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Department:</label>
//             <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Salary:</label>
//             <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(parseFloat(e.target.value))} required />
//           </div>

//           <div className="mb-3">
//             <label>Role:</label>
//             <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Upload Profile Picture:</label>
//             <input type="file" className="form-control" accept="image/*" onChange={handleImg} />
//             {img && <img src={img} alt="Preview" className="mt-2" width="100" />}
//           </div>

//           <button type="submit" className="btn btn-success">Submit</button>
//         </form>
//       )}

//       <hr />
//       <h3>Employee List</h3>
//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact No</th>
//             <th>Department</th>
//             <th>Role</th>
//             <th>Salary</th>
//             <th>Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.contactno}</td>
//               <td>{user.department}</td>
//               <td>{user.role}</td>
//               <td>{user.salary}</td>
//               <td>{user.img && <img src={user.img} width="50" alt="emp" />}</td>
//             </tr>
//           )) : <tr><td colSpan="7" className="text-center">No Employees Found</td></tr>}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// <div className="container">
//   <div className='row'>
//     {
//       users.map((u)=>(
//         <div className='col-4'>
//           <div class="card" style={{"width" : "18rem"}}>
//             <img src={u.img} class="card-img-top" alt='...' />
//             <div class="card-body">
//               <h5 class="card-title">{u.name}</h5>
//              <p class="crd-text">
//               <p>Email:<strong>{u.email}</strong></p>
//               <p>Department: <strong>{u.department}</strong></p>
//               <p>Contact no: <strong>{u.contactno}</strong></p>
//               <p>Role : <strong>{u.role}</strong></p>
//              </p>
//             </div>
//             <button className='btn btn-danger' onClick={()=>{deleteemp.eid}}>Delete</button>
//             <button></button>

//           </div>

//         </div>
//       ))
//     }
//   </div>
// </div>





// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// export default function AdminDashboard() {
//   const [isshowadd, setIsShowAdd] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contactno, setContactno] = useState('');
//   const [role, setRole] = useState('');
//   const [salary, setSalary] = useState(0.0);
//   const [img, setImg] = useState('');
//   const [department, setDepartment] = useState('');
//   const [users, setUsers] = useState([]);

//   const handleImg = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setImg(`/img/${file.name}`); // assuming images are saved here
//     }
//   };

//   const addemp = async () => {
//     const newemp = { name, email, contactno, role, salary, department, img };
//     try {
//       const response = await axios.post("http://localhost:8080/saveemp", newemp);
//       if (response.data != null) {
//         alert("Employee added");
//         fetchEmpData();
//         clearForm();
//       }
//     } catch (error) {
//       alert("Error while adding employee");
//       console.error(error);
//     }
//   };

//   const fetchEmpData = () => {
//     axios.get("http://localhost:8080/saveemp/findallemp")
//       .then((response) => {
//         setUsers(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//       });
//   };

//   const deleteemp = (id) => {
//     axios.delete(`http://localhost:8080/saveemp/delete/${id}`)
//       .then(() => {
//         alert("Employee record deleted successfully");
//         setUsers(users.filter((user) => user.eid !== id));
//       })
//       .catch((error) => {
//         alert("Error while deleting the record");
//         console.error(error);
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addemp();
//   };

//   const clearForm = () => {
//     setName('');
//     setEmail('');
//     setContactno('');
//     setRole('');
//     setSalary(0.0);
//     setImg('');
//     setDepartment('');
//   };

//   useEffect(() => {
//     fetchEmpData();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center text-danger mb-4">Admin Dashboard</h1>

//       <button className="btn btn-warning mb-3" onClick={() => setIsShowAdd(!isshowadd)}>
//         {isshowadd ? "Hide Form" : "Add Employee"}
//       </button>

//       {isshowadd && (
//         <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
//           <div className="mb-3">
//             <label>Name:</label>
//             <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Email:</label>
//             <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Contact No:</label>
//             <input type="text" className="form-control" maxLength="10" pattern="^[0-9]{10}$" value={contactno} onChange={(e) => setContactno(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Department:</label>
//             <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Salary:</label>
//             <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(parseFloat(e.target.value))} required />
//           </div>

//           <div className="mb-3">
//             <label>Role:</label>
//             <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required />
//           </div>

//           <div className="mb-3">
//             <label>Upload Profile Picture:</label>
//             <input type="file" className="form-control" accept="image/*" onChange={handleImg} />
//             {img && <img src={img} alt="Preview" className="mt-2" width="100" />}
//           </div>

//           <button type="submit" className="btn btn-success">Submit</button>
//         </form>
//       )}

//       <hr />
//       <h3>Employee Table</h3>
//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact No</th>
//             <th>Department</th>
//             <th>Role</th>
//             <th>Salary</th>
//             <th>Profile</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? users.map((user) => (
//             <tr key={user.eid}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.contactno}</td>
//               <td>{user.department}</td>
//               <td>{user.role}</td>
//               <td>{user.salary}</td>
//               <td>{user.img && <img src={user.img} width="50" alt="emp" />}</td>
//               <td><button className="btn btn-danger" onClick={() => deleteemp(user.eid)}>Delete</button></td>
//             </tr>
//           )) : <tr><td colSpan="8" className="text-center">No Employees Found</td></tr>}
//         </tbody>
//       </table>

//       <h3 className="mt-5">Employee Cards</h3>
//       <div className="row">
//         {users.map((u) => (
//           <div className="col-md-4 mb-4" key={u.eid}>
//             <div className="card" style={{ width: "18rem" }}>
//               <img src={u.img} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{u.name}</h5>
//                 <p className="card-text">
//                   <strong>Email:</strong> {u.email}<br />
//                   <strong>Department:</strong> {u.department}<br />
//                   <strong>Contact:</strong> {u.contactno}<br />
//                   <strong>Role:</strong> {u.role}
//                 </p>
//                 <button className="btn btn-danger" onClick={() => deleteemp(u.eid)}>Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import Navbar from './Navbar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [isshowadd, setIsShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState(0.0);
  const [department, setDepartment] = useState('');
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState('');

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const addemp = async () => {
    let imagePath = '';
    if (file) {
      imagePath = `/img/${file.name}`; // server must move the uploaded file to /img/
    }

    const newemp = { name, email, contactno, role, salary, department, img: imagePath };

    try {
      const response = await axios.post("http://localhost:8080/api/employees/add", newemp);
      if (response.data) {
        alert("Employee added");
        fetchEmpData();
        clearForm();
      }
    } catch (error) {
      alert("Error while adding employee");
      console.error("Add Employee Error:", error);
    }
  };

  const fetchEmpData = () => {
    axios.get("	http://localhost:8080/api/employees/all")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Fetch Error:", error));
  };

  const deleteemp = (id) => {
    axios.delete(`http://localhost:8080/api/employees/delete/${id}`)
      .then(() => {
        alert("Employee deleted");
        setUsers(users.filter(user => user.eid !== id));
      })
      .catch((error) => {
        alert("Error while deleting");
        console.error("Delete Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addemp();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setContactno('');
    setRole('');
    setSalary(0.0);
    setDepartment('');
    setFile(null);
    setPreviewImg('');
  };

  useEffect(() => {
    fetchEmpData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-danger mb-4">Admin Dashboard</h1>
   
 
      <button className="btn btn-warning mb-3" onClick={() => setIsShowAdd(!isshowadd)}>
        {isshowadd ? "Hide Form" : "Add Employee"}
      </button>

      {isshowadd && (
        <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
          <div className="mb-3">
            <label>Name:</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label>Contact No:</label>
            <input type="text" className="form-control" maxLength="10" pattern="^[0-9]{10}$" value={contactno} onChange={(e) => setContactno(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label>Department:</label>
            <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label>Salary:</label>
            <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(parseFloat(e.target.value) || 0)} required />
          </div>

          <div className="mb-3">
            <label>Role:</label>
            <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label>Upload Profile Picture:</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImg} />
            {previewImg && <img src={previewImg} alt="Preview" className="mt-2" width="100" />}
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      )}

      <hr />
      <h3>Employee Table</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user) => (
            <tr key={user.eid}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactno}</td>
              <td>{user.department}</td>
              <td>{user.role}</td>
              <td>{user.salary}</td>
              <td>{user.img && <img src={user.img} width="50" alt="emp" onError={(e) => e.target.style.display = 'none'} />}</td>
              <td><button className="btn btn-danger" onClick={() => deleteemp(user.eid)}>Delete</button></td>
            </tr>
          )) : (
            <tr><td colSpan="8" className="text-center">No Employees Found</td></tr>
          )}
        </tbody>
      </table>

      <h3 className="mt-5">Employee Cards</h3>
      <div className="row">
        {users.map((u) => (
          <div className="col-md-4 mb-4" key={u.eid}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={u.img} className="card-img-top" alt="emp" onError={(e) => e.target.style.display = 'none'} />
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {u.email}<br />
                  <strong>Department:</strong> {u.department}<br />
                  <strong>Contact:</strong> {u.contactno}<br />
                  <strong>Role:</strong> {u.role}
                </p>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-danger'>Delete</button>
                </div>
                {/* <button className="btn btn-danger" onClick={() => deleteemp(u.eid)}>Delete</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
