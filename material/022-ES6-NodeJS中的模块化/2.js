/*
 * @作者: kerwin
 */
// console.log("test")

function B1(){
    _b1()
    console.log("B1")
}
function _b1(){
    console.log("b1")
}
function B2(){
    console.log("B2")
}


exports.B1 = B1
exports.B2 = B2