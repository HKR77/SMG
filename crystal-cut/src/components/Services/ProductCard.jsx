import React, { useState } from 'react';

const ProductCard = React.memo(({ product, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % product.images.length
      );
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
      );
    };
  
    const isImageLeft = index % 2 === 0; // Check if index is even
  
    return (
      <div className="flex flex-col md:flex-row gap-8 p-4 border-b-4 border-sky-400 items-center">
        {isImageLeft ? (
          <div className="md:w-1/2 relative flex justify-center">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className=" h-[250px] md:h-[400px] rounded-md"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="md:w-1/2 order-2 max-md:order-none relative flex justify-center">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="h-[250px] md:h-[400px] rounded-md"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                  &gt;
                </button>
              </>
            )}
          </div>
        )}
  
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold mb-2 tracking-wider">{product.name}</h3>
          <p className="text-gray-600 tracking-wider">{product.description}</p>
          <p className='text-gray-600 tracking-wider'> <span className=' font-semibold'>Applications:</span> {product.applications}</p>
        </div>
      </div>
    );
})

export default ProductCard