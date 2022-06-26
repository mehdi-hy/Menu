import React from 'react';

const Categories = ({ items, showMenu }) => {
  const categories = items.reduce(
    (acc, current) => {
      if (!acc.includes(current.category)) {
        acc = [...acc, current.category];
        return acc;
      }
      return acc;
    },
    ['all']
  );

  return (
    <menu className='menu'>
      <div className='title'>
        <div className='btn-container'>
          {categories.map((category) => {
            return (
              <button
                type='button'
                key={category}
                className='filter-btn'
                onClick={() => showMenu(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </menu>
  );
};

export default Categories;
