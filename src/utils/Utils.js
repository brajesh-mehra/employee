
export const convertObjToArray = (obj) => {
  let arr = [];
  Object.keys(obj).map((key) => {
    arr.push(obj[key]);
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

// const addValueInArray(arr, value) {
//   const sheet = lodash.find(aeDiscoverDocData.data.sheets, { id: mvsId });
//   sheet.isEditableCanvas = isEditableCanvas;
// }