/**
 * @param {number[]} nums
 */
function findRotationCount(nums) {
  let l = 0, r = nums.length - 1
  while (l < r-1) {
    if (nums[l] < nums[r]) return l
    const mid = Math.floor((l+r) / 2)

    if (nums[l] > nums[mid]) {
      r = mid 
      continue
    }
    l = mid
  }
  if (nums[l] < nums[r]) return l 
  return r
}

module.exports = findRotationCount