import { Route, Routes } from 'react-router-dom';
import CardTable from './components/card-table/CardTable';
import Card from './components/card/card'
import bmw1 from './images/bmw1.jpg'
import bmw2 from './images/bmw2.jpg'
import mercedes from './images/mercedes.jpg'


const RoutesTotal = () => {
  const info = [
    {
      image: bmw1,
      name: 'BMW 8 Series',
      price: '$100000',
    },
    {
      image: bmw2,
      name: 'BMW 7 Series',
      price: '$100000',
    },
    {
      image: mercedes,
      name: 'Mercedes CLI',
      price: '$100000',
    },
  ];
  return (
    <>
      <Routes>
        <Route path='/' element={<CardTable data={info} />} />
        <Route path='/card' element={<Card/>} />
      </Routes>
    </>
  );
};

export default RoutesTotal;
