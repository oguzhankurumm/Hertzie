import { useCallback, useMemo } from 'react';

import faker from '@faker-js/faker';
import dayjs from 'dayjs';

import { useTranslate } from '_hooks/useTranslate';

const useMessages = () => {
  const { translate } = useTranslate();

  const dummyEventChatMessages = useMemo(
    () => [
      {
        id: 'msg-0',
        sender: {
          id: '0',
          name: 'Hasan K.',
        },
        message: 'Ana sahnedeki dj çok iyi, herkes gelsin',
        date: dayjs().subtract(1, 'hour').format('HH:mm'),
      },
      {
        id: 'msg-1',
        sender: {
          id: '1',
          name: 'Oğuzhan K.',
        },
        message: 'Kovboy şapkalı sarışın kız beni bul!',
        date: dayjs().subtract(2, 'hour').format('HH:mm'),
      },
      {
        id: 'msg-2',
        sender: {
          id: '2',
          name: 'Naz K.',
        },
        message: 'Kadınlar tuvaleti çok dolu, sonra gelin',
        date: dayjs().subtract(3, 'hour').format('HH:mm'),
      },
    ],
    []
  );

  return {
    dummyEventChatMessages,
  };
};

export { useMessages };
