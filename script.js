
/*// 1. Individuiamo il contenitore
const wrapper = document.querySelector('.wrapper');

// 2. URL dell'API
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

// 3. Eseguiamo la chiamata con Axios
axios.get(apiUrl)
  .then(response => {
    // Axios mette i dati che arrivano dal server dentro la proprietà .data
    const photos = response.data;

    // Svuotiamo il wrapper
    wrapper.innerHTML = '';

    // 4. Cicliamo l'array di dati
    photos.forEach(photo => {
      const cardHtml = `
        <div class="card">
          <img class="pin" src="./img/pin.svg">
          <img class="photo" src="${photo.url}" alt="${photo.title}">
          <p class="title">${photo.title}</p>
          <small>${photo.date}</small> 
        </div>
      `;

      wrapper.innerHTML += cardHtml;
    });
  })
  .catch(error => {
    // Axios intercetta automaticamente gli errori come  404, 500 o problemi di rete
    console.error('Errore durante la chiamata Axios:', error); 
  }); */






  const wrapper = document.querySelector('.wrapper');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close-btn');

const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(apiUrl)
  .then(response => {
    const photos = response.data;
    wrapper.innerHTML = '';

    photos.forEach(photo => {
      // 1. Creiamo l'HTML della card
      const cardHtml = `
        <div class="card">
          <img class="pin" src="./img/pin.svg">
          <img class="photo" src="${photo.url}" alt="${photo.title}">
          <p class="title">${photo.title}</p>
          <small>${photo.date}</small> 
        </div>
      `;

      // 2. Lo aggiungiamo al wrapper
      wrapper.innerHTML += cardHtml;
    });

    // 3. DOPO aver creato tutte le card, aggiungiamo l'evento click
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
      card.addEventListener('click', () => {
        // Recuperiamo l'URL dell'immagine dentro la card cliccata
        const clickedImgSrc = card.querySelector('.photo').src;
        
        // Milestone 3: Impostiamo l'immagine dell'overlay
        overlayImg.src = clickedImgSrc;
        
        // Milestone 2: Facciamo comparire l'overlay togliendo la classe d-none
        overlay.classList.remove('d-none');
      });
    });
  });

// 4. Gestiamo la chiusura dell'overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
});