const pro1=document.querySelector('.pro1')
const div1=document.querySelector('.div1')
const try1=document.querySelector('.try1')
const hello1=document.querySelector('.hello1')
const hello3=document.querySelector('.hello3')
const pro2=document.querySelector('.pro2')
const a=1;
let b=a*60;

function hello()
{
    const min=Math.floor(b/60);
    let second=b%60;
    if(second<10)
    {
        second='0'+second
    }
    else{
        second;
    }

    pro2.innerText=`Time remaining:${min}:${second}`;
    b--;
}



let sum=0;
let c=0;







pro1.addEventListener('click',()=>{
    pro1.innerText="Reset Game"
    setInterval(hello,1000);
    for(const i=1;i<=10;i++)
{
    hello1.innerText=i
   
for(const j=1;j<=10;j++)
 {
    hello3.innerText=j
    sum=i*j
    try1.innerText=sum;
    try1.addEventListener('click',()=>
 {
if(try1.innerText==sum)
{
    div1.innerText=c+1
}
 })
 }
 
}
})