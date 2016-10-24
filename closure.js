function fun(n,o){
  console.log(o);
  return {
    fun : function (m){
      return fun(m,n)
    }
  }
}

var a = fun(0);
  // n = 0, console undefined   a = { fun : function(m){return fun(m,0)}}
a.fun(1);  // fun(1,0)  console 0 , {fun:function(m){return fun(m,1) }}
a.fun(2); // fun(2,0)  console 0 , {fun:function(m){return fun(m,2) }}
a.fun(3);// fun(3,0)  console 0 , {fun:function(m){return fun(m,3) }}


var b = fun(0).fun(1).fun(2).fun(3)
//console undefined,0,1,2
//fun(2,1) ==> {fun:function(m){return fun(m,2) }}
//{fun:function(m){return fun(m,3) }}

var c = fun(0).fun(1);
// undefined, 0
c.fun(2);// console 1 {fun:function(m){return fun(m,2) }}
c.fun(3)//   console 1 {fun:function(m){return fun(m,3) }}
