export const formatCurrency = (number) => {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  
    return formattedNumber;
  };