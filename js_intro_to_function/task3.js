function checkOrder (available, ordered){
    if (available < ordered){
        return 'Your order is too large, we don’t have enough goods.';
    };
    
    if (ordered === 0){
        return 'Your order is empty';
    };
    
    if (available >= ordered){
        return 'Your order is accepted'
    };

    return 'Not valid function';   //додав на виподок неопрацьованих кейсів, як приклад останній консоль лог
}

console.log(checkOrder(2, 4));
console.log(checkOrder(2, 0));
console.log(checkOrder(4, 2));
console.log(checkOrder(4));