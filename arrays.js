export const length = (arr) => {
  let r = 0;
  // eslint-disable-next-line no-unused-vars
  for (const iterator of arr) {
    r++;
  }

  return r;
};

export const push = (arr, ...elements) => {
  if (length(elements) <= 0) return 0;
  // No es necesario guardarlo en una variable, se puede emplear directamente.
  // const elementsArr = elements;
  for (const element of elements) {
    arr[length(arr)] = element;
  }

  return length(arr);
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
  if (length(elements) <= 0) return 0;
  for (let i = length(arr); i >= 0; i--) {
    if (i === 0) {
      for (let j = 0; j < length(elements); j++) {
        push(arr, elements[j]);
      }
    }
  }

  return length(arr);
};

export const some = (arr, callbackFunction) => {
  for (const element of arr) {
    if (callbackFunction(element)) return true;
  }

  return false;
};

export const map = (arr, callbackFunction) => {
  const newArr = [];
  for (const element of arr) {
    push(newArr, callbackFunction(element));
  }

  return newArr;
};
