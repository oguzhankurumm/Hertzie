import { addDays, format, parseISO, subDays } from 'date-fns';
import { enUS, tr } from 'date-fns/locale';

interface IFormatDate {
  date: string | Date;
  // burada dateFormat için bir standart ekledim kısıtlamak istemedim format konusunda
  dateFormat?: string;
  // locale normalde hook ile çekildiğinden util içerisinde kullanmak mantıklı gelmedi
  locale: string; // "tr" | "en";
}

export const formatDate = ({ date, locale, dateFormat = 'DD MM YYYY' }: IFormatDate) => {
  // date-fns de iso türleriyle alakalı bir kısıtlama yok. Herhangi bir iso formatını kullanabiliriz
  return format(typeof date === 'string' ? parseISO(date) : date, dateFormat, {
    locale: locale === 'tr' ? tr : locale === 'en' ? enUS : enUS,
  });
};

interface IGetDates {
  numberOfDays: number;
  direction: 'PAST' | 'FUTURE';
  dateFormat?: string;
  // locale normalde hook ile çekildiğinden util içerisinde kullanmak mantıklı gelmedi
  locale: string;
  // TODO: "Bugün", "Dün" gibi stringleri date-fns tarafından nasıl üretebileceğimi
  // bulamadım daha sağlam bir çözüm bulmak lazım
  t: (value: string) => string;
}

export const getDates = ({
  direction,
  numberOfDays,
  locale,
  dateFormat = 'd LLL',
  t,
}: IGetDates) => {
  const dates = [];
  const today = new Date();

  dates.push(t('Utils.Date.TODAY'), t(`Utils.Date.${direction}`));

  for (let i = 2; i <= numberOfDays - 1; i++) {
    let date;
    if (direction === 'PAST') {
      date = subDays(today, i);
    } else {
      date = addDays(today, i);
    }
    dates.push(formatDate({ date, locale, dateFormat }));
  }

  return dates;
};
