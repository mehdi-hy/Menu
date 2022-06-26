import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {
  const [items, setItems] = useState(data);
  const [menu, setMenu] = useState(data);
  const showMenu = (category) => {
    if (category === 'all') {
      setMenu(items);
    } else {
      const newMenu = items.filter((item) => item.category === category);
      setMenu(newMenu);
    }
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories items={items} showMenu={showMenu} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
