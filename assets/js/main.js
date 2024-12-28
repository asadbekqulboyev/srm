
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
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('#new_orders');
  const modal_products = document.querySelector('#modal_products');
  const modal_open_products = document.querySelector('.open_lists')
  const openBtn = document.querySelector('.new_order');
  const closeBtn = document.querySelector('.close_modal');
const close_products = document.querySelector('.close_product_modal')
  // Modalni ochish
  openBtn.addEventListener('click', function(e) {
    modal.classList.add('show');
    e.preventDefault()
  });
  modal_open_products.addEventListener('click', function(e) {
    modal_products.classList.add('show');
    modal.classList.remove('show');
    e.preventDefault()
  });

  // Modalni yopish
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
  });
  // products modal
  close_products.addEventListener('click', function() {
    modal_products.classList.remove('show');
  });
  // Modalning orqa foniga bosganda yopish
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
  modal_products.addEventListener('click', function(event) {
    if (event.target === modal_products) {
      modal_products.classList.remove('show');
    }
  });
});
let toast = document.querySelector('.toastfy')
document.querySelector('.toast_exit').onclick =  function(){
  toast.classList.remove('show')
}
setTimeout(() => {
  toast.classList.remove('show')
}, 4000);