
// const form = document.getElementById('login-form');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const usernameError = document.getElementById('username-error');
// const passwordError = document.getElementById('password-error');
// const errorNotice = document.querySelector('.error-notice');
// const submitButton = document.querySelector('#login-form button');

// // Formni tekshirish funksiyasi
// function validateForm() {
//   const username = usernameInput.value.trim();
//   const password = passwordInput.value.trim();

//   let hasError = false;

//   if (!username) {
//     usernameError.style.display = 'block';
//     document.getElementById('username').style.borderColor='red'

//     hasError = true;
//   } else {
//     document.getElementById('username').style.borderColor='rgba(0, 0, 0, 0.05)'
//     usernameError.style.display = 'none';
//   }

//   if (!password) {
//     document.getElementById('password').style.borderColor='red'
//     passwordError.style.display = 'block';
//     hasError = true;
//   } else {
//     passwordError.style.display = 'none';
//       document.getElementById('password').style.borderColor='rgba(0, 0, 0, 0.05)'
//   }

//   // Xatolik bo'lsa, tugmani o'chirib qo'yamiz
//   submitButton.disabled = hasError;

//   // Xatolik bo'lsa global xabarni ko'rsatamiz, aks holda yashiramiz
//   errorNotice.style.display = hasError ? 'block' : 'none';

//   return !hasError; // Xatolik bo'lmasa `true` qaytaradi
// }

// // Input o'zgarishlarini kuzatish
// if(document.querySelector('#login-form ')){
// usernameInput.addEventListener('input', validateForm);
// passwordInput.addEventListener('input', validateForm);    
// // Form yuborilayotganda
// form.addEventListener('submit', function (e) {
//     if (!validateForm()) {
//       // Xatolik bo'lsa, formni yuborishni to'xtatamiz
//       e.preventDefault();
//     }
//   });
// }

// // toast
// // document.getElementById('show-toast').addEventListener('click', function() {
// //     const toast = document.getElementById('toast-container');
// //     document.querySelector('.toast-container').classList.add('show')

// //     setTimeout(function() {
// //         document.querySelector('.toast-container').classList.remove('show')
// //     }, 4000);
// // });

// document.getElementById('close_toast').addEventListener('click', function() {
//     document.querySelector('.toast-container').classList.remove('show') // Hide immediately when close button is clicked
// });
// if(document.querySelector('#orderButton')){
//     const orderButton = document.getElementById('orderButton');
//     const modalOverlay = document.getElementById('modalOverlay');
//     const orderClose = document.getElementById('orderClose');
//     const cancelButton = document.getElementById('cancelButton');
//     const confirmButton = document.getElementById('confirmButton');

//     // Open modal
//     orderButton.addEventListener('click', () => {
//       modalOverlay.classList.add('show');
//     });

//     // Close modal
//     const closeModal = () => {
//       modalOverlay.classList.remove('show');
//     };

//     orderClose.addEventListener('click', closeModal);
//     cancelButton.addEventListener('click', closeModal);

//     // Close modal on clicking outside
//     modalOverlay.addEventListener('click', (e) => {
//       if (e.target === modalOverlay) {
//         closeModal();
//       }
//     });

//     // Confirm button action
//     confirmButton.addEventListener('click', () => {
//       alert('Confirmed!');
//       closeModal();
//     });
// }

document.querySelector('.filter').onclick = function(e){
e.preventDefault()
document.querySelector('.filter_items').classList.add('active')
}

document.addEventListener('DOMContentLoaded', function () {
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
  document.querySelector('.toast_exit').onclick = function () {
    toast.classList.remove('show')
  }
  setTimeout(() => {
    toast.classList.remove('show')
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
    modal.classList.remove('show'); 
  }
  // all moda x close
document.querySelectorAll('.modal_exit').forEach((exitButton) => {
  exitButton.addEventListener('click', () => {
    const modal = exitButton.closest('.modal'); // Tegishli modalni topish
    closeModal(modal); // Modalni yopish
  });
});
// no update
document.querySelectorAll('button[type=reset]').forEach((exitButton) => {
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
document.querySelectorAll('button[type=submit]').forEach((sendBtn) => {
  sendBtn.onclick = function (e) { 
    e.preventDefault()
    const modal = sendBtn.closest('.modal');
    closeModal(modal); 
    toast.classList.add('show')
    setTimeout(() => {
      toast.classList.remove('show')
    }, 4000);
   }
})
});

