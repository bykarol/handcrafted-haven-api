export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};


export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};


// Function that generates four unique random numbers
export const randomNumbers = (maxNumber: number) => {
  const randomNumbers = [];
  let i = 0;

  while (i < 4) {
    const number = Math.floor((Math.random() * maxNumber));
    let numberExist = randomNumbers.includes(number);
    
    if (!numberExist) {
      i++;
      randomNumbers.push(number);
    }
  };
  return randomNumbers;
}