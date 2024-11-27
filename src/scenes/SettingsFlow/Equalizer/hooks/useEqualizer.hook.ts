import { useCallback, useMemo, useState } from 'react';

const useEqualizer = () => {
  const tabs: string[] = useMemo(
    () => ['Custom', 'Normal', 'Classical', 'Dance', 'Flat', 'Folk', 'Hip-Hop'],
    []
  );
  const [selectedTab, setSelectedTab] = useState<string>('Normal');

  const onTabPress = useCallback((tab: string) => {
    setSelectedTab(tab);
  }, []);

  return {
    tabs,
    selectedTab,
    onTabPress,
  };
};

export { useEqualizer };
