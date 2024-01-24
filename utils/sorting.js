export const sortItems = (filteredRecords, sortType) => {
  const sortedRecords = [...filteredRecords];

  if (sortType === 'sortFavoriteCount') {
    sortedRecords.sort((a, b) => {
      const favoriteComparison = b.favorite_count - a.favorite_count;

      if (favoriteComparison !== 0) {
        return favoriteComparison;
      } else {
        return new Date(b.last_update_date) - new Date(a.last_update_date);
      }
    });
  } else if (sortType === 'sortLastAdded') {
    sortedRecords.sort((a, b) => new Date(b.last_update_date) - new Date(a.last_update_date));
  } else {
    console.warn('Geçersiz sortType değeri. Varsayılan olarak artan sıralama yapılıyor.');
    sortedRecords.sort((a, b) => new Date(a.last_update_date) - new Date(b.last_update_date));
  }
  return sortedRecords;
};
