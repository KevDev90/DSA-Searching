function binarySearch(array, value, start, end, cnt) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        console.log('did not find in this many tries: '+ cnt);
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
        console.log('found '+ value +' in this many tries: '+ cnt);
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, cnt+1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, cnt+1);
    }
};

function indexOf(array, value) {
    let cnt =0;
    for (let i = 0; i < array.length; i++) {
        cnt++
        if (array[i] == value) {
            console.log('we found '+ value +' in this many tries: '+ cnt)
            return i;
        }
    }
    console.log('did not find '+ value +', we did this many tries: '+ cnt)
    return -1;
};

let data1 = [89, 30 ,25, 32 ,72 ,70 ,51 ,42 ,25, 24, 53, 55 ,78, 50, 13 ,40 ,48 ,32 ,26 ,2 ,14, 33, 45, 72, 56, 44, 21, 88 ,27, 68, 15, 62 ,93 ,98, 73 ,28 ,16, 46, 87, 28, 65 ,38 ,67, 16 ,85, 63, 23, 69 ,64, 91, 9, 70 ,81 ,27, 97, 82, 6 ,88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38 ,28, 13 ,17 ,69, 90, 1, 6, 7 ,64, 43, 9 ,73, 80 ,98, 46 ,27, 22 ,87 ,49 ,83, 6 ,39, 42, 51, 54 ,84 ,34 ,53 ,78, 40, 14 ,5]
let sortedData = data1.sort()

let sorted = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
binarySearch(sorted, 8, 0, sorted.length, 0)
console.log("search for 16");
binarySearch(sorted, 16, 0, sorted.length, 0)

indexOf(data1, 88)
indexOf(data1, 10000)
console.log("binary search");
binarySearch(sortedData, 10000, 0, sortedData.length, 0)
binarySearch(sortedData, 88, 0, sortedData.length, 0)