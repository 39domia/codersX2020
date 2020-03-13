/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

function has(object, key) {
    for (var keyy in object) {
        if (keyy === key)
            return true;
        else
            return false;
    }
}


has({
    name: "Tom",
    age: 21
}, "names")


// true