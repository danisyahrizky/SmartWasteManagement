document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (e) => {
        // Validasi sederhana: Cek apakah password cocok
        if (password.value !== confirmPassword.value) {
            e.preventDefault(); // Mencegah form terkirim
            alert("Password tidak cocok!");
        } else {
            // Jika cocok, biarkan form submit (atau tambahkan logika AJAX di sini)
            // alert("Pendaftaran berhasil! (Simulasi)");
        }
    });
});