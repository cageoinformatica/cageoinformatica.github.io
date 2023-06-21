//Código para funcionalidad de botón "Ir arriba"

window.addEventListener('scroll', function() {
    var button = document.getElementById('go-top-button');
    if (window.scrollY > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  
  document.getElementById('go-top-button').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  
  