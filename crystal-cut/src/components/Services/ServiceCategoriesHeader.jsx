import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import ProductsTG from "./ProductsTG";
import ProductsDG from "./ProductsDG";
import ProductsAW from "./ProductsAW";
import QuoteButton from "../../AtomicComponents/QuoteButton";
import { AppContext } from "../../context/AppContext";

const ServiceCategoriesHeader = () => {
  const {selectedCategory, setSelectedCategory} = useContext(AppContext)
  const categoryData = {
    designed: {
      image: assets.designed_glass,
      title: "Designed Glass",
      description: "Aesthetic and custom glass designs to enhance your space.",
      bgColor: "bg-green-100",
    },
    toughened: {
      image: assets.toughened_glass,
      title: "Toughened Glass",
      description: "Durable and safe glass solutions for various applications.",
      bgColor: "bg-blue-100",
    },
    aluminum: {
      image: assets.aluminum_works,
      title: "Aluminum Works",
      description: "High-quality aluminum fabrication and installation services.",
      bgColor: "bg-teal-100",
    },
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "toughened":
        return <ProductsTG />;
      case "designed":
        return <ProductsDG />;
      case "aluminum":
        return <ProductsAW />;
      default:
        return <ProductsTG />;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Service Categories
          </h2>
          <div className="flex justify-center gap-8">
            {Object.keys(categoryData).map((category) => (
              <div
                key={category}
                className={`flex flex-col items-center cursor-pointer ${
                  selectedCategory === category
                    ? ' bg-sky-100 text-sky-500'
                    : ""
                } p-4 rounded-lg`}
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={categoryData[category].image}
                  alt={categoryData[category].title}
                  className=" w-16 h-16 md:w-32  md:h-32 mb-4"
                />
                <h3 className=" text-sm sm:text-xl text-center font-semibold mb-2">
                  {categoryData[category].title}
                </h3>
                <p className="text-gray-600 text-center max-sm:hidden mb-4">
                  {categoryData[category].description}
                </p>
                {
                  selectedCategory === category && <QuoteButton TextValue = 'Request a Free Quote!' />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {renderCategoryContent()}
      </div>
    </div>
  );
};

export default ServiceCategoriesHeader;