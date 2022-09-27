
class Student{
   static count=0
    
constructor(name , age , phoneNumber,boardMarks){
    this.name=name;
    this.age=age;
    this.phoneNumber=phoneNumber;
    this.boardMarks=boardMarks;
    Student.count++;
 
    

    Student.prototype.checkEligibility=function(){
        if(this.boardMarks>40){
            console.log("Eligible")
        }else
            console.log('Not Eligible')


    
    }

    
}
setPlacements(minPlacementAge){
    return (minMarks)=>{
        if(this.boardMarks>minMarks && this.age>minPlacementAge){
            console.log(this.name+" is Eligible for placements")
        }else{
            console.log(this.name+"is not Eligible for placements")
        }
    }
}


}

//Create Objects
let Murtaza=new Student('Murtaza Topiwala','26','1234',"47");
let  Ibrahim=new Student('Ibrahim Bohra','21','4234',"50");
let Dinesh=new Student('Dinesh Chavan','32','3212',"25");
let Faraz=new Student('Faraz Shaikh','38','4244',"30");
let Hafeez=new Student('Hafeez Shaikh','27','3453',"05");

//Eligibility
Murtaza.checkEligibility();
Hafeez.checkEligibility();
//Return count
console.log(Student.count);
//Eligibility for Placements
Murtaza.setPlacements(25)(40);
Ibrahim.setPlacements(25)(40);
Dinesh.setPlacements(25)(40);
Faraz.setPlacements(25)(40);
Hafeez.setPlacements(25)(40);





