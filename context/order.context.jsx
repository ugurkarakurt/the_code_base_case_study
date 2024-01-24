import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, remove } from '@/services/request';

export const OrdersContext = createContext();

export const useRecords = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersMap, setOrdersMap] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getRecordList();
  }, []);

  useEffect(() => {
    setFilteredRecords(ordersMap);
  }, [ordersMap]);

  const getRecordList = async () => {
    const ordersData = await get(apiUrl);
    setOrdersMap(ordersData);
  }

  const addOrderToList = async (recordToAdd) => {
    const response = await post(apiUrl, recordToAdd);
    getRecordList()
    return response;
  }

  const value = {
    ordersMap,
    addOrderToList,
    filteredRecords
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};