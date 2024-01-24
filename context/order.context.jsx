import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, patch, remove } from '@/services/request';
import { sortItems } from '@/utils/sorting';

export const OrdersContext = createContext();

export const useRecords = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersMap, setOrdersMap] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortingKey, setSortingKey] = useState('');

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getOrderList();
  }, []);

  useEffect(() => {
    const key = localStorage.getItem("sortingKey");
    key ? setSortingKey(key) : setSortingKey("sortLastAdded");
    const sortedOrders = sortItems([...ordersMap], key ? key : "sortLastAdded");
    setFilteredOrders(sortedOrders);
  }, [ordersMap]);

  useEffect(() => {
    const sortedOrders = sortItems([...filteredOrders], sortingKey);
    setFilteredOrders(sortedOrders);
  }, [sortingKey]);

  const getOrderList = async () => {
    const ordersData = await get(apiUrl);
    setOrdersMap(ordersData);
  }

  const addOrderToList = async (recordToAdd) => {
    const response = await post(apiUrl, recordToAdd);
    getOrderList()
    return response;
  }

  const increaseOrderFavoriteCount = async (orderToEdit) => {
    const { id } = orderToEdit;
    const response = await patch(`${apiUrl}/${id}`, orderToEdit);
    getOrderList();
    return response;
  }

  const removeOrderFromList = async (orderToRemove) => {
    const { id } = orderToRemove;
    const response = await remove(`${apiUrl}/${id}`);
    getOrderList()
    return response;
  };

  const value = {
    ordersMap,
    addOrderToList,
    filteredOrders,
    sortingKey,
    setSortingKey,
    removeOrderFromList,
    increaseOrderFavoriteCount
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};