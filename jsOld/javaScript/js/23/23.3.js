// Sort an array from shortest string to longest

function lengthSort(arr) {
    return arr.sort(function (a, b) {
        return a.length - b.length;
    })
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length