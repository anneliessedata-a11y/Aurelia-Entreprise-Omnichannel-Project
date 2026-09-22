
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".mobile-toggle");
  const header=document.querySelector(".topbar")||document.querySelector(".site-header");
  if(toggle&&header) toggle.addEventListener("click",()=>header.classList.toggle("open"));
  const search=document.querySelector("#project-search");
  const cards=[...document.querySelectorAll("[data-project-card]")];
  if(search&&cards.length) search.addEventListener("input",()=>{
    const q=search.value.toLowerCase().trim();
    cards.forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?"":"none");
  });
});
