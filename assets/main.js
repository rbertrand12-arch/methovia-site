(() => {
 const b=document.querySelector('[data-menu-toggle]'), n=document.querySelector('[data-main-nav]');
 if(b&&n){b.addEventListener('click',()=>{const open=n.getAttribute('data-open')==='true';n.setAttribute('data-open',String(!open));b.setAttribute('aria-expanded',String(!open));b.textContent=open?'☰ Menu':'✕ Fermer'});
 n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.setAttribute('data-open','false');b.setAttribute('aria-expanded','false');b.textContent='☰ Menu'}));}
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
})();
