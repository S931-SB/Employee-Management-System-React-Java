// import axios from 'axios';
// import React, { Component } from 'react'
// import { useState } from 'react'
// export default function SearchinBy () {
// let [searchResult,setsearchResult]=useState([]);
// let [name,setName]=useState(' ');
// let [role,etRole]=useState(' ');
// let searchbyname=()=>{
//     axios.get(``)
//     .then((response)=>{
//         searchResult(response.data);
//         console.log(searchResult);
//     })
//     .catch((error)=>{alert(error)});
// }

// let searchbyrole=()=>{
//     axios
//     .then((response)=>{
//         setsearchResult(response.data);
//     })
//     .catch((error)=>{alert(error)});
// }

//     return (
//       <div>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-4'>
//         <input type="text" placeholder='search by name' onChange={(e)=>{setName(e.target.value)}} />
//         <button onClick={searchbyname}>Search</button>
//   </div>
 
//             <div className='col-4'>
//         <input type="text" placeholder='search by name' onChange={(e)=>{setName(e.target.value)}} />
//         <button onClick={searchbyrole}>Search</button>
//     </div>
// </div>
// </div>
// </div>
//     )
//   }



import axios from 'axios';
import React, { useState } from 'react';

export default function SearchinBy() {
  let [searchResult, setsearchResult] = useState([]);
  let [name, setName] = useState('');
  let [role, setRole] = useState('');

  let searchbyname = () => {
    axios.get(`http://localhost:8080/api/employees/name?name=${name}`)
      .then((response) => {
        setsearchResult(response.data);
        console.log(response.data);
      })
      .catch((error) => { alert(error) });
  };

  let searchbyrole = () => {
    axios.get(`http://localhost:8080/api/employees/role?role=${role}`)
      .then((response) => {
        setsearchResult(response.data);
        console.log(response.data);
      })
      .catch((error) => { alert(error) });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <input
            type="text"
            placeholder='Search by name'
            onChange={(e) => { setName(e.target.value) }}
          />
          <button onClick={searchbyname}>Search by Name</button>
        </div>

        <div className='col-4'>
          <input
            type="text"
            placeholder='Search by role'
            onChange={(e) => { setRole(e.target.value) }}
          />
          <button onClick={searchbyrole}>Search by Role</button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h4>Search Results</h4>
          <ul>
            {searchResult.map((emp) => (
              <li key={emp.id}>{emp.name} - {emp.role} - {emp.department}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
