import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, patch, remove } from '@/services/request';
import { sortItems } from '@/utils/sorting';

export const OrdersContext = createContext();

export const useRecords = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersMap, setOrdersMap] = useState([]);
  const [sortingKey, setSortingKey] = useState();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = async () => {
    const apiData = await get(apiUrl);
    const sortingKey = apiData.sortingKey.key;
    const sortedOrders = sortItems([...apiData.orders], sortingKey);
    setSortingKey(sortingKey);
    setOrdersMap(sortedOrders);
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

  const setSortingType = async (sortingKey) => {
    const response = await patch(`${apiUrl}/sortingKey`, { key: sortingKey });
    getOrderList();
    return response;
  }

  const value = {
    ordersMap,
    sortingKey,
    addOrderToList,
    removeOrderFromList,
    increaseOrderFavoriteCount,
    setSortingType
  };

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
};