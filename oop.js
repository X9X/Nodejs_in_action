(function (global){
    function Y(){
        this._data = spread(arguments)；
        function spread(){
            var res = [];
            var args = [].slice.call(arguments);
            args.forEach(function(arg){
                if(arg instanceof Array){
                    res.concat(spread(arg));
                } else{
                    res.push(arg)
                }
            })
        }
    }
    Y.prototype = Array.prototype;
    global.Y = global.Y || Y;
})(window)
