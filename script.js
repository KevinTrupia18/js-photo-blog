
// 1. Individuiamo il contenitore
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
  });