// import React from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';

// export default function Navbar() {
//   const navigate = useNavigate();  // useNavigate hook works because App is wrapped with BrowserRouter

//   const logout = () => {
//     localStorage.removeItem("user");
//     navigate("/");  // Now navigate works
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <NavLink className="navbar-brand" to="/home">Employee Manager</NavLink>
//       <button className="navbar-toggler" type="button" data-toggle="collapse"
//         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//         aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/home">Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/service">Service</NavLink>
//           </li>
//         </ul>

//         <div className="d-flex align-items-center">
//           <button className="btn btn-danger ml-3" onClick={logout}>Logout</button>
//         </div>

//         <form className="form-inline my-2 my-lg-0 ml-3">
//           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//       </div>
//     </nav>
//   );
// }
