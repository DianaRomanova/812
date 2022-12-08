function oddOrEven(array){
    if(array.length == 0) {
        return "even"
    } else{
        let sum= array.reduce(( accum, item) => {return accum + item})
        return (sum % 2 == 0) ? "even" : "odd"
    }
}

oddOrEven=[2,65,-57]

console.log(oddOrEven);
oddOrEven();

