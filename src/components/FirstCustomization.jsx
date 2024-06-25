import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const FirstCustomization = () => {
    const [ productType, setProductType ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ subCategory, setSubCategory ] = useState('');
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };
    const handleNext = () => {
        if(productType === '') {
            alert('Please enter a product type');
            return;
        }
        localStorage.setItem('productType', productType);
        if(category !== '') {
            localStorage.setItem('category', category);
        }
        if(subCategory !== '') {
            localStorage.setItem('subCategory', subCategory);
        }
        navigate('/second-customization');
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Let's add a type, Category and Sub-category</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product-type">
                Add a product type
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-type"
                type="text"
                placeholder="e.g., books"
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Add a category (optional)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                placeholder="e.g., Academic book"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sub-category">
                Add a sub-category (optional)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sub-category"
                type="text"
                placeholder="e.g., medical book"
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button className="py-2 px-4 bg-gray-300 text-gray-700 rounded" onClick={handleBack} >Back</button>
              <button className="py-2 px-4 bg-blue-500 text-white rounded" onClick={handleNext} >Next</button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-green-100 rounded">
            <img src="src/assets/firstcustomization.png" alt="Category Diagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCustomization;
