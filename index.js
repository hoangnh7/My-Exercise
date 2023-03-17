// Liệt kê tất cả các mảng con
var findArray = function(nums) {
    if (nums.length === 0) return [];

    var arr = [];
    arr.push([], [nums[0]]);

    for (let i = 1; i < nums.length; i++) {
        var currentLength = arr.length;
        for (var j = 0; j < currentLength; j++) {
            arr.push([...arr[j], nums[i]]);
        }
    }
    return arr;
};
// Hàm Lọc mảng , các tổng bằng sẽ nhau sẽ loại bỏ
var filterArray = function(arr){
    var n = arr.length;
    for (i=n-1;i>0;i--){
        for (j=0;j<i;j++){
            // console.log(1)
            if ( arr[j] === arr[i]){
                arr.splice(i,1)
            }
        }
    }
    return arr
}
// Xử lý kết quả 
var arr = [1,2,3,4]
var sumArr = findArray(arr);

var newArr=[] ;
for (var i = 0; i < sumArr.length; i++){
    var sum =0 ;
    for (var j= 0; j< sumArr[i].length; j++){
        sum += sumArr[i][j];
    }
    newArr.push(sum);
}
var result = filterArray(newArr);
console.log(result)
