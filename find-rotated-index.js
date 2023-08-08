/** 
 * @param {number[]} nums
 * @param {number} a
*/
function findRotatedIndex(nums, a) {
 const findStartingIndex = (nums) => {
  let l = 0, r = nums.length - 1
  while (l < r - 1) {
    const mid = Math.floor((l+r) / 2)
    const leftValue = nums[l]
    const rightValue = nums[r]
    const midValue = nums[mid]
    
    // At anytime, if left value < right value, we found the original bound
    if (leftValue < rightValue) {
      return l
    }

    // Most of the time, left value > right value, so we need to find correct bound
    //...
    // the left side already in a good shape, move the search to the right side
    if (leftValue < midValue) {
      l = mid
      continue
    }

    // the right side already in a good shape, move the search to the left side
    r = mid
  } // while loop
  return r
 }

 const originalStartIndex = findStartingIndex(nums)

 const virtual2RealIndexTranslate = (idx) => {
  if (originalStartIndex + idx < nums.length) return originalStartIndex + idx 
  return idx - (nums.length - originalStartIndex)
 }

 let l = 0, r = nums.length -1;
 while (l < r) {
  const mid = Math.floor((l+r) / 2)
  const realMid = virtual2RealIndexTranslate(mid)

  if (nums[realMid] > a) {
    r = mid - 1
  } else if (nums[realMid] < a) {
    l = mid + 1
  } else {
    return realMid
  }
 }

 const realLeft = virtual2RealIndexTranslate(l)
 const readlRight = virtual2RealIndexTranslate(r)
 if (nums[realLeft] === a) return realLeft
 if (nums[readlRight] === a) return readlRight
 return -1
}

module.exports = findRotatedIndex