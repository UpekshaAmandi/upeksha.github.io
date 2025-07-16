let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the Contact Me button in the navbar
    const contactButton = document.querySelector('.gradient-button');
    
    // Add click event listener to the button
    contactButton.addEventListener('click', function() {
        // Get the contact section
        const contactSection = document.getElementById('contact');
        
        // Scroll to the contact section smoothly
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Social media URLs (replace with your actual profiles)
    const socialMediaLinks = {
        github:"https://github.com/UpekshaAmandi",
        linkedin: "http://www.linkedin.com/in/upeksha-amandi-20770624b",
        instagram: "https://www.instagram.com/upeksha.87?igsh=YWtkeWZiMmt4Nnhm&utm_source=qr",
        facebook: "https://www.facebook.com/share/1BuEfphzJw/?mibextid=wwXIfr"};

    // Function to update all social media links
    function updateSocialLinks() {
        // Select all social media icons in both home and footer sections
        const socialIcons = document.querySelectorAll('.social-icons a');
        
        socialIcons.forEach(icon => {
            // Determine which platform this icon represents
            let platform;
            if (icon.querySelector('.bxl-github')) {
                platform = 'github';
            } else if (icon.querySelector('.bxl-linkedin-square')) {
                platform = 'linkedin';
            } else if (icon.querySelector('.bxl-instagram-alt')) {
                platform = 'instagram';
            } else if (icon.querySelector('.bxl-facebook')) {
                platform = 'facebook';
            }

            // Update the href if we identified the platform
            if (platform && socialMediaLinks[platform]) {
                icon.href = socialMediaLinks[platform];
                // Open in new tab
                icon.target = "_blank";
                icon.rel = "noopener noreferrer";
            }
        });
    }

    // Call the function to update links
    updateSocialLinks();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the Download CV button
    const downloadCvBtn = document.querySelector('.btn-group a.btn:first-child');
    
    // Add click event listener
    downloadCvBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Replace with the actual path to your CV file
        const cvFilePath = 'UpekshaAmandi-CV.pdf';
        
        // Create a temporary anchor element to trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = cvFilePath;
        downloadLink.download = 'UpekshaAmandi-CV.pdf'; // The filename for the downloaded file
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});

//https://github.com/ChamathWickramasighe/TrackZen  
//https://github.com/UpekshaAmandi/Flappy-Bird-python
//https://github.com/UpekshaAmandi/To-Do-List-App 



document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form elements
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value.trim(),
            email: contactForm.querySelector('input[type="email"]').value.trim(),
            phone: contactForm.querySelector('input[type="number"]').value.trim() || 'Not provided',
            subject: contactForm.querySelectorAll('input[type="text"]')[1].value.trim() || 'No subject',
            message: contactForm.querySelector('textarea').value.trim()
        };
        
        // Validate form
        if (!formData.name) {
            alert('Please enter your full name');
            return;
        }
        
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!formData.message) {
            alert('Please enter your message');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('[type="submit"]');
        const originalText = submitBtn.value;
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            console.log('Attempting to send email with:', formData);
            
            // Send email
            const response = await emailjs.send(
                'service_b6ja92d', 
                'template_igb22xh', 
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone_number: formData.phone,
                    subject: formData.subject,
                    message: formData.message
                }
            );
            
            console.log('EmailJS Response:', response);
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert(`Failed to send message. ${error.text || 'Please try again later.'}`);
        } finally {
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["UI/UX Designer","Web Developer", "QA Engineer","Full-Stack Developer","Frontend Developer","Backend Developer","AI/ML Developer","Data Analyst"];
    const roleElement = document.querySelector('.role-text');
    let currentRoleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // milliseconds per character
    
    function typeRole() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next
        }
        
        setTimeout(typeRole, typingSpeed);
    }
    
    if (roleElement) {
        // Start the animation after a brief delay
        setTimeout(typeRole, 1000);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Project links mapping (add your actual URLs here)
    const projectLinks = {
        "AI-Based Personalized Diet Planner For Office Workers": "https://github.com/UpekshaAmandi/AI-Based-Personalized-Diet-Planner-For-Office-Workers-",
        "Library Management System (BookNest)": "https://github.com/Mizzaka/BookNest",
        "Furniture Selection Application": "https://github.com/Hesara22/HCI-Furniture-Final",
        "Productivity Monitoring System": "https://github.com/ChamathWickramasighe/TrackZen",
        "Campus Connect Accommodation Portal": "https://github.com/UpekshaAmandi/campus-connect",
        "Marine Aquarium Monitoring System": "https://www.linkedin.com/posts/kokila-perera-741506267_smartmarine-aquariummonitoringsystem-teamwork-ugcPost-7181025839608729601-GDAe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3c7acB0PiHIKc1keGSbIqzxMs29rclXb0"
    };

    // Get all review buttons
    const reviewButtons = document.querySelectorAll('.project-card .btn');
    
    // Add click handlers to each button
    reviewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the project title in the card
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent.trim();
            
            // Get the corresponding link
            const projectLink = projectLinks[projectTitle];
            
            if (projectLink) {
                // Open in new tab
                window.open(projectLink, '_blank');
            } else {
                console.warn(`No link found for project: ${projectTitle}`);
                alert('Project link not available yet!');
            }
        });
    });
});