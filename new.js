var obj={num:2};

var addToThis=function(a,b){

    return this.num+a+b;

};

console.log(addToThis.call(obj,this.a));

var arr=[3,5];
console.log(addToThis.apply(obj,arr));
var  bound=addToThis.bind(obj);
console.log(bound);

var student ={age:20};

var print=function(){
    return this.age;
    
}

var p=print.bind(student);
console.log(p());


let multiply=function(x,y){
    console.log(x*y);
}


let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5)


let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree=multiply1(3);
multiplyByThree(5)