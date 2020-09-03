// let count =0
// let buttons= document.querySelectorAll('.btn')
// let score = document.querySelector('score')
// buttons.addEventListener('click',function(){
//     console.log('sucsses');
    
// //  count++
// })
//  let count =0;
// let score = document.querySelector('.points');

// [...document.querySelectorAll('.btn')].forEach(function(item) {
//     item.addEventListener('click', function() {
//       console.log(count);
//       count++
//       score.innerHTML = count

//     });

//      });


// let i = 0;


// document.querySelectorAll('.btn').forEach(element => {
//   ((j) => element.addEventListener("click", () => {
//       count++

//     console.log(j);
//   }))(i);
//   i++;
//   score.innerHTML = count



// });

// let count =0;


// function add(){
//     count++
   

// }
// console.log(add());

// console.log(count);



// let points = document.querySelector('.points')
let count =0
window.onload=function() {
    var buts = document.querySelectorAll(".points");
    for (var i=0;i<buts.length;i++) {
        buts[i].addEventListener('click',function(){
                console.log('sucsses');
                
            count++
            buts[i].innerHTML = count
            })
  }
}