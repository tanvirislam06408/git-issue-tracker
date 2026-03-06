
const loadAllIssuesCard=async()=>{
const res=await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
const data=await res.json();
console.log(data);

}












loadAllIssuesCard();
