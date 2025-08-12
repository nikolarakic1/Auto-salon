document.addEventListener("DOMContentLoaded", function () {
  // Svetla/Tamna tema
  const dugmeTema = document.getElementById("dugme-tema");
  const telo = document.body;

  if (dugmeTema) {
    dugmeTema.addEventListener("click", () => {
      telo.classList.toggle("svetla-tema");

      if (telo.classList.contains("svetla-tema")) {
        dugmeTema.textContent = "Tamna tema";
      } else {
        dugmeTema.textContent = "Svetla tema";
      }
    });
  }

  // Hamburger meni
  const hamburger = document.getElementById("hamburger");
  const meni = document.getElementById("meni");

  if (hamburger && meni) {
    hamburger.addEventListener("click", function () {
      meni.classList.toggle("prikazi");
    });
  }

  // Galerija slajder
  const slajdovi = document.querySelectorAll('.slajd');
  const ukupno = slajdovi.length;

  if (ukupno > 0) {
    let trenutni = 0;

    const dugmeDesno = document.querySelector('.desno');
    const dugmeLevo = document.querySelector('.levo');

    if (dugmeDesno) {
      dugmeDesno.addEventListener('click', () => {
        slajdovi[trenutni].classList.remove('aktivan');
        trenutni = (trenutni + 1) % ukupno;
        slajdovi[trenutni].classList.add('aktivan');
      });
    }

    if (dugmeLevo) {
      dugmeLevo.addEventListener('click', () => {
        slajdovi[trenutni].classList.remove('aktivan');
        trenutni = (trenutni - 1 + ukupno) % ukupno;
        slajdovi[trenutni].classList.add('aktivan');
      });
    }
  }
});
//Promena veličine fonta
document.addEventListener('DOMContentLoaded', () => {
  const dugmePovecaj = document.getElementById('povecaj-font');
  const dugmeSmanji = document.getElementById('smanji-font');
  const teloStranice = document.body;
  
  let velicinaFonta = 16; 
  const minVelicina = 12;
  const maxVelicina = 24;

  function postaviVelicinuFonta(velicina) {
    teloStranice.style.fontSize = velicina + 'px';
  }

  dugmePovecaj.addEventListener('click', () => {
    if (velicinaFonta < maxVelicina) {
      velicinaFonta += 2;
      postaviVelicinuFonta(velicinaFonta);
    }
  });

  dugmeSmanji.addEventListener('click', () => {
    if (velicinaFonta > minVelicina) {
      velicinaFonta -= 2;
      postaviVelicinuFonta(velicinaFonta);
    }
  });

  
  postaviVelicinuFonta(velicinaFonta);
});
 (function () {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
  function PošaljiPoruku() {
  alert("Uspešno poslato.");
}