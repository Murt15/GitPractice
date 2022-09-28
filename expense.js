function saveToLocalStorage(event) {
    event.preventDefault();
    const expenseAmount = event.target.expenseamt.value;
    const description = event.target.description.value;
    const category = event.target.category.value 
    const obj = {
        expenseAmount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj))
    console.log(localStorage)
   showNewUserOnScreen(obj)
}




function showNewUserOnScreen(user){
    document.getElementById("amt").value=""
    document.getElementById('des').value = '';
    document.getElementById('cat').value = '';
   

    const parentNode = document.getElementById('allExpenses');
    const childHTML = `<li id=${user.amt}> ${user.expenseAmount} - ${user.description} - ${user.category}
                            <button onclick=deleteUser('${user.amt}')> Delete Expense</button>
                            <button onclick=editUserDetails('${user.expenseAmount}','${user.description}','${user.category}')>Edit Expense</button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editUserDetails(expenseamt,description,category){

    document.getElementById('amt').value = expenseamt;
    document.getElementById('des').value = description;
    document.getElementById('cat').value = category;
    

   deleteUser(expenseamt);
}
function deleteUser(expenseamt){
    
  
    localStorage.removeItem("user.description");
    removeUserFromScreen(expenseamt);

}

function removeUserFromScreen(expenseamt){
    const parentNode = document.getElementById('allExpenses');
    const childNodeToBeDeleted = document.getElementById(expenseamt);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}


   
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj)
    }
})

