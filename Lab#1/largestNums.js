function myFunc(...nums) {

    if(nums[0] >= nums[1] && nums[0] >= nums[2]){
        console.log(`The largest number is ${nums[0]}.`);
    }else if(nums[1] >= nums[2] && nums[1] >= nums[0]){ 
        console.log(`The largest number is ${nums[1]}.`);
    }else if(nums[2] >= nums[0] && nums[2] >= nums[1]){
        console.log(`The largest number is ${nums[2]}.`);
    }

}

myFunc(5, -3, 16);
myFunc(-3, -5, -22.5);