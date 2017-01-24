function a(){
    console.log('start');
    setTimeout(function(){
        console.log('out');
    },200);
    for(var i = 1 ; i >0 ;i++){}
    setTimeout(function(){
        console.log('out2');
    },100)
}
