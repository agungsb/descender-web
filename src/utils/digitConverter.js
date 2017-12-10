function digitConverter(oldValue) {
  let newValue = oldValue;
  if (newValue < 10) {
    newValue = `0${newValue}`;
  }
  return newValue;
}

export default digitConverter;