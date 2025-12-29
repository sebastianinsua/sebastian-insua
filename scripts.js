document.addEventListener('DOMContentLoaded', function(){
  // año en el footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // menú móvil
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // simple feedback después de envío (si Formspree redirige no se muestra)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      const btn = form.querySelector('button[type="submit"]');
      if(btn){
        btn.disabled = true;
        btn.textContent = 'Enviando...';
      }
      setTimeout(() => {
        if(btn){
          btn.disabled = false;
          btn.textContent = 'Enviar solicitud';
        }
      }, 3000);
    });
  }
});
