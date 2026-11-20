/* La rédaction du message se fait dans le navigateur. Rien n’est envoyé par ce formulaire. */
(()=>{'use strict';
const form=document.querySelector('[data-email-composer]');
if(!form)return;
const submit=form.querySelector('button[type="submit"]');if(submit)submit.disabled=false;
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const name=String(data.get('nom')||'').trim();
  const company=String(data.get('entreprise')||'').trim();
  const email=String(data.get('email')||'').trim();
  const topic=String(data.get('sujet')||'').trim();
  const msg=String(data.get('message')||'').trim();
  const subject='Demande de contact MÉTHOVIA — '+topic;
  const body=['Bonjour,','',msg,'','---','Nom : '+name,'Entreprise : '+(company||'Non précisée'),'E-mail : '+email,'Objet : '+topic].join('\n');
  const mailto='mailto:contact@methovia.fr?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  const feedback=document.getElementById('email-feedback');
  if(feedback){feedback.hidden=false;feedback.textContent='Votre messagerie doit maintenant s’ouvrir. Pensez à cliquer sur « Envoyer » dans votre application de messagerie. Si elle ne s’ouvre pas, écrivez directement à contact@methovia.fr.';}
  window.location.href=mailto;
});
})();
