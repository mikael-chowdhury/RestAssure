export function getValueByKeyPath(keyPath: string, obj: object): any {
  // Split the keyPath string into an array of keys, accounting for escaped periods
  const keys = keyPath.split(/(?<!\\)\./).map((key) => key.replace(/\\\./g, "."));

  // Reduce the keys to access the nested property
  return keys.reduce((currentObj, key): any => {
    return currentObj && currentObj[key as keyof typeof currentObj] !== undefined
      ? currentObj[key as keyof typeof currentObj]
      : undefined;
  }, obj);
}
