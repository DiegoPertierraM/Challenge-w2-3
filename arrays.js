export const arrayLength = (arr) => {
  let r = 0;
  // eslint-disable-next-line no-unused-vars
  for (const iterator of arr) {
    r++;
  }

  return r;
};

export const push = (arr, ...elements) => {
  if (arrayLength(elements) <= 0) return 0;
  const elementsArr = elements;
  for (const element of elementsArr) {
    arr[arrayLength(arr)] = element;
  }

  return arrayLength(arr);
};

export const pop = (arr) => {
  if (arr.length === 0) return undefined;

  const removedElement = arr[arr.length - 1];
  arr.length -= 1;
  return removedElement;
};

export const shift = (arr) => {
  if (arr.length === 0) return undefined;

  const removedElement = arr[0];
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    push(reversedArr, arr[i]);
  }

  reversedArr.length -= 1;

  const finalArr = [];

  for (let i = reversedArr.length - 1; i >= 0; i--) {
    push(finalArr, reversedArr[i]);
  }

  return removedElement;
};

export const unshift = (arr, ...elements) => {
  if (arrayLength(elements) <= 0) return 0;
  const elementsArr = elements;
  for (const element of elementsArr) {
    arr[arrayLength(arr)] = element;
  }

  return arrayLength(arr);
};
