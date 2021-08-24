// get an array of ChatCodes index from it's start till the end
function getChars(start, end) {
    let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
export const lowerChars = getChars(97, 122);
export const UpperChars = getChars(65, 90);
export const numberChars = getChars(48, 57);
export const symChars = getChars(32, 47).concat(getChars(58, 64)).concat(getChars(123,126)).concat(getChars(91,96))
// if numberchars or upperChars is checked than add number or upper ...etc chars  indexes to the password array 
export function formPassword(upperChecked , numbersChecked , symChecked) {
  let PASS = lowerChars
  if (upperChecked) {
    PASS = PASS.concat(UpperChars)
  }
  if (numbersChecked) {
    PASS = PASS.concat(numberChars)
  }
  if (symChecked) {
    PASS = PASS.concat(symChars)
  }
  return PASS
}
//copy password text functino 
export const CopyText = (e) => {
  let copyText = e.target.textContent
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);
};