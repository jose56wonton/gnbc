export const stringToUrl = (string) => {
  return encodeURI(string.toLowerCase().split(" ").join("-"))
}