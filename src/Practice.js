// // import React from 'react';
// // import {useState,useEffect} from 'react';
// //
// // import ProductCard from './ProductCard.js';
// //
// // const Practice = () => {
// //     const [productlist,updateProduct]=useState([]);
// //     useEffect(()=>{getProducts()},[])
// //  async function getProducts(){
// //     let res= await fetch("http://localhost:3000/products");
// //     let products=await res.json();
// //     updateProduct(products);
// //     console.log(products);
// //
// //  }
// //  if (productlist.length===0){
// //   return (
// //     <div>
// //         <br/> <br/>  <br/>  <br/> <br/> <br/> <br/> <br/> <br/>
// //
// //         <div className="text-center">
// //             <div className="spinner-border" role="status">
// //                 <span className="sr-only">Loading...</span>
// //             </div>
// //         </div>
// //         {/*<Spinner/>*/}
// //
// //     </div>
// //
// //   )
// // }
// // return(   <>
// //
// //         <hr/>
// //         <div><center><h1 className="heading">All Products</h1></center></div>
// //
// //         <hr/>
// //
// //
// //         <div className="container">
// //         <div className="row">
// //             {productlist.map((product, index) => (
// //                 <div className="col-5 col-md-3" key={index}>
// //                     <ProductCard {...product} />
// //                 </div>
// //             ))}
// //         </div>
// //     </div>
// //     </>
// // )
// // }
// //
// // export default Practice;
// // Practice.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';
//
// const Practice = ({ searchTerm }) => {
//     const [productlist, updateProduct] = useState([]);
//
//     useEffect(() => {
//         getProducts();
//     }, []);
//
//     async function getProducts() {
//         let res = await fetch("http://localhost:3000");
//         let products = await res.json();
//         updateProduct(products);
//         console.log(products);
//     }
//
//     const filteredProducts = productlist.filter((product) =>
//         product.price.toLowerCase().includes(searchTerm.toLowerCase()) || product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//
//     if (productlist.length === 0) {
//         return (
//             <div className="text-center">
//                              <div className="spinner-border" role="status">
//                                  <span className="sr-only">Loading...</span>
//                        </div>
//             </div>
//         );
//     }
//     else if (filteredProducts.length === 0) {
//         return (
//             <div className="text-center mt-5">
//                 <i className="bi bi-info-circle" style={{ fontSize: '48px' }}></i>
//                 <h2>Oops! No products</h2>
//             </div>
//         );
//     }
//
//     return (
//         <>
//             <hr />
//             <div>
//                 <center><h1 className="heading">All Products</h1></center>
//             </div>
//             <hr />
//             <div className="container">
//                 <div className="row">
//                     {filteredProducts.map((product, index) => (
//                         <div className="col-5 col-md-3" key={index}>
//                             <ProductCard {...product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default Practice;
//
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';
//
// const Practice = ({ searchTerm }) => {
//     const [productList, setProductList] = useState([]);
//     const [aquaList, setAquaList] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//
//     useEffect(() => {
//         getProducts();
//     }, []);
//
//     async function getProducts() {
//         try {
//             let res = await fetch("http://localhost:3000/products");
//             let products = await res.json();
//             setProductList(products);
//
//             // Fetch 'aqua' array
//             res = await fetch("http://localhost:3000/aqua");
//             let aquaProducts = await res.json();
//             setAquaList(aquaProducts);
//
//             // Combine both arrays
//             const combinedProducts = [...products, ...aquaProducts];
//             setFilteredProducts(combinedProducts);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     }
//
//     useEffect(() => {
//         if (searchTerm) {
//             const filtered = filteredProducts.filter((product) =>
//                 product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 product.description.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setFilteredProducts(filtered);
//         } else {
//             setFilteredProducts([...productList, ...aquaList]);
//         }
//     }, [searchTerm, productList, aquaList, filteredProducts]);
//
//     if (productList.length === 0 || aquaList.length === 0) {
//         return (
//             <div className="text-center">
//                 <div className="spinner-border" role="status">
//                     <span className="sr-only">Loading...</span>
//                 </div>
//             </div>
//         );
//     }
//
//     if (filteredProducts.length === 0) {
//         return (
//             <div className="text-center mt-5">
//                 <i className="bi bi-info-circle" style={{ fontSize: '48px' }}></i>
//                 <h2>Oops! No products found</h2>
//             </div>
//         );
//     }
//
//     return (
//         <>
//             <hr />
//             <div>
//                 <center><h1 className="heading">All Products</h1></center>
//             </div>
//             <hr />
//             <div className="container">
//                 <div className="row">
//                     {filteredProducts.map((product, index) => (
//                         <div className="col-5 col-md-3" key={index}>
//                             <ProductCard {...product} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default Practice;

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.js';

const Practice = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [aqua, setAqua] = useState([]);
    const [seri, setSeri] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [combinedProducts, setCombinedProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const productsResponse = await fetch("http://localhost:3000/AgriProducts");
            const aquaResponse = await fetch("http://localhost:3000/AquaProducts");
            const seriResponse = await fetch("http://localhost:3000/SeriProducts");

            const productsData = await productsResponse.json();
            const aquaData = await aquaResponse.json();
            const seriData = await seriResponse.json();

            setProducts(productsData);
            setAqua(aquaData);
            setSeri(seriData)

    
            const combined = [...productsData, ...aquaData, ...seriData];
            setCombinedProducts(combined);
            setFilteredProducts(combined);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (searchTerm) {
            // Filter products based on search term from the combined products array
            const filtered = combinedProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            // Reset filtered products when no search term is entered
            setFilteredProducts(combinedProducts);
        }
    }, [searchTerm, combinedProducts]);

    if (products.length === 0 || aqua.length === 0 || seri.length===0) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center mt-5">
                <i className="bi bi-info-circle" style={{ fontSize: '48px' }}></i>
                <h2>Oops! No products found</h2>
            </div>
        );
    }

    return (
        <>
            <hr />
            <div>
                <center><h1 className="heading">All Products</h1></center>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    {filteredProducts.map((product, index) => (
                        <div className="col-5 col-md-3" key={index}>
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Practice;

