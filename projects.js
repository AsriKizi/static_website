document.addEventListener("DOMContentLoaded", function () {
    // Data JSON
    const data = {
        "name": "Muhammad Asri bin Muhamad Khidzi",
        "title": "Mobile Apps Developer & Game Developer",
        "about": {
            "aboutme": "l'm Muhammad Asri bin Muhamad khidzi from Kg Batu 9 Kebun Baharu, Kuala Langat, Selangor. I'm the eldest from five siblings. Want to become a lecturer for programming if possible. Aiming to get job as a programmer first. Like to draw, watch movie online, play game, make game, play volley ball and fishing. Like to try solve problem, especially about physic, math logic, puzzle. Like to do what other people not do and cant do, to challenge my self. I have good selflearning skill that help me to have some knowledge on programming skills."
        },
        "experience": [
            {
                "position": "Game Programmer",
                "company": "KITCM01 MEDIACON",
                "date": "September 2016",
                "description": "Participated in a multimedia competition at UiTM Merlimau Melaka. Learned game development strategies and coding techniques. Submitted two game projects, one of which won 2nd place."
            },
            {
                "position": "Team Leader",
                "company": "Workshop 2",
                "date": "2017",
                "description": "Led a team in a game development competition. Won Best Game Product and Best Poster Design. Learned team task delegation and structured development processes."
            },
            {
                "position": "Facilitator",
                "company": "MDEC Tabletop Competition",
                "date": "2016 & 2018",
                "description": "Guided high school students in developing tabletop games. Provided advice on game development and time management for completing projects in two days."
            },
            {
                "position": "Technical Support",
                "company": "CloudMoolah",
                "date": "September 2018 - February 2019",
                "description": "Developed CloudMoolah wallet with third-party payment integration for Non-Unity SDK and MOO Store. Assisted Unity developers with API development."
            },
            {
                "position": "Software Engineer (Mobile Apps Developer - Flutter)",
                "company": "IT-Paradise Solution Sdn Bhd",
                "date": "March 2019 - June 2021",
                "description": "Developed iOS and Android applications using Flutter. Worked on merchant apps for sales management. See 'Projects' section for details."
            },
            {
                "position": "Software Engineer (Mobile Apps Developer - Flutter)",
                "company": "PA Communication Solution Sdn Bhd",
                "date": "July 2021 - March 2023",
                "description": "Developed mobile apps, including converting Android projects to Flutter. Focused on state management and app extension development."
            },
            {
                "position": "Research Assistant (Apps Developer - Flutter)",
                "company": "Ts. Dr Wahidah Md Shah (UTeM)",
                "date": "June 2021 - March 2022",
                "description": "Developed the 'SmarTour' mobile app from scratch, focusing on logic planning and development."
            },
            {
                "position": "Software Engineer (Mobile Apps Developer - Flutter)",
                "company": "SKSA Technology Sdn Bhd (IWHost)",
                "date": "March 2023 - Present",
                "description": "Developing a social media platform for e-commerce named Fansuka."
            }
        ],
        "education": [
            {
                "institution": "Kolej Matrikulasi Negeri Sembilan",
                "year": "2014 - 2015",
                "degree": "Science Stream Module 2",
                "cgpa": "1A 3A- 1B 2C+ 3C"
            },
            {
                "institution": "Kolej Matrikulasi Negeri Sembilan",
                "year": "2014 - 2015",
                "degree": "Science Stream Module 2",
                "cgpa": "2nd class lower division"
            },
            {
                "institution": "Universiti Teknikal Malaysia Melaka",
                "year": "2015 - 2019",
                "degree": "Bachelor of Information Technology (Game Technology)",
                "cgpa": 3.33
            },
            {
                "institution": "Universiti Teknikal Malaysia Melaka",
                "year": "2021 - Present",
                "degree": "Master of Software Engineering (Mobile Application Development)",
                "cgpa": 3.74
            }
        ],
        "skills": {
            "expert": [
                "Dart (Flutter)"
            ],
            "proficient": [
                "Java (Android Studio)",
                "C# (Unity3D)",
                "Processing.org",
                "HTML & CSS",
                "Blender",
            ],
            "basic": [
                "React Native",
                "C++",
                "PHP Laravel",
                "JavaScript",
                "ASP.Net Web API",
                "Adobe Premiere",
                "Adobe Illustrator",
                "Photoshop",
                "Audacity",
                "Cinema 4D",
                "3Ds Max"
            ]
        },
        "projects": [
            {
                "name": "M360 Merchant",
                "description": "Used to manage store daily sales, stock, discounts, and more.",
                "technologies": [
                    "Flutter",
                    "Firebase Notification",
                    "Storage",
                    "Google Location"
                ]
            },
            {
                "name": "M360",
                "description": "Customer app for receiving updates from stores, such as news, gifts, and vouchers.",
                "technologies": [
                    "Flutter",
                    "Firebase Notification",
                    "Storage",
                    "Facebook Login",
                    "Google Location"
                ]
            },
            {
                "name": "AFC Merchant",
                "description": "Used by Sushi Izu to manage store orders. https://www.sushiizu.com.au/",
                "technologies": [
                    "Flutter",
                    "Firebase Notification",
                    "Storage",
                    "QR Scanner",
                    "Printing"
                ]
            },
            {
                "name": "Employee Self Service (ESS)",
                "description": "Leave application management app.",
                "technologies": [
                    "Flutter",
                    "Firebase Notification"
                ]
            },
            {
                "name": "ITP Leave Apps",
                "description": "Company leave management and news app.",
                "technologies": [
                    "Flutter",
                    "Firebase Notification"
                ]
            },
            {
                "name": "Maharaja Karaoke Kiosk Apps",
                "description": "Customer self-ordering system for Maharaja Karaoke, IOI Putrajaya.",
                "technologies": [
                    "Flutter",
                    "Socket.IO",
                    "QR Reader",
                    "IPay88 Payment Gateway",
                    "Credit Card Terminal"
                ]
            },
            {
                "name": "Fansuka",
                "description": "New social media for influencers and content creators.",
                "technologies": [
                    "Flutter",
                    "Agora Live Stream",
                    "Revenue Cat",
                    "In-App Subscription",
                    "Image & Video Editor",
                    "Firebase"
                ]
            }
        ],
        "contact": {
            "email": "asrikhidzi@gmail.com"
        }
    };

    // Isi data ke dalam halaman
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("about").textContent = data.about.aboutme;
    document.getElementById("email").textContent = data.contact.email;

    // Isi Experience
    const experienceList = document.getElementById("experience-list");
    data.experience.forEach(exp => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${exp.position}</strong> at ${exp.company} (${exp.date})<br>${exp.description}`;
        experienceList.appendChild(li);
    });

    // Isi Education
    const educationList = document.getElementById("education-list");
    data.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${edu.degree}</strong> at ${edu.institution} (${edu.year})<br>Result/CGPA: ${edu.cgpa}`;
        educationList.appendChild(li);
    });

    // Isi Skills
    const skillsList = document.getElementById("skills-list");
    Object.keys(data.skills).forEach(level => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${level.toUpperCase()}:</strong> ${data.skills[level].join(", ")}`;
        skillsList.appendChild(li);
    });

    // Isi Projects
    const projectsList = document.getElementById("projects-list");
    data.projects.forEach(proj => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${proj.name}</strong>: ${proj.description} <br><em>Technologies:</em> ${proj.technologies.join(", ")}`;
        projectsList.appendChild(li);
    });
});
