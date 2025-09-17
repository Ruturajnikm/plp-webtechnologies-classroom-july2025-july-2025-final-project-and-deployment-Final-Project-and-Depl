// Save to /js/main.js
document.addEventListener('DOMContentLoaded',()=>{
  // set year in footer
  const y=new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=y});

  // nav toggle for mobile
  const navToggle=document.getElementById('navToggle');
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      document.querySelectorAll('.main-nav a').forEach(a=>{
        const visible = getComputedStyle(a).display !== 'none';
        a.style.display = visible ? 'none' : 'inline-block';
      });
    });
  }

  // simple form validation
  const contactForm=document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit',e=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const msg=document.getElementById('message').value.trim();
      const feedback=document.getElementById('formMsg');
      if(name.length<2||!email.includes('@')||msg.length<10){
        feedback.textContent='Please complete the form (message should be at least 10 characters).';
      } else {
        feedback.textContent='Thanks — message sent (demo).';
        contactForm.reset();
      }
    });
  }
});