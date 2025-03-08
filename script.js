document.addEventListener('DOMContentLoaded', function() {
     const mobileMenu = document.getElementById('mobile-menu');
     const navUl = document.querySelector('nav ul');
 
     mobileMenu.addEventListener('click', function() {
         navUl.classList.toggle('active');
     });
     const serviceCards = document.querySelectorAll('.service-card');
 
     serviceCards.forEach(card => {
         card.addEventListener('click', function() {
             serviceCards.forEach(otherCard => {
                 if (otherCard !== card && otherCard.classList.contains('active')) {
                     otherCard.classList.remove('active');
                 }
             });
             card.classList.toggle('active');
         });
     });
 
     // Portfolio Slider Script
     const portfolioItems = [
          {
               image: "./img/P1.jpg",
               title: "LucidoInteriors",
               description: "Enhanced online presence with cutting-edge <br> web development and SEO strategies."
           },
           {
               image: "./img/P2.jpg",
               title: "Hexado",
               description: "Seamless and efficient web solutions <br> for a growing tech enterprise."
           },
           {
               image: "./img/P3.jpg",
               title: "Strategic Edge Research",
               description: "Robust web development services <br> that align with business goals."
           },
           {
               image: "./img/P4.jpg",
               title: "CharminarExpress",
               description: "Eye-catching and professional graphic designs <br> that define their brand."
           }
     ];
 
     let currentPortfolioIndex = 0;
     const portfolioItemContainer = document.querySelector('.portfolio-item');
     const dotsContainer = document.querySelector('.dots-container');

     function createDots() {
         portfolioItems.forEach((_, index) => {
             const dot = document.createElement('div');
             dot.classList.add('dot');
             if (index === currentPortfolioIndex) {
                 dot.classList.add('active');
             }
             dot.addEventListener('click', () => {
                 currentPortfolioIndex = index;
                 updatePortfolio();
             });
             dotsContainer.appendChild(dot);
         });
     }
     function updatePortfolio() {
         const portfolio = portfolioItems[currentPortfolioIndex];
         portfolioItemContainer.innerHTML = `
             <img src="${portfolio.image}" alt="${portfolio.title}">
             <div class="portfolio-content">
                 <h2>${portfolio.title}</h2>
                 <p>${portfolio.description}</p>
             </div>
         `;
         const dots = document.querySelectorAll('.dot');
         dots.forEach((dot, index) => {
             if (index === currentPortfolioIndex) {
                 dot.classList.add('active');
             } else {
                 dot.classList.remove('active');
             }
         });
     }
 
     function nextPortfolio() {
         currentPortfolioIndex = (currentPortfolioIndex + 1) % portfolioItems.length;
         updatePortfolio();
     }
     const contactForm = document.getElementById('contact-form');
     if (contactForm) {
         contactForm.addEventListener('submit', function(e) {
             e.preventDefault();
             const submitButton = document.getElementById('contact-submit');
             submitButton.innerHTML = 'Sending...';
             submitButton.disabled = true;
             setTimeout(() => {
                 alert('Thank you for your message! We will get back to you soon.');
                 contactForm.reset();
                 submitButton.innerHTML = 'Send Message';
                 submitButton.disabled = false;
             }, 1500);
         });
     }
 
     setInterval(nextPortfolio, 5000);
     createDots();
     updatePortfolio();
     const animateOnScroll = function() {
         const elements = document.querySelectorAll('section h2, .service-card, .testimonial-card, .contact form');
         
         elements.forEach(element => {
             const elementPosition = element.getBoundingClientRect().top;
             const screenHeight = window.innerHeight;
             
             if (elementPosition < screenHeight * 0.9) {
                 element.classList.add('fade-in');
             }
         });
     };
     window.addEventListener('scroll', animateOnScroll);
     animateOnScroll();
 });

// let scroll=window.scrollY;
let topdi = document.getElementById("top1");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll < 200) {
        topdi.style.display = "none"; 
    } else {
        topdi.style.display = "block";
    }
});



document.addEventListener('DOMContentLoaded', function() {
     // Intersection Observer for animated card appearance
     const animateCards = () => {
         const cards = document.querySelectorAll('.project-card');
         
         const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     // Reset the animation by removing and adding the card
                     const card = entry.target;
                     card.style.animation = 'none';
                     card.offsetHeight; // Trigger reflow
                     card.style.animation = null;
                     observer.unobserve(card);
                 }
             });
         }, {
             threshold: 0.2,
             rootMargin: '0px 0px -100px 0px'
         });
         
         cards.forEach(card => {
             observer.observe(card);
         });
     };
     
     // Call the animation function
     animateCards();
     
     // Check for saved theme preference and apply it
     const savedTheme = localStorage.getItem('theme');
     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     
     // Apply theme based on saved preference or system preference
     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
         document.body.classList.add('dark-mode');
     }
     
     // Optional: Add scroll-triggered animations for the projects
     window.addEventListener('scroll', function() {
         const projects = document.querySelectorAll('.project-card');
         
         projects.forEach(project => {
             const projectPosition = project.getBoundingClientRect().top;
             const screenPosition = window.innerHeight / 1.3;
             
             if (projectPosition < screenPosition) {
                 project.classList.add('visible');
             }
         });
     });
     
     // Enhance the stats display with a simple hover effect
     const stats = document.querySelectorAll('.stat');
     stats.forEach(stat => {
         stat.addEventListener('mouseover', function() {
             this.style.transform = 'translateY(-5px)';
             this.style.transition = 'transform 0.3s ease';
         });
         
         stat.addEventListener('mouseout', function() {
             this.style.transform = 'translateY(0)';
         });
     });
 });
 