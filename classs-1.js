// var a=10;
// console.log(a);

// const b = 20;
// console.log(b);

// let c=30;
// console.log(c);

// // number
// var a=10;
// console.log(a);

// //string
// var str ="omkar";
// console.log(str);

// //boolean
// var bool=true;
// console.log(bool);

// //array
// var arr =[1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[4]);

// var array =[1,2,"hello",true,false,[20,30,40],{a1:1,a2:2,a3:3}]
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[4]);
// console.log(array[5][1]);
// console.log(array[6].a2);

// //object                 
// var obj = {
//     a1:1,
//     a2:"hello",
//     a3:true,
//     a4:[1,2,3,4,5],
//     a5:{
//         b1:"hi",
//         b2:"hello",
//         b3:true,
//         b4:30,
//         b5:[10,20,30]
//     }
// }
// console.log(obj.a1);
// console.log(obj.a2);
// console.log(obj.a3);
// console.log(obj.a4[3]);
// console.log(obj.a5.b1);
// console.log(obj.a5.b3);
// console.log(obj.a5.b4);
// console.log(obj.a5.b5[2]);

// //  null
// var n= null;
// console.log(n);

// // un
// var v;
// console.log(v);


// var M={
//     name:"Meghana",
//     user1:[1,2,3,4,5,[6,7,8,9]],
//     user2:{
//         c:"Hello World",
//         d:"j",
//         t:[8,3,2,4,{
//             a1:20,
//             a2:30
//         },[2,5,7]]
//     }
// }
// console.log(M.user2.t[5][2]);


// var omkar={
//     name:"omkar",
//     obj1:{
//         user1:1,
//         user2:[1,2,3,4,5],
//         user3:{
//             a1:2,
//             a2:[1,4,6,7,{
//                 b1:2,
//                 b2:true,
//                 b3:[1,4,6,3]
//             }]
//         }

//     }
// }

// omkar.obj1.user3.a2[4].b3[1]=7
// console.log(omkar)
// console.dir(omkar,{depth:null });


// //arithmetic operators
// var a=10;
// var x=20;
// var z=a+x;
// var d=a-x;
// var e= a/x;
// var f=a%x;
// console.log(z,d,e,f);

// //functions
// //function with console
// function sum(a,b,c){
//     console.log(a+b+c);

// }
// sum(10,20,30)


// function add(x,y,z){
//     return x+y+z;
// }
// console.log(add(10,20,30));

// function sumOf(a,b)
// {
//     console.log(a>b);
// }
// sumOf(10,20)

// string methods 

//length --> it finds the length of the string.
// var str="Meghana"
// console.log(str.length);

// // functions
//    function length(a)
//    {
//     console.log(a.length);
//    }
//    length("hello world")


// // charAt --> we give the index number and it returns the character at that partiular index.
// var a="Bhavana"
// console.log(a.charAt(1));

// //functions
//   function CharAt(a)
//   {
//     console.log(a.charAt(4));
//   }
//   CharAt("hello")

// //indexOf ---> we give the character of the string and then it returns the indexof the letter.
// var s="Surya"
// console.log(s.indexOf("S"));

//function
// function IndexOf(a)
// {
//     console.log(a.indexOf("S"));
// }
// IndexOf("Satya");
// IndexOf("Omkar");
// IndexOf("Bhanu");

// // includes ---> include returns true if a particular word is present in teh string  or else it returns false.
// var h="helloworld"
// console.log(h.includes("world"));
// console.log(h.includes("bye"));

//function
// function Includes(a)
// {
//     console.log(a.includes("t"));
// }
// Includes("t-hub");
// Includes("omkar");
// Includes("thingari")

// // toUpperCase --> it converts all the letters in the string into upper case.
// var str="hello"
// console.log(str.toUpperCase());

// // function
// function ToUpperCase(a)
// {
//     console.log(a.toUpperCase())
// }
// ToUpperCase("omkar")
// ToUpperCase("satya")

