
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Do you remember what day is today?').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Another month, another chapter of us. Not always perfect, not always easy but always real. Thank you for growing with me, laughing with me, and choosing me, even on the days i forget how to love myself. You're not just my person but you're my peace. Thank you for always being by my side and always being the home i come home to. You're mean so much for me, i'm better with you kaak. i know you love brown so i bought this flower for youuu =33 ";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
