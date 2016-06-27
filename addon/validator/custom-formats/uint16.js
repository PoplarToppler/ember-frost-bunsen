export const max = 65535
export const min = 0

/**
 * Validate value as an unsigned 16-bit integer
 * @param {Any} value - value to validate
 * @returns {Boolean} whether or not value is valid
 */
export default function (value) {
  if (isNaN(value)) {
    return false
  }

  const int = parseInt(value)

  return (
    `${int}` === `${value}` &&
    int >= min &&
    int <= max
  )
}
