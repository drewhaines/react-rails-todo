export function copy(o) {
  let output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = (typeof v === 'object') ? copy(v) : v;
  }

  // if object was originally null, leave it null
  if (o == null) {
    output = null;
  }

  return output;
}


export function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

export function insertSpaces(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return str;
}

export function formatNumber(number) {
  const formattedNumber = (!isNaN(number) && number != null) ? number.toLocaleString() : '0';
  return formattedNumber;
}
