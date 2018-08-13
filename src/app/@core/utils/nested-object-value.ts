/**
 * Created by Mohammad.hajiaghazadeh on 8/13/2018
 */
export function getNestedValue(data, _key) {
  let keys = ("data." + _key).split('.'),
    nested = keys[0];
  for (let i = 1; i < keys.length; i++) {
    if (eval(nested) == null) {
      nested = null;
      break;
    }
    nested += "." + keys[i];
  }
  if (nested) {
    return eval("data." + _key);
  }
  return data[_key]
}
