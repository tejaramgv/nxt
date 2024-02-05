// import React from 'react'
// import Header from './header.js'
// import Footer from './footer.js'
// import {Toaster} from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
//
//
// const Layout = (props) => {
//   return (
//     <div>
//         <Header />
//       <main style={{minHeight:'75vh'}}>
//
//         {props.children}</main>
//         <Toaster/>
//
//       <Footer/>
//     </div>
//   )
// }
//
// export default Layout
// import React from 'react';
// import Header from './header.js';
// import Footer from './footer.js';
// import { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
//
// const Layout = (props) => {
//     const { includeHeader } = props; // Add includeHeader prop
//
//     return (
//         <div>
//             {includeHeader && <Header />} {/* Conditional rendering for the Header */}
//             <main style={{ minHeight: '75vh' }}>
//                 {props.children}
//             </main>
//             <Toaster />
//             <Footer />
//         </div>
//     );
// }
//
// export default Layout;
// Layout.js
// import React from 'react';
// import Header from './header.js';
// import Footer from './footer.js';
// import { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

// const Layout = (props) => {
//     const { includeSearch } = props;

//     return (
//         <div>
//             {includeSearch || <Header />}
//             <main style={{ minHeight: '75vh' }}>
//                 {props.children}
//             </main>
//             <Toaster />
//             <Footer />
//         </div>
//     );
// }    

// export default Layout;
import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ includeSearch, children }) => {
  return (
    <div>
      <Header includeSearch={includeSearch} />
      <main style={{ minHeight: '75vh' }}>
        {children}
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;

