import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CardTable from './components/card-table/CardTable';
import { getProductsSelector } from './components/redux/CardTable.slice';
import Card from './components/card/card';

const RoutesTotal = () => {
  const products = useSelector(getProductsSelector);
  return (
    <>
      <Routes>
        <Route path='/' element={<CardTable data={products} />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </>
  );
};

export default RoutesTotal;
