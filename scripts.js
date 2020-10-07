// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the 
//numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
//If our input was [3, 2, 1], the expected output would be [2, 3, 6].

let nums = [1, 2, 3, 4, 5];
let p = 1;
let value;
let newArray = [];
let i;

function products() {

    for (i in nums) {
        p *= nums[i];


    }

    console.log(p);

    // for (let j = 0; j < nums.length; j++) {
    //     value = p/nums[i];
    //     newArray.push(value);
    //     console.log(newArray[j])

    // }

    for (let j in nums) {
        value = p/nums[j];
        newArray.push(value);
        console.log(newArray[j]);

    }

}


products();


// let numbers = [10, 15, 3, 7];
// let k = 17;

// function findSum() {
//     for (let i in numbers) {
//         console.log(i)
//         console.log(numbers[i])
//     }
//     console.log("======= break ======")
//     for (let i of numbers) {
//         console.log(i)
//         console.log(numbers[i])
//     }
//     console.log("======= break ======")

//     for (let i = 0; i<numbers.length; i++){
//         console.log(i)
//         console.log(numbers[i])
//     }
// }
// findSum();














// def products(nums):
//     # Generate prefix products
//     prefix_products = []
//     for num in nums:
//         if prefix_products:
//             prefix_products.append(prefix_products[-1] * num)
//         else:
//             prefix_products.append(num)