// // toLowerCase --> it converts all the letters in the string into lower case.
// var str="HELLO"
// console.log(str.toLowerCase());

// // function
// function ToLowerCase(a)
// {
//     console.log(a.toLowerCase())
// }
// ToLowerCase("OMKAR")
// ToLowerCase("SATYA")

// // startsWith --> it will return true if we give a particular combination of characters in the string matches the starting letters of the string.
// var a="Good system"
// console.log(a.startsWith("Go"));
// console.log(a.startsWith("sy"));

// //function
// function StartsWith(a)
// {
//     console.log(a.startsWith("O"));
// }
// StartsWith("Omkar")
// StartsWith("Onam")
// StartsWith("orchid")
// StartsWith("Satya")


// // endsWith --> it will return true if we give a particular combination of characters in the string matches the ending letters of the string.
// var g= "apple phone"
// console.log(g.endsWith("one"));
// console.log(g.endsWith("apple"));

// // function
// function EndsWith(a)
// {
//     console.log(a.endsWith("i"))
// }
// EndsWith("Lakshmi")
// EndsWith("Ramya")

// // trim ---> it will trims the spaces.
// var o = "   hello"
// console.log(o.trim());

// // function
// function Trim(a)
// {
//     console.log(a.trim())
// }
// Trim("  omkar")
// Trim("satya  ")


// // // replace ---> it will replace the part of the string with a new string .
// var y= "hello script"
// console.log(y.replace("hello","Java"));

// // functions
// function Replace (a)
// {
//     console.log(a.replace("java","omkar"))
// }
// Replace("java Script")
// Replace("java")
// Replace("python")


//  // split--> it will split the string and it has three methods 
// var  k= "string is a string "
// console.log(k.split());
// console.log(k.split(""));
// console.log(k.split(" "));

// // function 
// function Split (a)
// {
//     console.log(a.split(""))
// }
// Split("omkar")
// Split("satya")

// // reverse --> it will split the string into array and then reverse it only method 2 and 3 are possible 
// var l= "string is a string "
// console.log(k.split(" ").reverse());

// // function
// function Reverse(a)
// {
//     console.log(a.split("").reverse())
// }
// Reverse("omkar")
// Reverse("satya")

// // join --> it changes array that we split becomes string 
// var m = "string is a string."
// console.log(m.split(" ").reverse().join(" "));
// console.log(m.split(" ").join(" "));

// // function
// function Join(a)
// {
//     console.log(a.split("").reverse().join(""))
// }
// Join("omkar")
// Join("satya")

// // repeat
// var j="hello world"
// console.log(j.repeat(10));

// // function
// function Repeat(a)
// {
//     console.log(a.repeat(10));
// }
// Repeat("omkar")
// Repeat ("satya")
 

// // substring
// var r= "hello world"
// console.log(r.substring(4,9));

// // function
// function Substring(a)
// {
//     console.log(a.substring(0,4));
// }
// Substring("omkar")
// Substring("satya")


// //padStart
//  var d="hello world"
//  console.log(d.padStart(15,"a"));

// // function
// function Padstart(a)
// {
//     console.log(a.padStart(8,"r"));
// }
// Padstart("omkar")

 
//  // padEnd
//  console.log(d.padEnd(23," how are you"));

// // function
// function PadEnd(a)
// {
//     console.log(a.padEnd(8,"r"));
// }
// PadEnd("omkar")
 
// // concate
// var var1= "string"
// var var2= "length"
// console.log( var1.concat(var2));

// // function
// function Concat(a,b)
// {
//     console.log(a.concat(b));
// }
// Concat("omkar","satya")



// // array methods

//  var array = [10,20,30,40,50]
// // in array if we want to remove a last element then we use "pop"
// array.pop()
// console.log(array);

// // if we want to remove the leading or starting element we use "shift"
// array.shift()
// console.log(array);

