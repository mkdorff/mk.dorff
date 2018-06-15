export function prevEl(array, currIdx) {
  return array[currIdx > 0 ? currIdx - 1 : array.length - 1];
}

export function nextEl(array, currIdx) {
  return array[currIdx < array.length - 1 ? currIdx + 1 : 0];
}