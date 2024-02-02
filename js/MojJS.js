       
        document.querySelectorAll('.additionalText').forEach(function(element) {
            element.style.display = 'none';
        });

        function toggleAdditionalText(element) {
            var icon = $(element).find('i');
            var additionalText = $(element).find('.additionalText');
        
            if (additionalText.css('display') === 'none') {
                icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
                additionalText.slideDown(500);
            } else {
                icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
                additionalText.slideUp(500);
            }
        }

        function toggleImageZoom(img) {
            var overlay = document.getElementById('overlay');
            var modal = document.getElementById('modal');
            var modalImg = document.getElementById('modalImg');

            if (overlay.classList.contains('active')) {
                overlay.classList.remove('active');
                modal.classList.remove('active');
                modalImg.src = "";
            } else {
                overlay.classList.add('active');
                modal.classList.add('active');
                modalImg.src = img.src;
            }
        }

        function proveriIzborDatumVreme() {
            var datumInput = document.getElementById('datum');
            var vremeInput = document.getElementById('vreme');
            var datumError = document.getElementById('datumError');
            var vremeError = document.getElementById('vremeError');

            if (!datumInput.value) {
                datumError.innerHTML = 'You must select a date.';
                datumError.classList.remove('sakrij');
                datumError.classList.add('crveni-tekst');
                datumInput.classList.add('crvena-bordura');
            } else {
                datumError.classList.add('sakrij');
                datumError.innerHTML = '';
                datumInput.classList.remove('crvena-bordura');
            }

            if (!vremeInput.value) {
                vremeError.innerHTML = 'You have to choose the time.';
                vremeError.classList.remove('sakrij');
                vremeError.classList.add('crveni-tekst');
                vremeInput.classList.add('crvena-bordura');
            } else {
                vremeError.classList.add('sakrij');
                vremeError.innerHTML = '';
                vremeInput.classList.remove('crvena-bordura');
            }

            if (datumInput.value && vremeInput.value) {
                var izabraniDatum = new Date(datumInput.value + ' ' + vremeInput.value);

                var prviJanuar2024 = new Date('2024-01-01');
                if (izabraniDatum < prviJanuar2024) {
                    datumError.innerHTML = 'You cannot schedule before January 1, 2024.';
                    datumError.classList.remove('sakrij');
                    datumError.classList.add('crveni-tekst');
                    datumInput.classList.add('crvena-bordura');
                } else {
                    datumError.classList.add('sakrij');
                    datumError.innerHTML = '';
                    datumInput.classList.remove('crvena-bordura');
                }

                
                var radnoVremePocetak = new Date('2024-01-01T08:00:00');
                var radnoVremeKraj = new Date('2024-01-01T20:00:00');
                
                if (izabraniDatum.getHours() < 8 || izabraniDatum.getHours() >= 20) {
                    vremeError.innerHTML = 'We dont work then.';
                    vremeError.classList.remove('sakrij');
                    vremeError.classList.add('crveni-tekst');
                    vremeInput.classList.add('crvena-bordura');
                } else {
                    vremeError.classList.add('sakrij');
                    vremeError.innerHTML = '';
                    vremeInput.classList.remove('crvena-bordura');
                }
            }


            return (!datumError.innerHTML && !vremeError.innerHTML);
        }

        function proveriEmail() {
            var emailInput = document.getElementById('emailInput');
            var emailError = document.getElementById('emailError');
            var email = emailInput.value.trim();
        
            var regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
            if (!email) {
                emailError.innerHTML = 'You must enter an email.';
                emailError.classList.remove('sakrij');
                emailInput.classList.add('crvena-bordura');
                return false;
            }
        
            if (!regExEmail.test(email)) {
                emailError.innerHTML = 'Invalid email format. Example : pavle123@gmail.com';
                emailError.classList.remove('sakrij');
                emailInput.classList.add('crvena-bordura');
                return false;
            }
        
            emailError.classList.add('sakrij');
            emailError.innerHTML = '';
            emailInput.classList.remove('crvena-bordura');
            return true;
        }

        function proveriEmail2() {
            var emailInput2 = document.getElementById('emailInput2');
            var emailError2 = document.getElementById('emailError2');
            var email2 = emailInput2.value;
        
            var regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
            if (!email2) {
                emailError2.innerHTML = 'You must enter an email.';
                emailError2.classList.remove('sakrij');
                emailInput2.classList.add('crvena-bordura');
                return false;
            }
        
            if (!regExEmail.test(email2)) {
                emailError2.innerHTML = 'Invalid email format. Example : pavle123@gmail.com';
                emailError2.classList.remove('sakrij');
                emailInput2.classList.add('crvena-bordura');
                return false;
            }
        
            emailError2.classList.add('sakrij');
            emailError2.innerHTML = '';
            emailInput2.classList.remove('crvena-bordura');
            return true;
        }


        function proveriIzborOsobe() {
            var osobaDropDown = document.getElementById('osobaDropdown');
            var osobaError = document.getElementById('osobaError');

            if (osobaDropDown.value === '0') {
                osobaError.innerHTML = 'You have to choose how many people you want.';
                osobaError.classList.remove('sakrij');
                osobaDropDown.classList.add('crvena-bordura');
                return false;
            } else {
                osobaError.classList.add('sakrij');
                osobaError.innerHTML = '';
                osobaDropDown.classList.remove('crvena-bordura');
                return true;
            }
        }

        function proveriIme() {
            var nameInput = document.getElementById('nameInput');
            var nameError = document.getElementById('nameError');
            var ime = nameInput.value;
        
            var regExIme = /^[A-Z][a-z]{2,15}$/;
        
            if (!ime) {
                nameError.innerHTML = 'The name field must not be empty.';
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }
        
            if (!regExIme.test(ime)) {
                if (ime.length < 3) {
                    nameError.innerHTML = 'The name should have at least 3 letters.';
                } else if (ime[0] !== ime[0].toUpperCase()) {
                    nameError.innerHTML = 'The name must start with a capital letter.';
                }
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }
        
            nameError.classList.add('sakrij');
            nameError.innerHTML = '';
            nameInput.classList.remove('crvena-bordura');
            return true;
        }
    

        function proveriPrezime() {
            var surnameInput = document.getElementById('surnameInput');
            var surnameError = document.getElementById('surnameError');
            var prezime = surnameInput.value;
        
            var regExPrezime = /^[A-Z][a-z]{2,15}$/;
        
            if (!prezime) {
                surnameError.innerHTML = 'The surname field must not be empty.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }
        
            if (!regExPrezime.test(prezime)) {
                if (prezime.length < 3) {
                    surnameError.innerHTML = 'Surname should have at least 3 letters.';
                } else if (prezime[0] !== prezime[0].toUpperCase()) {
                    surnameError.innerHTML = 'The last name must start with a capital letter.';
                }
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }
        
            surnameError.classList.add('sakrij');
            surnameError.innerHTML = '';
            surnameInput.classList.remove('crvena-bordura');
            return true;
        }


        function obradiFormu() {
            var validacija1 = proveriIzborDatumVreme();
            var validacija2 = proveriIzborOsobe();
            var validacija3 = proveriIme();
            var validacija4 = proveriPrezime();
        
            if (validacija1 && validacija2 && validacija3 && validacija4) {
                var ispis = document.getElementById('ispis');
                ispis.innerHTML = 'Sent successfully';
                ispis.style.color = 'white';
            } else {
                document.getElementById('ispis').innerHTML = '';
            }
        }
        
        function obradiFormu2() {
            var validacija5 = proveriEmail();
        
            if (validacija5) {
                var ispis = document.getElementById('ispis1');
                ispis.innerHTML = 'Sent successfully';
                ispis.style.color = 'white';
            } else {
                document.getElementById('ispis1').innerHTML = '';
            }
        }

        function obradiFormu3() {
            var validacija6 = proveriEmail2();
        
            if (validacija6) {
                var ispis = document.getElementById('ispis2');
                ispis.innerHTML = 'Sent successfully';
                ispis.style.color = 'white';
            } else {
                document.getElementById('ispis2').innerHTML = '';
            }
        }
        
       
        function popup() {
            document.querySelector('popup-image img').forEach(image=>{
                image.onclick = () =>{
                    document.querySelector('.popup').style.display = 'block';
                }
            })
        }

        /* -----------------------Jquery----------------------- */

       $(document).ready(function(){
            $('nav a').on('click', function(event) {
              if (this.hash !== '') {
                const hash = this.hash;
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 800);
              }
            });
          });
        

        $(document).ready(function(){
            $('#learnMoreButton').on('click', function() {
              $('.text1').slideToggle(500);
              var buttonText = $(this).text();
              if (buttonText === "Read More") {
                $(this).text("Read Less");
              } else {
                $(this).text("Read More");
              }
            });
          });

          function dodajHoverEfekat() {
            $(".pictureService").hover(function() {
              $(this).css("transform", "scale(1.1)"); // Uvećava sliku za 10% na hover
            }, function() {
              $(this).css("transform", "scale(1)"); // Vraća sliku na normalnu veličinu nakon hover-a
            });
          }

         
        
        
    
    



    

    
