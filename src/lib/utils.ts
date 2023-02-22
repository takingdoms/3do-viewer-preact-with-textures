function compareObjectsShallow(obj1: any, obj2: any): boolean {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.keys(obj2);

  return entries1.length === entries2.length && entries1.every(([key1, value1]) => {
    return key1 in obj2 && obj2[key1] === value1;
  });
}

export const Utils = {
  compareObjectsShallow,
};
