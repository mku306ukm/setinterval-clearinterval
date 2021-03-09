
var a = 0;
var id = setInterval(Animation, 100);

function Animation(){
    a = a + 5;
    if(a == 500){
        clearInterval(id);
    }else{
        var target = document.getElementById("test");
        target.style.width = a + 'px';
    }
}