const urls = [
    '/api/v1/newblock/detail',
    '/api/v2/newblock/detail',
    '/api/v1/newblock/frame',
    '/api/v1/recommend',
]
class Node {
    constructor(label,isLeaf=false) {
        let node =  {
            label
        }
        !isLeaf && (node.children = [])
        return node
    }
}
class Tree {
    constructor(urls = []) {
        let urlList = [...new Set(urls)]
        if(urlList.length === 0) return null
        let tree = new Node('/')
        let pointer = tree.children
        urlList.forEach(url=>{
            let kids = url.trim().substr(1).split('/')
            for(let i = 0,length = kids.length;i < length;i++){
                let filtered = pointer.filter(item => item.label === kids[i])
                let node
                if(!filtered.length){
                    node = new Node(kids[i],i === length - 1);
                    pointer.push(node)
                    pointer = node.children
                } else {
                    pointer = filtered[0].children
                }
            }
            pointer = tree.children
        })
        return tree
    }
}
console.log(new Tree(urls))
