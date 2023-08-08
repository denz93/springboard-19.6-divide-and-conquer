/** @param {number[]} nums */
function countZeroes(nums) {
  let l = 0, r = nums.length-1;
  while (l < r-1) {
    if (nums[l] !== nums[r]) {
      l = Math.floor((l + r) / 2)
      continue
    }
    if (nums[l] === 0) {
      r = l
      l = 0
      continue
    }
    break
  }
  if (nums[r] === 1) {
    return 0
  }
  if (nums[l] === 1) {
    l++
  }
  return nums.length - l
}

module.exports = countZeroes