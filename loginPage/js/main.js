document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeSlashIcon = document.getElementById('eye-slash-icon');

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      // Cek tipe input saat ini
      const isPassword = passwordInput.getAttribute('type') === 'password';

      // Toggle tipe input antara 'password' dan 'text'
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

      // Toggle visibilitas ikon mata
      if (isPassword) {
        eyeIcon.classList.add('hidden');
        eyeSlashIcon.classList.remove('hidden');
      } else {
        eyeIcon.classList.remove('hidden');
        eyeSlashIcon.classList.add('hidden');
      }
    });
  }
});