// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminDashboard from './AdminDashboard'; // make sure path is correct
// import SearchinBy from './SearchinBy';
// import Navbar from './Navbar';
// import Home from './Home';
// import { Routes , Route} from 'react-router-dom';
// import ContactUs from './ContactUs';
// import Service from './Service';
// import Aboutus from './Aboutus';
// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">Employee Manager</a>
//         </div>
//       </nav>

     
//       <div className="container mt-4">
//         <AdminDashboard />
//         <SearchinBy/>
//         <Routes>
//         <Route path ="/home" element={<Home></Home>}></Route>
//         <Route path="/ContactUs" element={<ContactUs> </ContactUs>}></Route>
//         <Route path="/Aboutus" element={<Aboutus></Aboutus>}></Route>
//         <Route path="/Service" element={<Service></Service>}></Route>
//         </Routes>
        
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import AdminDashboard from './AdminDashboard';
// import SearchinBy from './SearchinBy';
// import Home from './Home';
// import ContactUs from './ContactUs';
// import Service from './Service';
// import Aboutus from './Aboutus';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/contactus" element={<ContactUs />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/service" element={<Service />} />

//           {/* Optional: Dashboard Route */}
//           <Route path="/admin" element={
//             <>
//               <AdminDashboard />
//               <SearchinBy />
//             </>
//           } />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './EmployeeDashboard';
import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';
import SearchinBy from './SearchinBy';
import Home from './Home';
import ContactUs from './ContactUs';
import Service from './Service';
import Aboutus from './Aboutus';
import Login from './login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
  <Route path="/register-employee" element={<AdminDashboard />} />
  <Route path="/employee-dashboard" element={<EmployeeDashboard />} /> {/* ✅ Add this */}

    </Routes>
  </BrowserRouter>
  );
}

export default App;
