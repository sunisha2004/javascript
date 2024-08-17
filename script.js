//checking palindrome or not

str = "malayalam"
 let split = str.split('');
split.reverse();

 let strjoin =split.join('');
 console.log(strjoin);

 if(strjoin == str){
    console.log("it is a palindrome")
 }else{
 console.log("not a palindrome")
 }