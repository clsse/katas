function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  return Math.sqrt(sq) === Math.floor(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}