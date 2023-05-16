// cn short for classnames. this function accepts multiple arguments as classes and returns a string with all the non-empty classes concatenated together
// the Boolean is acting as a filter condition, which removes any falsy values like empty strings, null, undefined
// resulting filtered array is joined with a single space as a separator into a string

export default function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}