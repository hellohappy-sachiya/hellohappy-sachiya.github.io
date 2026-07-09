// 通り道の線:スクロールに合わせて伸びる
const flow = document.getElementById('flow2') || document.querySelector('.michi-flow');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateFlow(){
  const h = document.documentElement;
  const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
  flow.style.height = (p * 100) + '%';
}
if(!reduce){
  document.addEventListener('scroll', updateFlow, {passive:true});
  updateFlow();
}else{
  flow.style.height = '100%';
}
// ふわりと現れる
const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
