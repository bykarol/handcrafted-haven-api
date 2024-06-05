import { Product } from "./definitions";

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US'
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
    const number = Math.floor(Math.random() * maxNumber);
    let numberExist = randomNumbers.includes(number);

    if (!numberExist) {
      i++;
      randomNumbers.push(number);
    }
  }
  return randomNumbers;
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


export const actualDate = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const date = String(today.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${date}`;

  return currentDate;
}


export const anonymousReviewers = () => {
  const names = ['Mystery Reviewer', 'Unknown Critic', 'Silent Evaluator', 'Incognito Reviewer', 'Secret Contributor', 'Mystery Shopper', 'Incognito Visitor', 'Nameless Reviewer', 'Stealthy Observer', 'Friendly Reviewer', 'Encouraging Evaluator', 'Positivity Contributor', 'Sunny Reviewer', 'Uplifting Evaluator', 'Bright Contributor', 'Sunshine Reviewer', 'Positive Presence', 'Hopeful Evaluator', 'Cheerful Critic', 'Joyful Assessor', 'Optimistic Observer', 'Radiant Reviewer', 'Happy Helper', 'Smiling Contributor', 'Radiant Rater', 'Optimism Source', 'Cheerful Contributor', 'Sunbeam Assessor', 'Joyful Rater', 'Kindness Critic', 'Encouraging Reviewer', 'Hopeful Helper', 'Bright Beacon', 'Sunlit Assessor'];

  return names[randomNumbers(names.length)[1]];
}

export const AddProductToCart = (product: Product) => {
  const storedProducts: Product[] = JSON.parse(localStorage.getItem('cartProducts') || '[]');

  const updatedProducts = [...storedProducts, product];

  localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));

  return updatedProducts;
}
