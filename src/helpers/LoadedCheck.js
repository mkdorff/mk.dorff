// May or may not use, might be something like this.

// Check if all images on a page have loaded

export function ImagesFin () {
  for (const img of document.querySelectorAll('img')) {
    if (!img.complete) return false;
  }
  return true;
}