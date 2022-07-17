function findRepeatNumber(nums) {
    const map = {}
    let res = null;
    for (let i = 0; i < nums.length; i++) {
        let c = nums[i]
        if (map[c] === undefined) {
            map[c] = 1
        } else {
            res = c;
            break;
        }
    }
    return res;
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
