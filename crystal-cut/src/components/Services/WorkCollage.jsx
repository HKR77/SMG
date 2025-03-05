// WorkCollage.js
import React, { useState, useMemo } from 'react';
import collageData from '../../assets/assets'; // Adjust path
import ImageColumn from './ImageColumn'; // Import the new component

const WorkCollage = React.memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const columns = useMemo(() => {
    const numColumns = 3; // Default to 3 columns (lg breakpoint)
    const columnsArray = Array.from({ length: numColumns }, () => []);

    collageData.forEach((item, index) => {
      columnsArray[index % numColumns].push({ ...item, index }); // Add index to item
    });

    return columnsArray;
  }, [collageData]);

  return (
    <section className="text-center py-8 space-y-4">
      <h3 className="uppercase tracking-widest text-sm text-red-500">gallery</h3>
      <h1 className="tracking-wider text-lg md:text-2xl font-semibold">Our latest projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {columns.map((column, columnIndex) => (
          <ImageColumn
            key={columnIndex}
            images={column}
            hoveredIndex={hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
});

export default WorkCollage;