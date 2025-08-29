// Mobile nav toggle
const btn=document.getElementById('menuBtn');
if(btn){
  btn.onclick=()=>document.querySelector('.nav').style.display=
    document.querySelector('.nav').style.display==='flex'?'none':'flex';
}
// FAQ accordion
document.querySelectorAll('.faq .item').forEach(it=>{
  it.querySelector('.q').onclick=()=>it.classList.toggle('open');
});
// Year stamp
document.getElementById('y')?.append(new Date().getFullYear());
