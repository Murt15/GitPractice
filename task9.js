var filter = document.getElementById('filter');

var form = document.getElementById('addForm');

var itemList = document.getElementById('items');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);


filter.addEventListener('keyup', filterItems);


function addItem(e)
{
 e.preventDefault();
  var newItem = document.getElementById('item').value+' '+document.getElementById('description').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  var submitBtn=document.createElement('button');
  
  submitBtn.style.marginLeft='910px';


  submitBtn.className='edit';

 
  submitBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(submitBtn);

  itemList.appendChild(li);
}

function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Confirm?'))
    {
      var li = e.target.parentElement;

      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
    
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item)
    {
      var itemName = item.firstChild.textContent;
     

      if(itemName.toLowerCase().indexOf(text) != -1)
      {
        item.style.display = 'block';
      } 
      else 
      {
        item.style.display = 'none';
      }
    });
  }