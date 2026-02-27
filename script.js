console.log("SCRIPT STARTED");

document.addEventListener("DOMContentLoaded", () => {

    /* ===== Cursor Glow Follower ===== */
    const glow = document.getElementById("glow");
    if (glow) {
        window.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    }

    /* ===== Reveal Animations ===== */
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealElements.forEach(el => observer.observe(el));
    }

    /* ===== Modal Logic ===== */
    const modal = document.getElementById("modalOverlay");
    const mTitle = document.getElementById("mTitle");
    const mDesc = document.getElementById("mDesc");

    window.openModal = function (title, description) {
        if (!modal || !mTitle || !mDesc) return;
        mTitle.innerText = title;
        mDesc.innerText = description;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeModal = function () {
        if (!modal) return;
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    } 
    /* ===== Header Scroll Effect ===== */
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            nav.style.padding =
                window.scrollY > 50 ? "1rem 8%" : "1.5rem 8%";
        });
    }

    /* ===== Typing Effect (FINAL & SINGLE) ===== */
    const typingElement = document.getElementById("typing");
    if (typingElement) {
        typingElement.style.visibility = "visible";

        const texts = [
            "Pursuing B.Tech in Computer Science & Engineering at MANIT Bhopal.",
            "Skilled in C, C++, Java and Object-Oriented Programming.",
            "Learning AWS, Google Cloud and modern AI tools."
        ];

        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const text = texts[index];

            if (!isDeleting) {
                typingElement.textContent = text.slice(0, charIndex++);
                if (charIndex > text.length) {
                    setTimeout(() => (isDeleting = true), 1500);
                }
            } else {
                typingElement.textContent = text.slice(0, charIndex--);
                if (charIndex < 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? 40 : 60);
        }

        typeEffect();
    }

});