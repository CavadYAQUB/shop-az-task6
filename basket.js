function getitem() {
    let basket=JSON.parse(localStorage.getItem('products'))
    if (basket.length===0) {
        document.getElementById('empty').classList.remove('d-none')
        document.getElementById('btn-delete').style.display='none'
    }else{
        document.querySelector('.table').classList.remove('d-none')
        let html='';
        for(let item of basket){
              html+=`
                   <tr>
                     <th scope="row">${item.Id}</th>
                      
                      <td style="width:20%">
                         <img src=${item.Image} alt="">
                      </td>
                      <td>${item.Name}</td>
                      <td> 
                          <input type="number" value=${item.Count}>
                      </td>
                      <td>${item.Price}</td>
                   </tr>
    
              `
    
        } 
        document.querySelector('table tbody').innerHTML=html
    }
   
}
getitem();

document.getElementById('btn-delete').onclick=function () {
    localStorage.removeItem('products')
    location.reload()
}