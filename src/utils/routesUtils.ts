export const formatRoute = (id: string) => {
  const splittedId = id.split('_').slice(1);

  return splittedId.map((_id, index, array) => {
    let baseTabId = '/tab_';
    let baseTabsId = (index < array.length - 1) ? '/tabs_' : '';

    for (let i = 0; i <= index; i++) {
      baseTabId += (i < index) ? `${array[i]}_` : `${array[i]}`;

      if (index < array.length - 1) {
        baseTabsId += (i < index) ? `${array[i]}_` : `${array[i]}`;
      }
    }

    return `${baseTabId}${baseTabsId}`;
  }).join('');
}
