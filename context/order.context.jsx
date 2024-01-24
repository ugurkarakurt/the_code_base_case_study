import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, remove } from '@/services/request';
import { sortItems } from '@/utils/sorting';

export const OrdersContext = createContext();

export const useRecords = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersMap, setOrdersMap] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortingKey, setSortingKey] = useState('sortLastAdded');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getRecordList();
  }, []);

  useEffect(() => {
    setFilteredOrders(ordersMap);
  }, [ordersMap]);

  useEffect(() => {
    if (ordersMap) {
      const sortedOrders = sortItems([...filteredOrders], sortingKey);
      setFilteredOrders(sortedOrders);
    }
  }, [sortingKey]);

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
    filteredOrders,
    sortingKey,
    setSortingKey
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};