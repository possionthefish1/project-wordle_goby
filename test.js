const arrayOfObjects = [
  { key: crypto.randomUUID(), value: 'APPLE' },
  { key: crypto.randomUUID(), value: 'REACT' },
];

const entryZero = Object.keys(arrayOfObjects[0]);

console.log(entryZero);
console.log(arrayOfObjects[0][entryZero[0]]);
