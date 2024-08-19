{
   //checking palindrome or not
   console.log("1. checking palindrome or not")
   str = "malayalam"
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
   console.log("2. multiplication table")


   function multiply(n) {
      for (let i = 1; i <= 10; i++)
         console.log(` ${i} x ${n} : `, n * i)
   }


   n = 6
   console.log("number:",n);
   multiply(n)
}

{
   //using map method to create a new array where each number is doubled

   console.log("\n\n\n\n");
   console.log("3.  map method to create a new array where each number is doubled");
   let arr = [2,5,8,6];
   console.log("array :",arr);
   

   let mappedarray = arr.map((element)=>{
      return element*2;
   });
   console.log("mappedarray : ",mappedarray);

}

{

   //use the filter method to create a new array containing only the even numbers

   console.log("\n\n\n\n");
   console.log("4 .filter method to create a new array containing only the even numbers");
   let arr = [2,5,8,6];
   console.log("array :",arr);
   let filtervalue = arr.filter((element) =>{
      return element%2 == 0;

   });
   console.log("even array : ",filtervalue);
   
}

{

   //use the reduce method to calculate the sum of all the numbers

   console.log("\n\n\n\n");
   console.log("5 .reduce method to calculate the sum of all the numbers");
   let arr = [2,5,8,6];
   console.log("array :",arr);
   let sum = arr.reduce((total,element) =>{
      return total + element;
   },0);
   console.log("sum : ",sum);
   
}

{
   //use the reduce method to find the maximum value in the array

     console.log("\n\n\n\n");
     console.log("6 .reduce method to find the maximum value in the array");
     let arr = [5, 3, 8, 1, 2];
console.log(" array: ", arr);

let maxvalue = arr.reduce((max, element) => {
    return element > max ? element : max;
}, arr[0]);

console.log("Maximum value: ", maxvalue);


   }

{
   // Array of strings use the map method to create a new array where each string is capitalized.
   console.log("\n\n\n\n");
   console.log("7 .use the map method to create a new array where each string is capitalized.");
   str = ["string"];
   console.log("string : ",str);
   
    let mapstring = str.map((element) =>{
       return element.toUpperCase()
    });
   console.log("capitalized :",mapstring);
}

{
   // An array of words, use the filter method to create a new array containing only the words with a length greater than a specified value
   console.log("\n\n\n\n");
   console.log("8 .use the filter method to create a new array containing only the words with a length greater than a specified value");

let arr = ["movie", "park", "trip"];
console.log("array : ", arr); 
let filterarray = arr.filter((element) => {
    return element.length > 4;
});
console.log("new array :", filterarray);

}

{
   //given an array of numbers, use the map method to create a new array of string indicating whether each number is even or odd.
   console.log("\n\n\n\n");
   console.log(" 9. use the map method to create a new array of string indicating whether each number is even or odd");
   arr = [2,8,7,9,12];
   console.log("array : ",arr);
   let maparray = arr.map((element) =>{
      return element%2 == 0 ? "even" : "odd";
   });
   console.log("new array : ",maparray);
}

{
   //using filter method to create a new array with only unique elements(remove duplicates).
   console.log("\n\n\n\n");
   console.log("10. using filter method to create a new array with only unique elements(remove duplicates)");
   arr = [1,2,3,10,11,4,10,11,2];
   console.log("array : ",arr);
   let filtervalue = arr.filter((element,index) => {
      return arr.indexOf(element) === index;
   });
   console.log("unique array : ",filtervalue);
}

{
   //given an array of numbers , use sort method to sort them in ascending order.
   console.log("\n\n\n\n");
   console.log("11 .use sort method to sort elements in ascending order");

   arr =[10,17,2,4,12];
   console.log("array : ",arr);

   let sortArray = arr.sort((m,n)=> m-n);
   console.log("Ascending array : ",sortArray);
}

{
   //given an array of objects with a name property , use the map method to create a new array containing only the names 
   console.log("\n\n\n\n");
   console.log("12 .use the map method to create a new array containing only the names ")
    property =[
      {
         name:"john",
         age:42,
         city:"mycity"
      },
      {
         name:"jeeva",
         age:32,
         city:"mycity"
      },
      {
         name:"karthi",
         age:28,
         city:"mycity"
      }
    ];
    console.log("Array object : ",property);
    
    let maparray = property.map(property => property.name);
    console.log("new array : ",maparray)

}