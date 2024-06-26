import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ThirdCustomization = () => {
  const [storeName, setStoreName] = useState("");
  const [storeTitle, setStoreTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showSupportDetails, setShowSupportDetails] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const emptyLocalStorage = () => {
    localStorage.removeItem("selectedTheme");
    localStorage.removeItem("productType");
    localStorage.removeItem("category");
    localStorage.removeItem("subCategory");
    localStorage.removeItem("productName");
    localStorage.removeItem("productDescription");
    localStorage.removeItem("imageUrl");
    localStorage.removeItem("skuCode");
    localStorage.removeItem("HsnCode");
    localStorage.removeItem("listPrice");
    localStorage.removeItem("discountPercentage");
    localStorage.removeItem("gstRate");
    localStorage.removeItem("shippingCharges");
    localStorage.removeItem("stockLevel");
    localStorage.removeItem("netPrice");
    localStorage.removeItem("storeName");
    localStorage.removeItem("storeTitle");
    localStorage.removeItem("storeimageurl");
    localStorage.removeItem("showSupportDetails");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
  };

  const handleBack = () => {
    navigate("/second-customization");
  };

  const handleNext = () => {
    if(!storeName || !storeTitle || !imageUrl) {
      alert("Please fill all the fields");
      return;
    }
    localStorage.setItem("storeName", storeName);
    localStorage.setItem("storeTitle", storeTitle);
    localStorage.setItem("storeimageurl", imageUrl);
    localStorage.setItem("showSupportDetails", showSupportDetails);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    alert("Store details saved successfully");
    emptyLocalStorage();
    navigate("/");
  };

  return (
    <div className="flex lg:h-screen md:flex-col lg:flex-row">
      <div className="w-full p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-6">
          Let's Customize Your Shopnix Store
        </h2>
        <h3 className="text-xl font-semibold mb-4">Set Up the Store</h3>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="storeName"
            >
              Name of the Store
            </label>
            <input
              id="storeName"
              type="text"
              placeholder="Eg. Books Store"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="storeTitle"
            >
              Store Title
            </label>
            <input
              id="storeTitle"
              type="text"
              placeholder="Eg. Trial Books Store"
              value={storeTitle}
              onChange={(e) => setStoreTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productImage"
            >
              Add Image
            </label>
            <input
              id="productImage"
              type="file"
              onChange={handleImageUpload}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={(e) => setShowSupportDetails(e.target.checked)}
              />
              <span className="ml-2">Add support details</span>
            </label>
            {showSupportDetails && (
              <>
                <div className="mt-2 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    Support Email Address
                  </label>
                  <input
                    id="emailaddress"
                    type="email"
                    placeholder="Eg. hello@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phonenumber"
                  >
                    Support Phone Number
                  </label>
                  <input
                    id="phonenumber"
                    type="text"
                    placeholder="Eg. 9999999999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNext}
            >
              Review & Finish
            </button>
          </div>
        </form>
      </div>
      <div className="w-full p-8 bg-gray-100 overflow-auto">
        <div className="border border-gray-300 rounded p-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Product"
              className="w-full h-64 object-cover mb-4 rounded"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 mb-4 rounded flex items-center justify-center">
              <span className="text-gray-500">Store Image</span>
            </div>
          )}
          <h4 className="text-lg font-bold mb-2">
            {storeName || "Name of the Store"}
          </h4>
          <p className="text-gray-700 text-base mb-4">
            {storeTitle || "Store Title"}
          </p>
          {email && (
            <p className="text-gray-900 text-base mb-4 flex gap-4">
              <MdEmail /> {email}
            </p>
          )}
          {phone && (
            <p className="text-gray-900 text-base mb-4 flex gap-4">
              <FaPhoneAlt /> {phone}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdCustomization;
