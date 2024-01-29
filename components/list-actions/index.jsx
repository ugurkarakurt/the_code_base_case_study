import React, { useContext } from 'react';
import Dropdown from '../dropdown';
import { OrdersContext } from '@/context/order';
import DropdownIcon from './sort-icon.png';
import DropdownIconEmpty from './sort-icon-empty.png';
import { useRouter } from 'next/navigation';
import { AlertContext } from '@/context/alert';

const ListActions = () => {
  const router = useRouter();
  const { setSortingType, sortedType } = useContext(OrdersContext);
  const { showAlert } = useContext(AlertContext);

  const handleClickBySorterItems = (sortingValue) => setSortingType(sortingValue)
    .then(() => {
      router.replace(`/?sorting=${sortingValue}`);
      sortedType !== sortingValue &&
        showAlert({
          isShow: true,
          alertType: 'info',
          alertContent: `Liste Tekrar Sıralandı`,
        });
    })

  return (
    <div className='listActionsContainer'>
      <Dropdown
        onOptionClicked={handleClickBySorterItems}
        selectedOption={sortedType}
        icon={DropdownIcon}
        emptyIcon={DropdownIconEmpty}
        children={'Results Per Page'}
        options={[{ text: "Sırala (Son Eklenen)", sortingKey: "sortLastAdded" }, { text: "Sırala (Favori Sayısı)", sortingKey: "sortFavoriteCount" }]}
      />
    </div>
  );
}

export default ListActions;