// // same to add an element at the end we use "push" . example--> push(10)

// array.push(100)
// console.log(array);

// // to add an element at the starting we use "unshift". example --> unshift(10)
// array.unshift(1000)
// console.log(array);

 // array methods using  functions

// // push function
// function Array(arr)
// {
//     arr.push(100)
//     console.log(arr)
// }
// Array([10,20,30,40])

// // pop function
// function Array(arr)
// {
//     arr.pop()
//     console.log(arr);
// }
// Array([20,30,50,40])

// unshift function
// function Arrya(arr)
// {
//     arr.unshift(10)
//     console.log(arr);
// }
// Arrya([20,40,80,100])

// // shift function
// function Array(arr)
// {
//     arr.shift()
//     console.log(arr); 
// }
// Array([30,60,90,120])


 // logical operators 
//   var a = 10
//   var b= 100
//   console.log(a>b);
//   console.log(b>a);
//   console.log (a==b); 



//=====================================================================================================================
//=====================================================================================================================


//  // palindrome 
// let num = "122"
// rev = num.split("").reverse().join("")
// console.log(num);
// console.log(rev);
// if (num == rev)
//  {
//      console.log( "yes");
// }
// else 
// {
// console.log("No");
// }

// //palindrome in a range
// for ( let i = 100;i<200;i++)
// {
//     let num=i.toString();
//     let rev= num.split("").reverse().join("")
//     if (num== rev)
//     {
//         console.log(i);
//     }
// }



// //  factorial
// var number= 7
// let factorial=1
// for(let i=number;i>=1;i--)
// {
//     factorial*=i;
//     console.log(factorial);
   
// }
//  console.log(factorial);



//  // armstrong number
//  let num1 = "153"
//  var num11 =num1.split("")
//    let result=num11[0]**3+num11[1]**3+num11[2]**3
//    console.log(result);

// armstrong number another approach
 



// // prime number finding
// var n = 50
// let flag = 0
// for (let i = 2;i<=n-1;i++)
// {
   
//    if (n%i==0)
//    {
//     flag=1
//    }
// }
//    if (flag==1)
//    {
//     console.log("it is not a prime number");
//    }
//    else{
//     console.log("it is   a prime number");
//    }

// // prime numbers (count)
// var count =0
// var  n=5
// for (let i=1;i<=n;i++)
// {
//     if (n%i==0)
//     {
//         count++
//     }
// }
// if (count>2)
// {
//     console.log("it is  not a prime number");
    
// }
// else 
// {
//     console.log("it is a prime number");
    
// }

// // prime number findig in range 
//  let count =0
// for(let i=100;i<=200;i++)
// {
//     let isprime = true
//     for (let j=2;j<=Math.sqrt(i);j++) 
//     {
//         if(i%j==0)
//         { 
//           isprime = false
          
//           break;
//         }
//     }
//     if (isprime ==  true)
//         {
//             count++   
//          console.log(i);
//         }
       
// }
// console.log(count);

// // prime numbers in a range using counting method 
// for (let i=10;i<=30;i++)
// {
//     var count =0
//     for (let j=2;j<=Math.sqrt(i);j++)
//     {
//        if (i%j==0)
//        {
//         count++
//         }
//     }

// if (count==0)
// {
//     console.log(i);
    
// }
// }

// //  finding factors of a number
// var a= 12 
//  let arr=[]
// for (let i=1;i<=a;i++)
// {
//     if ( a%i==0)
//     {
//       arr.push(i)
//     }   
// }
// console.log(arr);

// //  array loop
// var array =[1,2,3,4,5,6,7,8,9,10]
// for (let i=0;i<array.length;i++)
// {
//     console.log(array[i]);
// }
// // do while loop 
// var a= 1
// var b= 100
// do{
//     console.log(a);
//     a++
// }
// while(a<=b)
// {
//     console.log(a);
// }


