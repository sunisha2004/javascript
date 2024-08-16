//write a function to find the sum of elements of a numerical array
{
    function arraysum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    let arr = [10, 20, 30, 40, 50];
    console.log("array :",arr)
    console.log( "sum of elements:",arraysum(arr)); 
    }
    
    
    
    // write a function to find the average of element of an array  
    {
        console.log("\n\n\n\n\n\n")

    function average(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let average = sum / arr.length;
        return average;
    }
    
    let arr = [10, 20, 30, 40, 50];
    console.log("array :",arr)
    console.log("average of element :",average(arr)); 
    }
    
    
    
    // write a function to find the maximum and minimum element of an array 
    
    {
        console.log("\n\n\n\n\n\n")

        function MinMax(arr) {
            let min = arr[0];
            let max = arr[0];
        
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
        
            return { min, max };
        }
        
        let arr = [10, 20, 30, 40, 50];
        let result = MinMax(arr);
        console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
    }
    
    
    
    // write a function to convert the negative numbers of an array to positive numbers
    
    {
        console.log("\n\n\n\n\n\n")

    function convert(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = Math.abs(arr[i]);
            }
        }
        return arr;
    }
    
    let arr = [-10, 20, -30, 40, -50];
    console.log("array :",arr)
    let result = convert(arr);
    console.log("converted array :",result); 
    }
    
    
    
    
    // write a function to find out the sum of odd numbers of an array
    
    {
        console.log("\n\n\n\n\n\n")
        function sumodd(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 !== 0) {
                    sum += arr[i];
                }
            }
            return sum;
        }
        
        let arr = [1,4,35,72,11,2 ];
        console.log("array :",arr)
        let result = sumodd(arr);
        console.log("sum of odd numbers  : ",result);
        
    }
    
    
    
    // write a function to calculate the sum of even numbers of an array
    
    {
        console.log("\n\n\n\n\n\n")

        function sumEven(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    sum += arr[i];
                }
            }
            return sum;
        }
        
        let arr = [10, 21, 30, 41, 50];
        console.log("array :",arr)
        let result = sumEven(arr);
        console.log("sum of even numbers : ",result); 
        
    }
    
    
    
    // write a function to find the factorial of an array using recursion
    {
        console.log("\n\n\n\n\n\n")

    function fact(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
    
    function factorial(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fact(arr[i]));
        }
        return result;
    }
    
    let arr = [3, 4, 5];
    console.log("array :",arr)
    let result = factorial(arr);
    console.log("factorial of array : ",result); 
    }
    