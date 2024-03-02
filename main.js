window.addEventListener("load", executeCodes);
function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementById("scroll-up-btn").style.display = "block" : document.getElementById("scroll-up-btn").style.display = "none" } window.onscroll = function() { scrollFunction() }, document.getElementById("scroll-up-btn").addEventListener("click", (function() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 })); const quotes = ["The best way to predict the future is to invent it. - Alan Kay", "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill", "The only way to do great work is to love what you do. - Steve Jobs", "Believe you can and you're halfway there. - Theodore Roosevelt", "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison", "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", "If you want to lift yourself up, lift up someone else. - Booker T. Washington", "You miss 100% of the shots you don't take. - Wayne Gretzky", "The only thing we have to fear is fear itself. - Franklin D. Roosevelt", "Strive not to be a success, but rather to be of value. - Albert Einstein"], randomIndex = Math.floor(Math.random() * quotes.length), quoteElement = document.getElementById("Quote"), quoteHeader = document.createElement("h3"); quoteHeader.textContent = quotes[randomIndex], quoteHeader.style.color = "black", quoteElement.appendChild(quoteHeader); const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayOfWeek = daysOfWeek[(new Date).getDay()], message = `Have a wonderful ${dayOfWeek} !`, greetingElement = document.getElementById("greeting"); greetingElement.innerText = message; let startTime = Date.now(), timer = document.getElementById("timer"); setInterval((function() { let e = Math.floor((Date.now() - startTime) / 1e3); timer.innerText = e }), 1e3); let visitCount = localStorage.getItem("visitCount"); function scrollFunction() { const e = document.getElementById("scroll-up-btn"); document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? e.style.display = "block" : e.style.display = "none" } function refreshPage() { location.reload() } null === visitCount && (visitCount = 0), visitCount++, localStorage.setItem("visitCount", visitCount), document.getElementById("visit-count").textContent = visitCount, window.onscroll = function() { scrollFunction() }, document.getElementById("scroll-up-btn").addEventListener("click", (function() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 }));
document.querySelector('.cv').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'https://resume.io/r/TNImOJH8l';
        link.target = '_blank';
        link.download = 'Resume.pdf';
        link.click();
      });

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
