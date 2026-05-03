function handleNum (num, isEvenCb, isOddCb) {
    if (num % 2 === 0) {
        return isEvenCb();
    } else {
        return isOddCb();
    }
}

function handleEven(){
    console.log('number is even');
};

function handleOdd(){
    console.log('number is odd');
};

handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);