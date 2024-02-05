// // import React from 'react'
// // import Layout from '../components/layout/layout.js'
// // import {useAuth} from "../context/auth.js"
// // import Practice from "../Practice.js";
// // // import MyCarousel from "../MyCarousel.js";
// // import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// //
// // const HomePage = () => {
// //   const [auth,setAuth]=useAuth();
// //   return (
// //     <Layout>
// //         {/*<h1>Home Page</h1>*/}
// //         {/*<pre>{JSON.stringify(auth,null,4)}</pre>*/}
// //       {/*<div className="mb-5"><center><h1 className="heading">All Products</h1></center></div>*/}
// //         <br/>
// //         <br/>
// //         <br/>
// //         <br/>
// //         <br/>
// //         <br/>
// //        {/*<MyCarousel/>*/}
// //
// //
// //         <Practice/>
// //     </Layout>
// //   )
// // }
// //
// //
// // export default HomePage
//
//
// import React, { useState } from 'react';
// import Layout from '../components/layout/layout.js';
// import { useAuth } from "../context/auth.js";
// import Practice from "../Practice.js";
// import Header from '../components/layout/header.js';
//
// const HomePage = () => {
//     const [auth, setAuth] = useAuth();
//     const [searchTerm, setSearchTerm] = useState(''); // State to store search term
//
//     // Callback function to handle search term change
//     const handleSearch = (term) => {
//         setSearchTerm(term);
//     };
//
//     return (
//         <Layout>
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <Header onSearch={handleSearch} /> {/* Pass onSearch prop */}
//             <Practice searchTerm={searchTerm} />
//         </Layout>
//     );
// }
//
// export default HomePage;
// import React, { useState } from 'react';
// import Layout from '../components/layout/layout.js';
// import { useAuth } from "../context/auth.js";
// import Practice from "../Practice.js";
// import Header from '../components/layout/header.js';
//
// const HomePage = () => {
//     const [auth, setAuth] = useAuth();
//     const [searchTerm, setSearchTerm] = useState('');
//
//     // Callback function to handle search term change
//     const handleSearch = (term) => {
//         setSearchTerm(term);
//     };
//
//     return (
//         <Layout>
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <Header onSearch={handleSearch} /> {/* Pass onSearch prop */}
//             <Practice searchTerm={searchTerm} />
//         </Layout>
//     );
// }
//
// export default HomePage;
// HomePage.js
// HomePage.js
import React, { useState } from 'react';
import Layout from '../components/layout/layout.js';
import { useAuth } from "../context/auth.js";
import Header from '../components/layout/header.js';
import Practice from "../Practice.js";
const HomePage = () => {
    const [auth, setAuth] = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    // Callback function to handle search term change
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (
        <Layout includeSearch={true}>
            <Header onSearch={handleSearch} />
            <br />
            <br />
            <br />
            <Practice searchTerm={searchTerm} />
        </Layout>
    );
}

export default HomePage;
