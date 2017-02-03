/**
 * [wash description]
 * @param  {[Array]} cards [initial cards array to wash]
 * @param  {[Number]} times [time to wash]
 * @return {[Array]}       [washed cards]
 */
function wash(cards, times = 1) {
    if (!Array.isArray(cards) || cards.length % 2 !== 0 || times < 0)
        return;
    if (cards.length === 0 || times === 0)
        return cards;
    let time = parseInt(times, 10);
    if (!time)
        return;
    let leftHalf,
        rightHalf;
    while (time > 0) {
        let halfLength = cards.length / 2;
        let i = halfLength - 1;
        leftHalf = cards.splice(0, halfLength);
        rightHalf = cards.slice();
        cards = [];
        while (i >= 0) {
            cards.push(rightHalf[i], leftHalf[i]);
            i--;
        }
        time--;
    }
    return cards
}

wash([1,2,3,4,5,6])
