// 1748. Sum of Unique Elements



// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.







/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    let map = new Map()

    for(let num of nums){

        if(map.has(num)){
            let count = map.get(num)
            map.set(num, count+1)
        }else{
            map.set(num, 1)
        }
    }

    let sum = 0

    for(let [num, count] of map){

        if(count == 1){
            sum += num
        }
    }

    return sum
    
};