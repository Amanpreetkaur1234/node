exports.factorial=function(x){
    if(x<0)
        return undefined
    let a=1;
    for(i=1; i<=x;i++){
        a *= i;
    }
    return a;
};