import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondCustomization = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showSkuInput, setShowSkuInput] = useState(false);
  const [skuCode, setSkuCode] = useState("");
  const [showHsnInput, setShowHsnInput] = useState(false);
  const [HsnCode, setHsnCode] = useState("");
  const [netPrice, setNetPrice] = useState("");
  const [listPrice, setListPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [shippingCharges, setShippingCharges] = useState("");
  const [stockLevel, setStockLevel] = useState("");
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
  useEffect(() => {
    const listPriceValue = parseFloat(listPrice) || 0;
    const discountPercentageValue = parseFloat(discountPercentage) || 0;
    const gstRateValue = parseFloat(gstRate) || 0;
    const shippingChargesValue = parseFloat(shippingCharges) || 0;
    const discountAmount = (listPriceValue * discountPercentageValue) / 100;
    const discountedPrice = listPriceValue - discountAmount;
    const gstAmount = (discountedPrice * gstRateValue) / 100;
    const netPriceValue = discountedPrice + gstAmount + shippingChargesValue;
    setNetPrice(netPriceValue);
  }, [listPrice, discountPercentage, gstRate, shippingCharges]);

  const handleBack = () => {
    navigate("/first-customization");
  };

  const handleNext = () => {
    if (productName === "") {
      alert("Please enter a product name");
      return;
    }
    if (productDescription === "") {
      alert("Please enter a product description");
      return;
    }
    if (!imageUrl) {
      alert("Please upload a product image");
      return;
    }
    if (!listPrice) {
      alert("Please enter a list price");
      return;
    }
    if (!discountPercentage) {
      alert("Please enter a discount percentage");
      return;
    }
    if (!gstRate) {
      alert("Please enter a GST rate");
      return;
    }
    if (!stockLevel) {
      alert("Please enter a stock level");
      return;
    }
    localStorage.setItem("productName", productName);
    localStorage.setItem("productDescription", productDescription);
    localStorage.setItem("imageUrl", imageUrl);
    localStorage.setItem("skuCode", skuCode);
    localStorage.setItem("HsnCode", HsnCode);
    localStorage.setItem("listPrice", listPrice);
    localStorage.setItem("discountPercentage", discountPercentage);
    localStorage.setItem("gstRate", gstRate);
    localStorage.setItem("shippingCharges", shippingCharges);
    localStorage.setItem("stockLevel", stockLevel);
    localStorage.setItem("netPrice", netPrice);
    navigate("/third-customization");
  };

  return (
    <div className="flex lg:h-screen md:flex-col lg:flex-row">
      <div className="w-full p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-6">
          Let's Customize Your Shopnix Store
        </h2>
        <h3 className="text-xl font-semibold mb-4">Basic Details</h3>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              placeholder="Anatomy Book"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productDescription"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              placeholder="Enter product description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productImage"
            >
              Add Image(s)
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
                onChange={(e) => setShowSkuInput(e.target.checked)}
              />
              <span className="ml-2">this product has an SKU code</span>
            </label>
            {showSkuInput && (
              <input
                type="text"
                placeholder="eg - PROD0001"
                value={skuCode}
                onChange={(e) => setSkuCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              />
            )}
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={(e) => setShowHsnInput(e.target.checked)}
              />
              <span className="ml-2">this product has an HSN/SAC code</span>
            </label>
            {showHsnInput && (
              <input
                type="text"
                placeholder="eg - PROD0001"
                value={skuCode}
                onChange={(e) => setHsnCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              />
            )}
          </div>
          <h3 className="text-xl font-semibold mb-4">Pricing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="listPrice"
              >
                List price
              </label>
              <input
                id="listPrice"
                type="text"
                placeholder="eg - 100"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setListPrice(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="discountPercentage"
              >
                Discount percentage
              </label>
              <input
                id="discountPercentage"
                type="text"
                placeholder="eg - 40"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gstRate"
              >
                GST rate
              </label>
              <input
                id="gstRate"
                type="text"
                placeholder="eg - 20"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setGstRate(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="shippingCharges"
              >
                Shipping charges (if any)
              </label>
              <input
                id="shippingCharges"
                type="text"
                placeholder="eg - 40"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setShippingCharges(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="netPrice"
              >
                Net price
              </label>
              <input
                id="netPrice"
                type="text"
                placeholder="eg - 80"
                value={netPrice}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="stockLevel"
              >
                Stock level
              </label>
              <input
                id="stockLevel"
                type="text"
                placeholder="eg - 110"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setStockLevel(e.target.value)}
              />
            </div>
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
              Next
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
              <span className="text-gray-500">Product Image</span>
            </div>
          )}
          <h4 className="text-lg font-bold mb-2">
            {productName || "Product Name"}
          </h4>
          <p className="text-gray-700 text-base mb-4">
            {productDescription || "Product description"}
          </p>
          <p className="text-gray-900 font-bold">
            Rs. <span className="line-through text-gray-600">{listPrice}</span>{" "}
            {netPrice || "Product Price"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondCustomization;
