# jQuery
###attribute Module
通过 DOM setAttribute and getAttribute接口操作dom属性.

####discovery
- attr 模块通过setAttribute,getAttribute可以读写dom全部属性。
- prop 模块通过直接更改dom属性的方式更改只能读写dom全局属性（id, className etc.）
- prop 模块把一些枚举属性（readOnly, tabIndex etc）做了特殊处理
- 不同于 data 模块，attr 和 prop 对属性的操作均会实时反映在DOM中。
- addClassName 基于setAttribute('class'), Only assign if different to avoid unneeded rendering
- val()基于setAttribute('value')

###Ajax Module
处理XMLHttpRequest
底层调用XMLHttpRequest API并进行封装，
