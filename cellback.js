//  let n1 = Number(prompt("fadlan gali number 1"))
//  let n2 = Number(prompt("fadlan gali number 2"))

//  function calculate (n1, n2, callback) {

//     let result = n1-n2
//      callback(result)
// }
// calculate( n1, n2, function(sub){
//     console.log("the result is: " + sub);
// });


let num1 = Number(prompt("fadlan gali number 1"))
let num2 = Number(prompt("fadlan gali number 1"))

function xisaab(result){
    alert("result is" + result)

}
function test(callback){
    let result=num1-num2;
    callback(result)
}

test(xisaab)


