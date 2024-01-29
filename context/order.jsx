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
  const [sortedType, setSortedType] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getOrderList();
  }, []);

  useEffect(() => {
    setFilteredOrders(ordersMap);
    setSortedType(getSortingKey());
  }, [ordersMap]);

  const getSortingKey = () => {
    const key = localStorage.getItem("sortingKey");
    return key ?? "sortLastAdded";
  }

  const sortTheData = (data, key) => {
    const sortedOrders = sortItems(data, key);
    return sortedOrders;
  }

  const setSortingType = async (sortingKey) => {
    localStorage.setItem("sortingKey", sortingKey);
    setOrdersMap(sortTheData(filteredOrders, getSortingKey()));
  }

  const getOrderList = async () => {
    const apiData = await get(apiUrl);
    setOrdersMap(sortTheData([...apiData.orders], getSortingKey()));
  }

  const addOrderToList = async (recordToAdd) => {
    const response = await post(`${apiUrl}/orders`, recordToAdd);
    getOrderList()
    return response;
  }

  const increaseOrderFavoriteCount = async (orderToEdit) => {
    const { id } = orderToEdit;
    const response = await patch(`${apiUrl}/orders/${id}`, orderToEdit);
    getOrderList();
    return response;
  }

  const removeOrderFromList = async (orderToRemove) => {
    const { id } = orderToRemove;
    const response = await remove(`${apiUrl}/orders/${id}`);
    getOrderList()
    return response;
  };

  const value = {
    filteredOrders,
    addOrderToList,
    removeOrderFromList,
    increaseOrderFavoriteCount,
    setSortingType,
    sortedType
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};