let list =[
    {rank:1,name:'aron',point:0},
    {rank:2,name:'itai',point:1},
    {rank:3,name:'hodi',point:2},
    {rank:4,name:'dan',point:3}
]

let a =0

  for (var i = 0; i < list.length; i++) {
      console.log(list[i].rank);
      
    document.getElementById("more").innerHTML +=`<table>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Points</th>
        <th>Like/Dislike</th>
    </tr>
    <tr>
            <td>${list[i].rank}</td>
            <td>${list[i].name}</td>
            <td class="points">${list[i].point}</td>
            <td><i onclick="myFunction(${i})" class="fa fa-thumbs-up"></i>
                <i class="fa fa-thumbs-down"></i>
            </td>
        </tr>
    </table>
    `;
    
function myFunction(id){
 console.log(id);
 
  a = list[id].point +=10
    
     points.innerHTML = a


  }

  }
  

  let points = document.querySelector('.points')
  let count =0
    

