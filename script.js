const forgiveBtn = document.getElementById('forgiveBtn');
const moodBtn = document.getElementById('moodBtn');
const page1 = document.getElementById('page1');
const body = document.body;

// Event listener for the "Iya Dimaafin" button
forgiveBtn.addEventListener('click', () => {
    page1.style.display = 'none'; // Sembunyikan halaman pertama

    // Buat elemen baru untuk menampilkan pesan terima kasih
    const message = document.createElement('h1');
    message.innerText = "Terima kasih sayang ❤️";
    message.style.color = "#ff3399"; 
    message.style.fontSize = "32px";
    message.style.marginTop = "20%";

    body.appendChild(message); // Tambahkan pesan ke halaman
});

// Event listener for the "Gamau, Masi Betmut" button (Button Escape Effect)
moodBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - 100); // Random X position
    const randomY = Math.random() * (window.innerHeight - 100); // Random Y position
    moodBtn.style.position = 'absolute'; // Make the button position absolute
    moodBtn.style.left = `${randomX}px`; // Set random X position
    moodBtn.style.top = `${randomY}px`; // Set random Y position
});

// Efek hati saat menggerakkan mouse
document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div'); // Buat elemen hati
    heart.innerHTML = '❤️';  
    heart.style.position = 'absolute';
    heart.style.left = `${e.clientX}px`; // Posisi X mengikuti mouse
    heart.style.top = `${e.clientY}px`; // Posisi Y mengikuti mouse
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
    heart.style.transform = `translateY(-10px) scale(1.2)`;
    heart.style.opacity = '1';

    document.body.appendChild(heart); // Tambahkan hati ke body

    // Hapus hati setelah animasi selesai
    setTimeout(() => {
        heart.style.opacity = '0';
        heart.style.transform = `translateY(-20px) scale(0.8)`;
        setTimeout(() => {
            heart.remove(); // Hapus hati setelah fade-out
        }, 500);
    }, 1000);
});
