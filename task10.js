function store(event){
    event.preventDefault();
    var fullName=document.getElementById('name').value;
    var emailId=document.getElementById('email').value;
    var phoneNo=document.getElementById('mobilephone').value;
    var timeforCall=document.getElementById('time').value;


    localStorage.setItem('Name',fullName);
    localStorage.setItem('Email',emailId);
    localStorage.setItem('Phone',phoneNo);
    localStorage.setItem('Time',timeforCall);

}

