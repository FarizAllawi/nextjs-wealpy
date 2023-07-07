export const ConvertStringToInt = value => {
  const intValue = parseInt(value, 10);
  return isNaN(intValue) ? 0 : intValue;
};

export const ConvertStringToDouble = value => {
  const doubleValue = parseFloat(value);
  return isNaN(doubleValue) ? 0.0 : doubleValue;
};

export const Slugify = value => {
  return value
  ?.toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');
};
