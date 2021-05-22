const deletePropsFromObj = (object, arr) => {
  const newObj = JSON.parse(JSON.stringify(object));
  arr.forEach(elem => {
    if (object.hasOwnProperty(elem)) {
      delete newObj[ elem ];
    }
  })
  return newObj
};

export default deletePropsFromObj;
