export default  {
    son_gen: function* (sons) {
        for(let i =0;i<sons.length;i++){
            yield sons[i];
        }
    }
}
