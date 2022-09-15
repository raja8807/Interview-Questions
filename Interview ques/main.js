function validateEmail(email){
    if(email.includes("@") && email.includes(".")){
        return "valid"
    }else{
        return "not valid"
    }
}
console.log(validateEmail("asd@gmail.com"));
console.log(validateEmail("asdgmailcom"));

function sumDigits(num){
    let sum = 0
    while(num != 0){
        let lastDigit = num%10
        sum = sum + lastDigit
        num = (num-lastDigit)/10
    }
    return sum
}
console.log(sumDigits(123));

function mySort(arr){
    let newArr = arr.sort((a,b)=>{
        return a-b
    })
    return newArr
}
console.log(mySort([6,2,4]));