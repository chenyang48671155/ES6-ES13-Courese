/*
 * @作者: kerwin
 */
const odiv = document.querySelector("div")
console.log(odiv)


export function A1(){
    _a1()
    console.log("A1")
}
// __proto__
function _a1(){
    console.log("a1")
}


export function A2(){
    console.log("A2")
}


function test(){
    console.log("1.js--test")
}

//导出方法
// const obj = {
//     A1,
//     A2
// }
// export default {
//     A1,
//     A2,
//     test
// }

// export {
//     A1,
//     A2,
//     test
// }


export default test