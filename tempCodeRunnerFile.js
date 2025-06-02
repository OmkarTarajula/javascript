var a=10;
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

// // string methods 

// //length --> it finds the length of the string.
// var str="Meghana"
// console.log(str.length);

// // charAt --> we give the index number and it returns the character at that partiular index.
// var a="Bhavana"
// console.log(a.charAt(1));

// //indexOf ---> we give the character of the string and then it returns the indexof the letter.
// var s="Surya"
// console.log(s.indexOf("S"));

// // includes ---> include returns true if a particular word is present in teh string  or else it returns false.
// var h="helloworld"
// console.log(h.includes("world"));
// console.log(h.includes("bye"));

// // toUpperCase --> it converts all the letters in the string into upper case.
// var str="hello"
// console.log(str.toUpperCase());

// // toLowerCase --> it converts all the letters in the string into lower case.
// var str="HELLO"
// console.log(str.toLowerCase());

// // startsWith --> it will return true if we give a particular combination of characters in the string matches the starting letters of the string.
// var a="Good system"
// console.log(a.startsWith("Go"));
// console.log(a.startsWith("sy"));

// // endsWith --> it will return true if we give a particular combination of characters in the string matches the ending letters of the string.
// var g= "apple phone"
// console.log(g.endsWith("one"));
// console.log(g.endsWith("apple"));

// // trim ---> it will trims the spaces.
// var o = "   hello"
// console.log(o.trim());

// // replace ---> it will replace the part of the string with a new string .
// var y= "hello script"
// console.log(y.replace("hello","Java"));

//  // split--> it will split the string and it has three methods 
// var  k= "string is a string "
// console.log(k.split());
// console.log(k.split(""));
// console.log(k.split(" "));

// // reverse --> it will split the string into array and then reverse it only method 2 and 3 are possible 
// var l= "string is a string "
// console.log(k.split(" ").reverse());

// // join --> it changes array that we split becomes string 
// var m = "string is a string."
// console.log(m.split(" ").reverse().join(" "));
// console.log(m.split(" ").join(" "));


//  // palindrom 
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