       function toggleText() {
            var text = document.querySelector('.readmoretext');
            var button = document.getElementById('learnMoreButton');

            if (text.style.display === 'none') {
                text.style.display = 'inline'; 
                button.textContent = 'Read Less';
            } else {
                text.style.display = 'none';
                button.textContent = 'Read More';
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('nav a');
        
            links.forEach(link => {
                link.addEventListener('click', smoothScroll);
            });
        
            function smoothScroll(e) {
                e.preventDefault();
        
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
        
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });

        
        document.querySelectorAll('.additionalText').forEach(function(element) {
            element.style.display = 'none';
        });

        function toggleAdditionalText(element) {
            var icon = element.querySelector('i');
            var additionalText = element.querySelector('.additionalText');

            if (additionalText.style.display === 'none') {
                additionalText.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                additionalText.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
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

        /*function proveriIme() {
            var nameInput = document.getElementById('nameInput');
            var nameError = document.getElementById('nameError');
            var ime = nameInput.value.trim();

            if (!ime) {
                nameError.innerHTML = 'Polje ime ne sme biti prazno.';
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }

            if (ime[0] !== ime[0].toUpperCase()) {
                nameError.innerHTML = 'Ime mora počinjati velikim slovom.';
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }

            if (ime.length < 3) {
                nameError.innerHTML = 'Ime treba imati najmanje 3 slova.';
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
            var prezime = surnameInput.value.trim();

            if (!prezime) {
                surnameError.innerHTML = 'Polje prezime ne sme biti prazno.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }

            if (prezime[0] !== prezime[0].toUpperCase()) {
                surnameError.innerHTML = 'Prezime mora počinjati velikim slovom.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }

            if (prezime.length < 3) {
                surnameError.innerHTML = 'Prezime treba imati najmanje 3 slova.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }

            surnameError.classList.add('sakrij');
            surnameError.innerHTML = '';
            surnameInput.classList.remove('crvena-bordura');
            return true;
        }*/

        function proveriIzborDatumVreme() {
            var datumInput = document.getElementById('datum');
            var vremeInput = document.getElementById('vreme');
            var datumError = document.getElementById('datumError');
            var vremeError = document.getElementById('vremeError');

            if (!datumInput.value) {
                datumError.innerHTML = 'Morate izabrati datum.';
                datumError.classList.remove('sakrij');
                datumInput.classList.add('crvena-bordura');
            } else {
                datumError.classList.add('sakrij');
                datumError.innerHTML = '';
                datumInput.classList.remove('crvena-bordura');
            }

            if (!vremeInput.value) {
                vremeError.innerHTML = 'Morate izabrati vreme.';
                vremeError.classList.remove('sakrij');
                vremeInput.classList.add('crvena-bordura');
            } else {
                vremeError.classList.add('sakrij');
                vremeError.innerHTML = '';
                vremeInput.classList.remove('crvena-bordura');
            }

            return (!datumError.innerHTML && !vremeError.innerHTML);
        }

       function proveriEmail() {
            var emailInput = document.getElementById('emailInput');
            var emailError = document.getElementById('emailError');
            var email = emailInput.value;

            if (email.trim() === '') {
                emailError.innerHTML = 'Morate uneti email.';
                emailError.classList.remove('sakrij');
                emailInput.classList.add('crvena-bordura');
                return false;
            }

            if (email.indexOf('@') === -1) {
                emailError.innerHTML = 'Email treba sadržati @.';
                emailError.classList.remove('sakrij');
                emailInput.classList.add('crvena-bordura');
                return false;
            }

            var validneDomene = ['.com', '.rs', '.yahoo'];
            var validnaDomena = false;

            for (var i = 0; i < validneDomene.length; i++) {
                if (email.endsWith(validneDomene[i])) {
                    validnaDomena = true;
                    break;
                }
            }

            if (!validnaDomena) {
                emailError.innerHTML = 'Email se mora završavati sa .com, .rs, .yahoo.';
                emailError.classList.remove('sakrij');
                emailInput.classList.add('crvena-bordura');
                return false;
            }

            emailError.classList.add('sakrij');
            emailError.innerHTML = '';
            emailInput.classList.remove('crvena-bordura');
            return true;
        }

        function proveriIzborOsobe() {
            var osobaDropDown = document.getElementById('osobaDropdown');
            var osobaError = document.getElementById('osobaError');

            if (osobaDropDown.value === '0') {
                osobaError.innerHTML = 'Morate izabrati koliko osoba želite.';
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
            var ime = nameInput.value.trim();

            if (ime.trim() === '') {
                nameError.innerHTML = 'Polje ime ne sme biti prazno.';
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }

            if (ime[0] !== ime[0].toUpperCase()) {
                nameError.innerHTML = 'Ime mora počinjati velikim slovom.';
                nameError.classList.remove('sakrij');
                nameInput.classList.add('crvena-bordura');
                return false;
            }

            if (ime.length < 3) {
                nameError.innerHTML = 'Ime treba imati najmanje 3 slova.';
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
            var prezime = surnameInput.value.trim();

            if (prezime.trim() === '') {
                surnameError.innerHTML = 'Polje Prezime ne sme biti prazno.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }

            if (prezime[0] !== prezime[0].toUpperCase()) {
                surnameError.innerHTML = 'Prezime mora počinjati velikim slovom.';
                surnameError.classList.remove('sakrij');
                surnameInput.classList.add('crvena-bordura');
                return false;
            }

            if (prezime.length < 3) {
                surnameError.innerHTML = 'Prezime treba imati najmanje 3 slova.';
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
            var validacija5 = proveriEmail();

            if (validacija1 && validacija2 && validacija3 && validacija4 && validacija5) {
                
                document.getElementById('ispis').innerHTML = 'Forma je uspešno poslata!';
            } else {
                
                document.getElementById('ispis').innerHTML = '';
            }
        }
        
        
        
    
    



    

    
