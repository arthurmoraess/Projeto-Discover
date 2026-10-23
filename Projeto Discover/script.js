function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

  
    const img = document.querySelector("#profile img")

   
    if(html.classList.contains('light')){
        
        img.setAttribute('src', './assets/assets/arthur.jpg')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, de óculos escuros e usando uma jaqueta preta')

    } else {
      
        img.setAttribute('src', './assets/assets/arthur.jpg')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }

}