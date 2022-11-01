/*
 * @作者: kerwin
 */
// console.log("test")

function A1(){
    _a1()
    console.log("A1")
}
function _a1(){
    console.log("a1")
}
function A2(){
    console.log("A2")
}

// module.exports = {
//     A1,
//     A2
// }

export default  {
    A1,
    A2
}