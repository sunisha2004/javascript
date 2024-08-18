{
   //checking palindrome or not

   str = "manam"
   let split = str.split('');
   split.reverse();

   let strjoin = split.join('');
   console.log(strjoin);

   if (strjoin == str) {
      console.log("it is a palindrome")
   } else {
      console.log("not a palindrome")
   }
}


{

   //multiplication table
   console.log("\n\n\n\n");
   console.log("multiplication table")


   function multiply(n) {
      for (let i = 1; i <= 10; i++)
         console.log(` ${i} x ${n} : `, n * i)
   }


   n = 6
   console.log("number:",n);
   multiply(n)
}
