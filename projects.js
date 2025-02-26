document.addEventListener("DOMContentLoaded", function () {
    // Data JSON
    const data = {
        "name": "Muhammad Asri bin Muhamad Khidzi",
        "title": "Mobile Apps Developer & Game Developer",
        "about":
            "l'm Muhammad Asri bin Muhamad khidzi from Kg Batu 9 Kebun Baharu, Kuala Langat, Selangor. I'm the eldest from five siblings. Want to become a lecturer for programming if possible. Aiming to get job as a programmer first. Like to draw, watch movie online, play game, make game, play volley ball and fishing. Like to try solve problem, especially about physic, math logic, puzzle. Like to do what other people not do and cant do, to challenge my self. I have good selflearning skill that help me to have some knowledge on programming skills."
        ,
        "experience": [
            {
                "position": "Software Engineer (Flutter)",
                "company": "SKSA Technology Sdn Bhd (IWHost)",
                "date": "March 2023 - Present",
                "description": "Developing a social media platform for e-commerce named Fansuka."
            }
        ],
        "education": [
            {
                "institution": "Universiti Teknikal Malaysia Melaka",
                "year": "2021 - Present",
                "degree": "Master of Software Engineering (Mobile Application Development)",
                "cgpa": 3.74
            }
        ],
        "skills": {
            "expert": ["Dart (Flutter)"],
            "proficient": ["Java", "C#", "Processing.org", "HTML & CSS"],
            "basic": ["React Native", "C++", "PHP Laravel", "JavaScript"]
        },
        "projects": [
            {
                "name": "Fansuka",
                "description": "New social media for influencers and content creators.",
                "technologies": ["Flutter", "Agora Live Stream", "Firebase"]
            }
        ],
        "contact": {
            "email": "asrikhidzi@gmail.com"
        }
    };

    // Isi data ke dalam halaman
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("about").textContent = `${data.about.location}`;
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
        li.innerHTML = `<strong>${edu.degree}</strong> at ${edu.institution} (${edu.year})<br>CGPA: ${edu.cgpa}`;
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
