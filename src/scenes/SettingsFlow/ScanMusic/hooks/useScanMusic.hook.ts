import { useCallback, useState } from 'react';

const useScanMusic = () => {
  const [durationItems, setDurationItems] = useState([
    { id: '30sec', title: '30 sec', value: 30, active: false },
    { id: '60sec', title: '60 sec', value: 60, active: false },
  ]);

  const [sizeItems, setSizeItems] = useState([
    { id: '50k', title: '50 K', value: 50, active: false },
    { id: '100k', title: '100 K', value: 100, active: false },
  ]);

  return {
    durationItems,
    sizeItems,
  };
};

export { useScanMusic };
