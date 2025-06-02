var a=10;
console.log(a);

const b = 20;
console.log(b);

let c=30;
console.log(c);

// number
var a=10;
console.log(a);

//string
var str ="omkar";
console.log(str);

//boolean
var bool=true;
console.log(bool);

//array
var arr =[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

var array =[1,2,"hello",true,false,[20,30,40],{a1:1,a2:2,a3:3}]
console.log(array[1]);
console.log(array[2]);
console.log(array[4]);
console.log(array[5][1]);
console.log(array[6].a2);

//object                 
var obj = {
    a1:1,
    a2:"hello",
    a3:true,
    a4:[1,2,3,4,5],
    a5:{
        b1:"hi",
        b2:"hello",
        b3:true,
        b4:30,
        b5:[10,20,30]
    }
}
console.log(obj.a1);
console.log(obj.a2);
console.log(obj.a3);
console.log(obj.a4[3]);
console.log(obj.a5.b1);
console.log(obj.a5.b3);
console.log(obj.a5.b4);
console.log(obj.a5.b5[2]);

//  null
var n= null;
console.log(n);

// un
var v;
console.log(v);


var M={
    name:"Meghana",
    user1:[1,2,3,4,5,[6,7,8,9]],
    user2:{
        c:"Hello World",
        d:"j",
        t:[8,3,2,4,{
            a1:20,
            a2:30
        },[2,5,7]]
    }
}
console.log(M.user2.t[5][2]);


var omkar={
    name:"omkar",
    obj1:{
        user1:1,
        user2:[1,2,3,4,5],
        user3:{
            a1:2,
            a2:[1,4,6,7,{
                b1:2,
                b2:true,
                b3:[1,4,6,3]
            }]
        }

    }
}

omkar.obj1.user3.a2[4].b3[1]=7
console.log(omkar)
console.dir(omkar,{depth:null });


//arithmetic operators
var a=10;
var x=20;
var z=a+x;
var d=a-x;
var e= a/x;
var f=a%x;
console.log(z,d,e,f);

//functions
//function with console
function sum(a,b,c){
    console.log(a+b+c);

}
sum(10,20,30)


function add(x,y,z){
    return x+y+z;
}
console.log(add(10,20,30));

function sumOf(a,b)
{
    console.log(a>b);
}
sumOf(10,20)


var str="Meghana"
console.log(str.length);

var a="Bhavana"
console.log(a.charAt(1));

var s="Surya"
console.log(s.indexOf("S"));

var h="helloworld"
console.log(h.includes("world"));
console.log(h.includes("bye"));

var str="hello"
console.log(str.toUpperCase());

var str="HELLO"
console.log(str.toLowerCase());

var a="Good system"
console.log(a.startsWith("Go"));
console.log(a.startsWith("sy"));

var g= "apple phone"
console.log(g.endsWith("one"));
console.log(g.endsWith("apple"));

var o = "   hello"
console.log(o.trim());

var y= "hello script"
console.log(y.replace("hello","Java"));