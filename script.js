/*
const buttons = document.querySelectorAll('.button');
const topButton = document.getElementById('nav-button');

const observer = new IntersectionObserver(entries => {
    const anyButtonVisible = entries.some(entry => entry.isIntersecting);
    topButton.style.display = anyButtonVisible ? 'none' : 'block';
}, { threshold: 0 });

buttons.forEach(button => observer.observe(button));
*/
function scrollToSection() {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("get-started").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "block";
})

document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("join").addEventListener("click", () => {

    const email = document.getElementById("email").value;
    if (isValidEmail(email)) {
        submitEmail(email);
        document.getElementById("joinform").innerHTML = `<p id="success-msg-first">You're on the waitlist! We will notify you by email, when new spots open!<p>
                                                        <p id="success-msg-second">Please follow us on X and join our Discord for more info!<p>
                                                        `;
    }
    else {
        document.getElementById("email").placeholder = "Please enter a valid email";
        document.getElementById("email").value = "";
    }
})

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function submitEmail(email) {
    
    if (!email) {
        //alert("Please enter an email!");
        return;
    }

    // Encode the email and construct the submission URL
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSebwYUPOUapJ2d8VuFVcNnPWlfNq0IaXosOUESKikAkRn4Aiw/formResponse";
    const emailField = "entry.2070446592"; // Replace with your actual field ID
    const fullUrl = `${formUrl}?${emailField}=${encodeURIComponent(email)}`;

    // Submit using a hidden iframe to avoid opening a new tab
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = fullUrl;
    document.body.appendChild(iframe);

    //alert("Email submitted!");
}
