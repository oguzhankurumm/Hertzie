type DecimalSettings = {
  displayDecimalFactor: number;
  quantityStep: number;
};

const defaultDecimalSettings: DecimalSettings = {
  displayDecimalFactor: 2,
  quantityStep: 2,
};

const getDecimalSettings = (marketName: string): DecimalSettings => {
  // TODO: fix this, it should be fetched from the server
  const marketSettings: { [key: string]: DecimalSettings } = {
    marketA: { displayDecimalFactor: 4, quantityStep: 3 },
    marketB: { displayDecimalFactor: 6, quantityStep: 4 },
    // Add more markets as needed
  };

  return marketSettings[marketName] || defaultDecimalSettings;
};

const formatDecimal = (
  num: any,
  decimalOrMarketName: any = -1,
  priceOrAmount = 'price',
  ceilOrFloor?: 'ceil' | 'floor'
) => {
  try {
    num = parseFloat(num);
    if (Number.isNaN(num)) return '0';

    let decimal = 2;

    if (Number.isNaN(+decimalOrMarketName)) {
      const decimalSetting = getDecimalSettings(decimalOrMarketName);
      decimal =
        priceOrAmount === 'price'
          ? decimalSetting.displayDecimalFactor
          : decimalSetting.quantityStep;
    } else {
      decimal = decimalOrMarketName;
      if (decimalOrMarketName === -1) {
        decimal = 2;
      }
    }

    const factor = 10 ** decimal;

    if (ceilOrFloor === 'ceil') {
      num = Math.ceil(num * factor) / factor;
    } else if (ceilOrFloor === 'floor') {
      num = Math.floor(num * factor) / factor;
    }

    return num.toLocaleString('tr-TR', {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    });
  } catch (_error) {
    return '0';
  }
};

export default formatDecimal;
