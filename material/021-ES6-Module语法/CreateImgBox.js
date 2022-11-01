/*
 * @作者: kerwin
 */
import {CreatBox} from './CreatBox.js'
class CreateImgBox extends CreatBox{
    constructor(select,data){
        super(select,data)
        this.imgUrl = data.url

        this.render()
    }

    render(){
        // console.log("111111",this.imgUrl)
        super.render()
        let oimg = this.ele.querySelector("img")
        oimg.src=  this.imgUrl
    }
}

export default CreateImgBox