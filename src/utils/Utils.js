
export const convertObjToArray = (obj) => {
  let arr = [];
  Object.keys(obj).map((key) => {
    return arr.push(obj[key]);
  });
  return arr;
};

export const addValueInArray = (arr, value) => {
  value = { ...value, id: 123 };
  if (Array.isArray(arr)) {
    arr.push(value);
  } else {
    arr = convertObjToArray(arr);
    arr.push(value);
  }
  return arr;
}