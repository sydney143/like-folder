var count=1;

var countElemtent= document.querySelector("h2");

console.log(countElemtent);



function add1(){

count ++;
countElemtent.innerText = count  +  "like(s)";
console.log(count);

}