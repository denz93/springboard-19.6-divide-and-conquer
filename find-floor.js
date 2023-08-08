/**
 * @param {number[]} nums 
 * @param {number} x
 */
function findFloor(nums, x) {
  let l = 0, r = nums.length - 1
  while (l < r - 1) {
    const mid = Math.floor((l+r) / 2)
    if (nums[mid] > x) {
      r = mid - 1
    } else {
      l = mid
    }
  }
  if (nums[r] <= x) return nums[r]
  if (nums[l] <= x) return nums[l]
  return -1
}

module.exports = findFloor