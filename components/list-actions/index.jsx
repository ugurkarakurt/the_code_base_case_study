import React, { useContext } from 'react';
import Dropdown from '../dropdown/dropdown.component';
import { OrdersContext } from '@/context/order.context';
import DropdownIcon from './sort-icon.png';
import DropdownIconEmpty from './sort-icon-empty.png';


const ListActions = () => {
  const { sortingKey, setSortingKey } = useContext(OrdersContext);

  const handleClickBySorterItems = (sortingValue) => {
    setSortingKey(sortingValue)
    localStorage.setItem("sortingKey", sortingValue);
  };

  return (
    <div className='listActionsContainer'>
      <Dropdown
        onOptionClicked={handleClickBySorterItems}
        selectedOption={sortingKey}
        icon={DropdownIcon}
        emptyIcon={DropdownIconEmpty}
        children={'Results Per Page'}
        options={[{ text: "Sırala (Son Eklenen)", sortingKey: "sortLastAdded" }, { text: "Sırala (Favori Sayısı)", sortingKey: "sortFavoriteCount" }]}
      />
    </div>
  );
}

export default ListActions;
