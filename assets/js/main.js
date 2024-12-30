
document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');
  const submitButton = document.getElementById('login');
  const errorNotice = document.getElementById('error-notice');
  const form = document.getElementById('login_form');
  const login_auth = document.getElementById('login_auth');
  const login_load = document.querySelector('#loading');

  // Validate the form
  function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    if (!username) {
      usernameError.style.display = 'block';
      usernameInput.style.borderColor = 'red';
      hasError = true;
    } else {
      usernameError.style.display = 'none';
      usernameInput.style.borderColor = 'rgba(0, 0, 0, 0.05)';
    }

    if (!password) {
      passwordError.style.display = 'block';
      passwordInput.style.borderColor = 'red';
      hasError = true;
    } else {
      passwordError.style.display = 'none';
      passwordInput.style.borderColor = 'rgba(0, 0, 0, 0.05)';
    }

    submitButton.disabled = hasError;
    errorNotice.style.display = hasError ? 'block' : 'none';

    return !hasError;
  }
  if (form) {
    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    form.addEventListener('submit', function (event) {
      if (!validateForm()) {
        event.preventDefault();
        if (login_auth) login_auth.style.display = 'none';
      } else {
        if (login_load) {
          login_auth.style.display = 'none'
          login_load.style.display = 'flex';
        }
        event.preventDefault(); 
        setTimeout(() => {
          if (login_load) {
            login_load.style.display = 'none';
          }
          form.submit(); 
        }, 2000);
      }
    });
  }
  
if(document.getElementById('close_toast')){
  document.getElementById('close_toast').addEventListener('click', function() {
      document.querySelector('.toast-container').classList.remove('show') // Hide immediately when close button is clicked
  });

}
// first modal
if(document.querySelector('#orderButton')){
    const orderButton = document.getElementById('orderButton');
    const modalOverlay = document.getElementById('modalOverlay');
    const orderClose = document.getElementById('orderClose');
    const cancelButton = document.getElementById('cancelButton');
    const confirmButton = document.getElementById('confirmButton');

    // Open modal
    orderButton.addEventListener('click', () => {
      modalOverlay.classList.add('show');
    });

    // Close modal
    const closeModal = () => {
      modalOverlay.classList.remove('show');
    };

    orderClose.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);

    // Close modal on clicking outside
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Confirm button action
    confirmButton.addEventListener('click', () => {
      alert('Confirmed!');
      closeModal();
    });
}
// filter
if(document.querySelector('.filter')){
  document.querySelector('.filter').onclick = function(e){
  e.preventDefault()
  document.querySelector('.filter_items').classList.add('active')
  }
}

// all modall
  const modalAll =  document.querySelectorAll('.modal')
  const modal = document.querySelector('#new_orders');
  const modal_products = document.querySelector('#modal_products');
  const modal_open_products = document.querySelector('.open_lists')
  const openBtn = document.querySelector('.new_order');
  // new order modal show
  if(openBtn){
    openBtn.addEventListener('click', function (e) {
      modal.classList.add('show');
      e.preventDefault()
    });
  }
  // order modal next action
  if(modal_open_products){
    modal_open_products.addEventListener('click', function (e) {
      modal_products.classList.add('show');
      modal.classList.remove('show');
      e.preventDefault()
    });
  }  
  // toastfy
  let toast = document.querySelector('.toastfy')
  if(document.querySelector('.toast_exit')){
  document.querySelector('.toast_exit').onclick = function () {
    if(toast){
      toast.classList.remove('show')
    }
  }   
  }
 
  setTimeout(() => {
    if(toast){

      toast.classList.remove('show')
    }
  }, 4000);
  // edit modal
  const edit_btn = document.querySelectorAll('.btn_grup_table .icon:nth-child(2)')
  const delete_btn = document.querySelectorAll('.btn_grup_table .icon:nth-child(1)')
  const update_btn = document.querySelector('#modal_open_update')
  const edit_modal  = document.querySelector('#edit_modal')
  const edit_modal2  = document.querySelector('#edit_modal2')
  const delete_modal  = document.querySelector('#delete_modal')
  const delete_item = document.querySelector('#delete_item')
  const status_btn = document.querySelector('#status_open')
  const status_modal = document.querySelector('#status')
  if(edit_btn){
    edit_btn.forEach(icon_edit => {
      icon_edit.onclick = function(){
        edit_modal.classList.add('show')
      }
    });
  }
  if(delete_item){
    delete_item.onclick = function (e) {
      e.preventDefault()
      delete_modal.classList.add('show')
      }
  }
  if(delete_btn){
    delete_btn.forEach(icon_edit => {
      icon_edit.onclick = function(){
        delete_modal.classList.add('show')
      }
    });
  }
  if(update_btn){
    update_btn.onclick= function (e) {
      e.preventDefault()
      edit_modal2.classList.add('show')
      }
  }
  if(status_btn){
    status_btn.onclick= function(e){
      e.preventDefault()
      status_modal.classList.add('show')
    }
  }
  // all modal close
  function closeModal(modal) {
    if(modal){

      modal.classList.remove('show'); 
    }
  }
  // all moda x close
document.querySelectorAll('.modal_exit').forEach((exitButton) => {
  exitButton.addEventListener('click', () => {
    const modal = exitButton.closest('.modal'); // Tegishli modalni topish
    closeModal(modal); // Modalni yopish
  });
});
// no update
document.querySelectorAll('.wrapper button[type=reset]').forEach((exitButton) => {
  exitButton.addEventListener('click', () => {
    const modal = exitButton.closest('.modal');
    closeModal(modal); 
  });
});
// modal bg clikck hide
modalAll.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  })
})
// toast active
document.querySelectorAll('.wrapper button[type=submit]').forEach((sendBtn) => {
  if(sendBtn){

    sendBtn.onclick = function (e) { 
      e.preventDefault()
      const modal = sendBtn.closest('.modal');
      closeModal(modal); 
      if(toast){

        toast.classList.add('show')
      }
      setTimeout(() => {
        if(toast){
          toast.classList.remove('show')
        }
        
      }, 4000);
     }
  }
})
});

