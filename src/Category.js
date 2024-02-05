// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';

// const Category = ({ category, searchTerm }) => {
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   async function fetchData() {
//     try {
//       // Fetch data based on the selected category
//       const response = await fetch(`http://localhost:3000/${category}`);
//       const categoryData = await response.json();

//       setCategoryProducts(categoryData);
//     } catch (error) {
//       console.error(`Error fetching ${category} data:`, error);
//     }
//   }

//   useEffect(() => {
//     // Filter products based on the search term
//     const filtered = categoryProducts.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setCategoryProducts(filtered);
//   }, [searchTerm, categoryProducts]);

//   if (categoryProducts.length === 0) {
//     return (
//       <div className="text-center mt-5">
//         <i className="bi bi-info-circle" style={{ fontSize: '48px' }}></i>
//         <h2>Oops! No products found in {category}</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <hr />
//       <div>
//         <center><h1 className="heading">{category} Products</h1></center>
//       </div>
//       <hr />
//       <div className="container">
//         <div className="row">
//           {categoryProducts.map((product, index) => (
//             <div className="col-5 col-md-3" key={index}>
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Category;
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';
// import Layout from './components/layout/layout.js';

// const Category= () => {
//   const [category, setCategory] = useState('AgriProducts');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   const categories = ['AgriProducts', 'SeriProducts', 'AquaProducts']; // Add your categories here

//   useEffect(() => {
//     fetchData();
//   }, [category, searchTerm]);

//   async function fetchData() {
//     try {
//       // Fetch data based on the selected category
//       const response = await fetch(`http://localhost:3000/${category}`);
//       const categoryData = await response.json();

//       // Filter products based on the search term
//       const filtered = categoryData.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       setCategoryProducts(filtered);
//     } catch (error) {
//       console.error(`Error fetching ${category} data:`, error);
//     }
//   }

//   const handleCategorySelection = (selectedCategory) => {
//     setCategory(selectedCategory);
//   }

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   if (categoryProducts.length === 0) {
//     return (
//       <Layout>
//       <br/><br/><br/>
//       <div className="text-center mt-5">
//        <div>
//         <center>
//           {/* Include the CategoryButtons component in the CategoryPage */}
//           <CategoryButtons categories={categories} onSelectCategory={handleCategorySelection} />
//         </center>
//       </div>

//         <i className="bi bi-info-circle" style={{ fontSize: '48px' }}></i>
//         <h2>Oops! No products found in {category}</h2>
//       </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//     <br/><br/><br/>
//     <>
//       <div>
//         <center>
//           {/* Include the CategoryButtons component in the CategoryPage */}
//           <CategoryButtons categories={categories} onSelectCategory={handleCategorySelection} />
//         </center>
//       </div>
//       <hr />
//       <div>
//         <center><h1 className="heading">{category}</h1></center>
//         {/* Add a search input for filtering products */}
//         <input
//           type="text"
//           placeholder="Search products"
//           value={searchTerm}
//           onChange={handleSearchTermChange}
//         />
//       </div>
//       <hr />
//       <div className="container">
//         <div className="row">
//           {categoryProducts.map((product, index) => (
//             <div className="col-5 col-md-3" key={index}>
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//     </Layout>
//   );
// }

// const CategoryButtons = ({ categories, onSelectCategory }) => {
//   return (
//     <div className="category-buttons">
//       {categories.map((category, index) => (
//         <button key={index} onClick={() => onSelectCategory(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Category;
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';
// import Layout from './components/layout/layout.js';

// const Category = () => {
//   const [category, setCategory] = useState('AgriProducts');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   const categories = ['AgriProducts', 'SeriProducts', 'AquaProducts']; // Add your categories here

//   useEffect(() => {
//     fetchData();
//   }, [category, searchTerm]);

//   async function fetchData() {
//     try {
//       // Fetch data based on the selected category
//       const response = await fetch(`http://localhost:3000/${category}`);
//       const categoryData = await response.json();

//       // Filter products based on the search term
//       const filtered = categoryData.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       setCategoryProducts(filtered);
//     } catch (error) {
//       console.error(`Error fetching ${category} data:`, error);
//     }
//   }

//   const handleCategorySelection = (selectedCategory) => {
//     setCategory(selectedCategory);
//   }

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   const handleSearch = () => {
//     // Perform search based on the entered search term
//     fetchData();
//   }

//   return (
//     <Layout>
//       <br /><br /><br />
//       <>
//         <div>
//           <center>
//             {/* Include the CategoryButtons component in the CategoryPage */}
//             <CategoryButtons categories={categories} onSelectCategory={handleCategorySelection} />
//           </center>
//         </div>
//         <hr />
//         <div>
//           <center><h1 className="heading">{category}</h1></center>
//           {/* Add a search input for filtering products */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search products"
//               value={searchTerm}
//               onChange={handleSearchTermChange}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//         </div>
//         <hr />
//         <div className="container">
//           <div className="row">
//             {categoryProducts.map((product, index) => (
//               <div className="col-5 col-md-3" key={index}>
//                 <ProductCard {...product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     </Layout>
//   );
// }

// const CategoryButtons = ({ categories, onSelectCategory }) => {
//   return (
//     <div className="category-buttons">
//       {categories.map((category, index) => (
//         <button key={index} onClick={() => onSelectCategory(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Category;

// Category.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard.js';
// import Layout from './components/layout/layout.js';
// import Header from './components/layout/header.js';

// const Category = () => {
//   const [category, setCategory] = useState('AgriProducts');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   const categories = ['AgriProducts', 'SeriProducts', 'AquaProducts']; // Add your categories here

//   useEffect(() => {
//     fetchData();
//   }, [category, searchTerm]);

//   async function fetchData() {
//     try {
//       // Fetch data based on the selected category
//       const response = await fetch(`http://localhost:3000/${category}`);
//       const categoryData = await response.json();

//       // Filter products based on the search term
//       const filtered = categoryData.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       setCategoryProducts(filtered);
//     } catch (error) {
//       console.error(`Error fetching ${category} data:`, error);
//     }
//   }

//   const handleCategorySelection = (selectedCategory) => {
//     setCategory(selectedCategory);
//   }

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   return (
//     <Layout>
//       <Header onSearch={handleSearchTermChange} />
//       <br /><br /><br />
//       <>
//         <div>
//           <center>
//             {/* Include the CategoryButtons component in the CategoryPage */}
//             <CategoryButtons categories={categories} onSelectCategory={handleCategorySelection} />
//           </center>
//         </div>
//         <hr />
//         <div>
//           <center><h1 className="heading">{category}</h1></center>
//           {/* Add a search input for filtering products */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search products"
//               value={searchTerm}
//               onChange={handleSearchTermChange}
//             />
//             {/* No need for a search button in the Category page */}
//           </div>
//         </div>
//         <hr />
//         <div className="container">
//           <div className="row">
//             {categoryProducts.map((product, index) => (
//               <div className="col-5 col-md-3" key={index}>
//                 <ProductCard {...product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     </Layout>
//   );
// };

// const CategoryButtons = ({ categories, onSelectCategory }) => {
//   return (
//     <div className="category-buttons">
//       {categories.map((category, index) => (
//         <button key={index} onClick={() => onSelectCategory(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Category;
// Category.js

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.js';
import Layout from './components/layout/layout.js';
import Header from './components/layout/header.js';
import './Practice.css'; // Import the CSS file for Category styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Category = () => {
  const [category, setCategory] = useState('AgriProducts');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  const categories = ['AgriProducts', 'SeriProducts', 'AquaProducts','HoriProducts']; // Add your categories here

  useEffect(() => {
    fetchData();
  }, [category, searchTerm]);

  async function fetchData() {
    try {
      // Fetch data based on the selected category
      const response = await fetch(`http://localhost:3000/${category}`);
      const categoryData = await response.json();

      // Filter products based on the search term
      const filtered = categoryData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setCategoryProducts(filtered);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  }

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Layout>
      <Header onSearch={handleSearchTermChange} />
      <br /><br /><br />
      <>
       
  
        <div>
          <center><h3 className="heading">{category}</h3></center>
          <hr/>
          {/* Add a search input for filtering products */}
          <div className="search-container">
          
            <input

              type="text"
              placeholder="Search products in the category..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
             <div>
          <center>
            {/* Include the CategoryButtons component in the CategoryPage */}
            <CategoryButtons categories={categories} onSelectCategory={handleCategorySelection} />
          </center>
        </div>
            {/* No need for a search button in the Category page */}
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            {categoryProducts.map((product, index) => (
              <div className="col-5 col-md-3" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}

const CategoryButtons = ({ categories, onSelectCategory }) => {
  return (
  <center>  <div className="category-buttons align-items-right">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
    </center>
  );
}

export default Category;
