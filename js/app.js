const btnOpenLogin = document.querySelector('.login');
const modalLoginForm = document.querySelector('.modal-content');
const closeLoginForm = document.querySelector('.js-modal-content-close-login');

const btnOpenMap = document.querySelector('.js-map');
const modalMap = document.querySelector('.modal-content-map');
const closeMap = document.querySelector('.js-modal-content-close-map');

const login = document.querySelector('[name="login"]');
const loginForm = document.querySelector('.login-form');

btnOpenLogin.addEventListener('click', function(event) {
	modalLoginForm.classList.add('is-show');
	login.focus();
});

closeLoginForm.addEventListener('click', function(event) {
	modalLoginForm.classList.remove('is-show');
});

btnOpenMap.addEventListener('click', function(event) {
	modalMap.classList.add('is-show');
});

closeMap.addEventListener('click', function(event) {
	console.log(event)
	modalMap.classList.remove('is-show');
});

loginForm.addEventListener('submit', function(event) {

	if ( login.value == '' ) {

		login.classList.add('modal-error');

		setTimeout(function() {
			login.classList.remove('modal-error');
		}, 1000)

	} else {
		login.classList.remove('modal-error');
	}
});