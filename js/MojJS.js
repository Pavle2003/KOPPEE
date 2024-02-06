       
       //Pokazivanje sadržaja klikom i uvlačenje drugim klikom
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

        //validacija datuma i vremena
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

        //validacija emaila
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

        //validacija drugog emaila
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

        //validacija drop down liste
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

        //validacija imena
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
    

        //validacija prezimena
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


        //Funkcija za proveru tačnosti forme
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
        
        //Funkcija za proveru tačnosti emaila
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

        //Funkcija za proveru tačnosti drugog emaila
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


        // Kreiranje HTML dinamičkog sadržaja nav bara
        var navbarContainer = document.getElementById("navbarContainer");
        var nav = document.createElement("nav");
        nav.className = "navbar navbar-expand-lg bg-none navbar-dark py-3";

        var navbarBrand = document.createElement("a");
        navbarBrand.href = "index.html";
        navbarBrand.className = "navbar-brand px-lg-4 m-0";
        var title = document.createElement("h1");
        title.className = "m-0 display-4 text-uppercase text-white";
        title.textContent = "KOPPEE";
        navbarBrand.appendChild(title);
        nav.appendChild(navbarBrand);

        var togglerButton = document.createElement("button");
        togglerButton.type = "button";
        togglerButton.className = "navbar-toggler";
        togglerButton.setAttribute("data-toggle", "collapse");
        togglerButton.setAttribute("data-target", "#navbarCollapse");
        var togglerIcon = document.createElement("span");
        togglerIcon.className = "navbar-toggler-icon";
        togglerButton.appendChild(togglerIcon);
        nav.appendChild(togglerButton);

        var navbarCollapse = document.createElement("div");
        navbarCollapse.className = "collapse navbar-collapse justify-content-between";
        navbarCollapse.id = "navbarCollapse";
        var navbarLinks = document.createElement("div");
        navbarLinks.className = "navbar-nav ml-auto p-4";
        var links = [
            { href: "index.html", text: "Home", active: true },
            { href: "#aboutKafa", text: "About", active: false },
            { href: "#serviceKafa", text: "Service", active: false },
            { href: "#menuKafa", text: "Menu", active: false },
            { href: "#reservationKafa", text: "Reservation", active: false },
            { href: "#testimonialKafa", text: "Testimonial", active: false },
            { href: "autor.html", text: "Author", active: false }
        ];

        links.forEach(function(link) {
            var anchor = document.createElement("a");
            anchor.href = link.href;
            anchor.className = "nav-item nav-link" + (link.active ? " active" : "");
            anchor.textContent = link.text;
            navbarLinks.appendChild(anchor);
        });

        navbarCollapse.appendChild(navbarLinks);
        nav.appendChild(navbarCollapse);
        navbarContainer.appendChild(nav);



        //Uyimanje vrednost za carousel
        const testimonials = [
            {
                name: "Emma Foster",
                rating: "Rating 9.75/10",
                imageSrc: "img/testimonial-1.jpg",
                feedback: "I was delighted to visit this cafe! The coffee was extremely delicious, especially their unique blend that I tried for the first time. The atmosphere is relaxing and the staff very friendly. I will definitely be back!"
            },
            {
                name: "Liam Turner",
                rating: "Rating 10/10",
                imageSrc: "img/testimonial-2.jpg",
                feedback: "Fantastic experience! I tried their cinnamon iced coffee and was delighted. This is a real refreshment, and the ambiance is pleasant and modernly decorated. I highly recommend it to everyone who likes to enjoy coffee in a unique way."
            },
            {
                name: "Sophia Mitchell",
                rating: "Rating 9/10",
                imageSrc: "img/testimonial-3.jpg",
                feedback: "A cafe with a real spirit! Their offer of different varieties of coffee is something special. I felt like a real coffee shopper while enjoying their specialty. The staff is professional and very pleasant."
            },
            {
                name: "Oliver Harrison",
                rating: "Rating 8.5/10",
                imageSrc: "img/testimonial-4.jpg",
                feedback: "Great location for coffee lovers! The quality of the coffee is exceptional, and the selection is truly varied. I especially liked their carefully selected music that creates the perfect atmosphere. They even had a treat for my dog Rex. I definitely recommend it to anyone who appreciates real coffee."
            }
        ];
        
        const testimonialCarousel = document.querySelector('.testimonial-carousel');
        
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial-item');
        
            testimonialDiv.innerHTML = `
                <div class="d-flex align-items-center mb-3">
                    <img class="img-fluid" src="${testimonial.imageSrc}" alt="${testimonial.name}">
                    <div class="ml-3">
                        <h4>${testimonial.name}</h4>
                        <i>${testimonial.rating}</i>
                    </div>
                </div>
                <p class="m-0">${testimonial.feedback}</p>
            `;
            testimonialCarousel.appendChild(testimonialDiv);
        });





        


        /* -----------------------Jquery----------------------- */

        //Funkcija za pravljenje smothScrolla
        function smothScroll() {
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
        }

        //Funkcija za toggle
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

          //Funkcija za uvećavanje slike
          function dodajHoverEfekat() {
            $(".pictureService").hover(function() {
              $(this).css("transform", "scale(1.1)"); 
            }, function() {
              $(this).css("transform", "scale(1)"); 
            });
          }


          //Definisanje vrednosti menija
          $(document).ready(function(){
            const menuItems = [
                {
                    title: "Hot Coffee",
                    items: [
                        { name: "Turkish coffee", price: "$5", description: "Ground classic coffee beans with hot water", imgSrc: "img/menu-1.jpg" },
                        { name: "Frappe", price: "$6", description: "A combination of ice, milk and instant coffee, often sweetened with syrup or sugar, then whipped to create a foam.", imgSrc: "img/Frappe.jpg" },                     
                        { name: "Espresso", price: "$7", description: "Small, strong coffee prepared by pressing hot water through ground coffee.", imgSrc: "img/Espresso.png" }
                    ]
                },
                {
                    title: "Cold Coffee",
                    items: [
                        { name: "Caramel Macchiato on Ice", price: "$4", description: "Espresso with cold milk and added caramel syrup, served over ice.", imgSrc: "img/Macchiato.jpg" },
                        { name: "Irish Coffee", price: "$9", description: "Coffee with Irish whiskey, sugar and cream.", imgSrc: "img/Irska.jpg" },
                        { name: "Vietnamese Iced Coffee", price: "$7", description: "Condensed milk is used with brewed coffee, usually served over ice.", imgSrc: "img/Vietnamese.jpg" }
                    ]
                }
            ];
        
            // Funkcija za kreiranje HTML elemenata za stavke menija
            function createMenuItems(menuItem) {
                let html = '';
                menuItem.items.forEach(item => {
                    html += `
                        <div class="col-lg-6">
                            
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src="${item.imgSrc}" alt="">
                                    <h5 class="menu-price">${item.price}</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>${item.name}</h4>
                                    <p class="m-0">${item.description}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
                return html;
            }
                
            let menuHtml = '';
            menuItems.forEach(menu => {
                menuHtml += createMenuItems(menu);
            });

            $('#menuItems').html(menuHtml);
            });
         
        
        
    
    



    

    
