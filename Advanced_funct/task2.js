function rec(num){
    console.log(num);

    if (num > 0) {
       rec(num - 1);
    }

}

rec(5);