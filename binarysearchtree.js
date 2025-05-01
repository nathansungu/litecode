// binary search tree

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 3;

function binarySearch(array, target, startindex = 0, endindex = array.length - 1) {
    const middleindex = Math.floor((startindex + endindex) / 2);

    //no match
    if (startindex > endindex){
        return -1;
    }
    //match found
    if (array[middleindex] === target) {
        console.log(`Found ${target} at index ${middleindex}`);
    } else if (array[middleindex] < target) {
        return binarySearch(array, target, middleindex + 1, endindex);
    } else {
        return binarySearch(array, target, startindex, middleindex - 1);
    }
}

binarySearch(array, target);