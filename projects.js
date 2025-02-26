const projects = [
    {
        name: "M360 Merchant",
        description: "Used to manage store daily sales, items stock, discount, and more.",
        technologies: ["Flutter", "Firebase Notification", "Storage", "Google Location"],
        image: "images/m360-merchant.png"
    },
    {
        name: "M360",
        description: "For customer to get some update from store such as news, gift, discount, voucher, or event.",
        technologies: ["Flutter", "Firebase Notification", "Storage", "Facebook Login", "Google Location"],
        image: "images/m360.png"
    },
    {
        name: "AFC Merchant",
        description: "Used by client Sushi Izu, to manage their store, receiving order from customer.",
        link: "https://www.sushiizu.com.au/",
        technologies: ["Flutter", "Firebase Notification", "Storage", "QR Scanner", "Printing"],
        image: "images/afc-merchant.png"
    },
    {
        name: "Employee Self Service (ESS)",
        description: "Used by client to manage their leave application.",
        technologies: ["Flutter", "Firebase Notification"],
        image: "images/ess.png"
    },
    {
        name: "ITP Leave Apps",
        description: "Used by our company to manage our leave application, and news.",
        technologies: ["Flutter", "Firebase Notification"],
        image: "images/itp-leave.png"
    },
    {
        name: "Maharaja Karaoke Kiosk Apps",
        description: "Used by Maharaja Karaoke at IOI Putrajaya for customer self-ordering system.",
        technologies: ["Flutter", "Socket IO", "QR Reader", "IPay88 Payment Gateway", "Credit Card Terminal"],
        image: "images/maharaja-kiosk.png"
    },
    {
        name: "Fansuka",
        description: "New social media for influencer or anyone who want to generate side income.",
        technologies: ["Flutter", "Agora Live Stream", "Revenue Cat", "In-App Subscription", "Image & Video Editor", "Firebase"],
        image: "images/fansuka.png"
    }
];

// Fungsi untuk papar projek dalam HTML
function displayProjects() {
    const projectContainer = document.getElementById("projects-list");

    projects.forEach(project => {
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        let projectHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
        `;

        if (project.link) {
            projectHTML += `<p><a href="${project.link}" target="_blank">View Project</a></p>`;
        }

        projectItem.innerHTML = projectHTML;
        projectContainer.appendChild(projectItem);
    });
}

// Panggil fungsi selepas halaman dimuat
document.addEventListener("DOMContentLoaded", displayProjects);
