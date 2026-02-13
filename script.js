document.addEventListener('DOMContentLoaded', function () {
    // التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // معالجة نموذج التواصل
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم استلام رسالتك بنجاح، شكراً لتواصلك مع يوتا!');
            form.reset();
        });
    }
});