import React from 'react';
import AddForm from '../components/AddForm';
import TopFold from '../components/TopFold';

const AddExpense = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <TopFold />
      <AddForm/>
    </div>
  );
};

export default AddExpense;
