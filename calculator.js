function clickbtn(val){
    document.getElementById("screen").value+=val
}
function clr(){
    document.getElementById("screen").value=""
}
function eqclickbtn(){
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res
}