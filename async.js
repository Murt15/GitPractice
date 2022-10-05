// console.log("person1: shows ticket");
// console.log("person2: shows ticket");
// const preMovie=async()=>{
//     const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Ticket');
//     },3000)
//     });
//     const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
//     const addButter=new Promise((resolve,reject)=>resolve(`butter`))
//     const getColdDrinks=new Promise((resolve,reject)=>resolve(`Colddrinks`))
//     let ticket=await promiseWifeBringsTicket
//     console.log(`wife: i have ${ticket}`)
//     console.log("husband: we should go in")
//     console.log("wife: i am hungry");

//     let popcorn=await getPopcorn;
//     console.log(`husband :i got some ${popcorn}`)
//     console.log("husband: we should go in")
//     console.log("wife: i need butter on my popcorn");
//     let butter=await addButter;
//     console.log(`husband : i got some ${butter}`)
//     console.log('wife : i also need some cold drink')

//     let Colddrinks=await getColdDrinks;
//     console.log(`husband:i brought ${Colddrinks}`)
//     console.log('wife: Now lets go fast');


    
//     return ticket;
// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`))


// console.log("person4: shows ticket");
// console.log("person5: shows ticket");
//4
const posts=[
    {title:'Post One',body:'This is Post One',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is Post Two',createdAt:new Date().getTime(),lastactivity:new Date().getTime()}
]
let intervalId=0;
function getPosts(){
    clearInterval(intervalId)

    intervalId = setInterval(()=>{
        let output= " ";
        posts.forEach((post,index) => {
            output+=`<li>${post.title}--last updated ${(new Date().getTime()-post.createdAt)/1000}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
   
}
function createPost(post){
    ;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        
        const error=false;
        if(!error){
            resolve(posts[1].lastactivity);
        }else{
            reject();
        }
    },1000)
    })
    
}
function updateLastUserActivity(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            posts[1].lastactivity=new Date().getTime();
            resolve(posts[1].lastactivity)
        },3000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
        if(posts.length>0){
            resolve();
        }else{
            reject(console.log("Array is empty now."));
        }
        posts.pop();
        },3000)
        
    })
}
async function into(){
    let msg = await createPost({ title: 'post Three', body: 'This is post three'});
    getPosts();
    
     //console.log(msg);
   }
   
   async function delinto(){
     try{
    let del = await deletePost();
     console.log(del);
     }catch(err){ console.log(err)};
   }
   into();
   delinto();
