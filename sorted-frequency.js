function sortedFrequency(nums, a) {

  const findLeftBound = (nums, a) => {
    let l = 0, r = nums.length-1
    while (l < r - 1) {
      const mid = Math.floor((l+r)/2)
      if (nums[mid] > a) {
        r = mid - 1
      } else if (nums[mid] < a) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    
    if (nums[l] !== a) {
      return -1
    }
    return l
  }

  const findRightBound = (nums, a) => {
    let l = 0, r = nums.length-1
    while (l < r - 1) {
      const mid = Math.floor((l+r)/2)
      if (nums[mid] > a) {
        r = mid - 1
      } else if (nums[mid] < a) {
        l = mid + 1
      } else {
        l = mid
      }
    }
    if (l === r) {
      if (nums[l] === a) return l
      return -1
    }

    if (nums[l] === a) {
      return l
    }
    if (nums[r] === a) {
      return r
    }
    return -1
  }

  const [l, r] = [findLeftBound(nums, a), findRightBound(nums, a)]
  if (l === -1) return -1
  return r - l + 1
}

module.exports = sortedFrequency