(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  const passwordInput1 = document.getElementById('passwordInput1');
  const passwordInput2 = document.getElementById('passwordInput2');

  function validatePasswords() {
      if (passwordInput1.value !== passwordInput2.value) {
          passwordInput2.setCustomValidity("Passwords do not match.");
      } else {
          passwordInput2.setCustomValidity('');
      }
  }

  passwordInput1.addEventListener('input', validatePasswords);
  passwordInput2.addEventListener('input', validatePasswords);
  const button = document.getElementById('toggle-button');
  let isClose = false;
  
  button.addEventListener('click', () => {
      isClose = !isClose;
      button.innerHTML = isClose ? '<i class="fas fa-times text-black"></i>' : '<i class="fas fa-bars"></i>';
      sidebar.classList.toggle('d-none');
  });
  