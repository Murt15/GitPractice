// var itemList=document.querySelector('#items');
//  console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.firstChild);
// itemList.children[1].style.backgroundColor='yellow';
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello World';
// console.log(itemList.firstElementChild);
// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent='Hi'
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// var newDiv=document.createElement('Div');
// console.log(newDiv);
// newDiv.className='Bye';
// newDiv.setAttribute('title','Helllo Div');

// var newDivtext=document.createTextNode('HEllo');
// newDiv.appendChild(newDivtext);
// var cont=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// cont.insertBefore(newDiv,h1);

// var li=document.getElementById('items');
//  console.log(li.parentNode);

var it=document.getElementById('items');
console.log(it.innerHTML);
it.innerHTML="<li>HEllo</li>"+it.innerHTML;

