var s = {
    room : [1,2,3],
    sta:[1,2],
    price:[1,2],
    stasfs:[1,2],
    stafsf:[1,2],
    stafs:[1,2],
    stfsa:[1,2],
    stafssss:[1,2],
    stagagas:[1,2],
    stagsdgasdgas:[1,2],
}
var param = encodeURI(JSON.stringify(s))
window.location = '/ditu?' + param

var condition = window.location.search.slice(1)
JSON.parse(decodeURI(condition))
