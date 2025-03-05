import React from 'react';

function ImageColumn({ images, hoveredIndex, handleMouseEnter, handleMouseLeave }) {
  return (
    <div>
      {images.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden mb-4"
          onMouseEnter={() => handleMouseEnter(item.index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.imageUrl}
            alt={`Work ${item.index}`}
            className="w-full h-auto object-cover"
          />
          {hoveredIndex === item.index && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 text-white text-center p-4">
              <p className="text-xl font-semibold">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageColumn;