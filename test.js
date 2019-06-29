function foo(){
    console.log("frist")
    setTimeout(function(){
        console.log("seconde")
    },5)

}
for(var i = 0;i<100;i++){
    foo()
}