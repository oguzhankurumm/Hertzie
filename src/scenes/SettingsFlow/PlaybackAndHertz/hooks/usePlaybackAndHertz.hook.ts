import { useCallback, useState } from 'react';

const usePlaybackAndHertz = () => {
  const [switchItems, setSwitchItems] = useState([
    { id: '1', title: 'Bass booster', active: true },
    { id: '2', title: 'Enable parallel play', active: false },
    { id: '3', title: 'Enable uninterruptet background play', active: false },
    { id: '4', title: 'Pause on disconnect', active: false },
    { id: '5', title: 'Resume on connect', active: false },
    { id: '6', title: 'Resume on bluetooth connect', active: false },
    { id: '7', title: 'Resume on bluetooth connect', active: false },
  ]);

  const onSwitchChange = useCallback((id: string) => {
    setSwitchItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
  }, []);

  return {
    switchItems,
    onSwitchChange,
  };
};

export { usePlaybackAndHertz };
