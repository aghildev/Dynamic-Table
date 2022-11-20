const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const phoneEl = document.querySelector("#contact");
const tableEl = document.querySelector("table");
const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('.tbody');
const delEl = document.querySelector(".delete-btn");
const errorEl = document.querySelector(".error");
const successEl = document.querySelector(".success");



function createTable(e){
    e.preventDefault();
    const nameVal = nameEl.value;
    const emailVal = emailEl.value;
    const phoneVal = phoneEl.value;
    if (nameVal == "" || emailVal == "" || phoneVal == "") {
        errorEl.innerText = "Empty input field (s)";
        errorEl.classList.add("error");
        setTimeout(() => {
            errorEl.innerText = "";
        }, 1000);
    }
    
    if(nameVal && emailVal && phoneVal){
        tbodyEl.innerHTML += `
       <tr>
       <td class="name-td">${nameVal}</td>
       <td class="mail-td">${emailVal}</td>
       <td class="num-td">${phoneVal}</td>
       <td class="btn-td"><button class="delete-btn">Delete Row</button></td>
       </tr>`
     
     
       nameEl.value = "";
       emailEl.value = "";
       phoneEl.value = ""; 
       //errorEl.style.display = "block"; 
    }
}

formEl.addEventListener('submit', createTable);

tableEl.addEventListener("click",(e)=>{
    if(!e.target.classList.contains("delete-btn")){
        return;
    } 
    const btn = e.target;
    btn.closest('tr').remove();
    successEl.innerText = "Item Deleted Successfully";
    successEl.classList.add("success");
    setTimeout(() => {
        successEl.innerText = "";
    }, 1000);
})