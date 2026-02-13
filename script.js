// Copy Email Function
function copyEmail() {
    const email = "arjun@example.com"; // Replace with your actual email
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.querySelector('.btn-resume');
        const originalText = btn.innerText;
        
        btn.innerText = "Email Copied!";
        btn.style.background = "#10b981"; // Green color for success
        btn.style.color = "#fff";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "transparent";
            btn.style.color = "#00f2ea";
        }, 2000);
    });
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.job-card, .impact-item');
hiddenElements.forEach((el) => observer.observe(el));