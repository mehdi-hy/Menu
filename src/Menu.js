import React from 'react';

const Menu = ({ menu }) => {
  return (
    <section className='section-center'>
      {menu.map((item) => {
        return (
          <article className='menu-item' key={item.id}>
            <img className='photo' src={item.img} alt='' />

            <div className='item-info'>
              <header>
                <h4>{item.title}</h4>
                <div className='price'>{item.price}</div>
              </header>
              <div className='item-text'>{item.desc}</div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
