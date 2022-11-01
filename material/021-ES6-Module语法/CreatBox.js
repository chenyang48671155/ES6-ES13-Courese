/*
 * @作者: kerwin
 */
export class CreatBox{
    constructor(select,data){
        this.ele = document.querySelector(select)
        this.title = data.title
        this.list = data.list
        this.render()
    }


    render(){
        let oh1 = this.ele.querySelector("h1")
        let oul = this.ele.querySelector("ul")

        oh1.innerHTML = this.title
        oul.innerHTML = this.list.map(item=>
            `<li>${item}</li>`
        ).join("")
    }
}

// export {
//     CreatBox
// }