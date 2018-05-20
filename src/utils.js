exports.stringToUrl = function(string){
  return encodeURI(string.toLowerCase().split(" ").join("-"))
}