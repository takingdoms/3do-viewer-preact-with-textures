function compareObjectsShallow(obj1: any, obj2: any): boolean {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.keys(obj2);

  return entries1.length === entries2.length && entries1.every(([key1, value1]) => {
    return key1 in obj2 && obj2[key1] === value1;
  });
}

function createUpdatedMap<K, V>(map: Map<K, V>, key: K, value: V): Map<K, V> {
  const newMap = new Map(map);
  newMap.set(key, value);
  return newMap;
}

function validateTextureName(textureName: string) {
  // return /^[a-zA-Z0-9]+$/.test(textureName);
  return /^(?!^(?:COM|PRN|AUX|NUL|CON|CLOCK\$)(?:\..+)?$)[^\s\\/:\*\?\"<>\|\x00-\x1F\x7F]{1,254}$/
    .test(textureName);
}

export const Utils = {
  compareObjectsShallow,
  createUpdatedMap,
  validateTextureName,
};
