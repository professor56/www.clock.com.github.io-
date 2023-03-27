function time() {
    var datte=new Date();
    var hour=datte.getHours();
    var mm=datte.getMinutes();
    var ss=datte.getSeconds();
    document.getElementById("hm").innerHTML=hour;
    document.getElementById("mn").innerHTML=mm;
    document.getElementById("sc").innerHTML=ss;
    setTimeout(time,1000);
}
time(); 