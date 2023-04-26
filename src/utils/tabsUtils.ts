export const toggleTabActivation = (tabs: TabType[], id: string): TabType[] => {
  return tabs.map((tab) => {
    tab.isActive = false;
    if (id.includes(tab.id)) tab.isActive = true;
    if (tab.id.startsWith(id) && tab.id.endsWith('1')) tab.isActive = true;

    if (tab.children) tab.children = toggleTabActivation(tab.children, id);

    return tab;
  });
};