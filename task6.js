var thirditem=document.querySelector('.list-group-item:nth-child(3)');
console.log(thirditem);
thirditem.style.display='none';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

var titles=document.querySelectorAll('.list-group-item');
console.log(titles)
titles[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


