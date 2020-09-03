let list =[
    {rank:1,name:'aron',point:0},
    {rank:2,name:'itai',point:1},
    {rank:3,name:'hodi',point:2},
    {rank:4,name:'dan',point:3}
]
let templete = "";


let a =0
const table = document.querySelector("table");
function createTemplate() {


  for (var i = 0; i < list.length; i++) {
      console.log(list[i].rank);
      
      templete +=`
   
    <tr>
            <td>${list[i].rank}</td>
            <td>${list[i].name}</td>
            <td class="points">${list[i].point}</td>
            <td><i onclick="myFunction(${i})" class="fa fa-thumbs-up"></i>
                <i class="fa fa-thumbs-down"></i>
            </td>
        </tr>
    
    `;
  }
  return templete;

  }
  table.innerHTML += createTemplate();

     
function myFunction(id){
    console.log(id);
    
    list[id].point +=10
       
   
    table.innerHTML = createTemplate();

     }
   
  

  let points = document.querySelector('.points')
  let count =0
    

