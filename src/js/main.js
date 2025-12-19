// document.addEventListener("DOMContentLoaded", function () {
//     const fullName = "Noel Taylor";
//     const nameElement = document.getElementById("personName");

//     if (nameElement) {
//         nameElement.textContent = fullName; // вставляємо текст, не HTML
//     }

//     const toggleButtons = document.querySelectorAll(".toggle-btn");
//     toggleButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             this.classList.toggle("active");
//         });
//     });
// });

// // const toggleButtons = document.querySelector(".toggle-btn");
// // const arrowIcons = toggleButtons.querySelector(".arrow-icon");

// // toggleButtons.addEventListener("click", () =>{
// //     arrowIcons.classList.toggle("rotated");
// // });

// // document.querySelector('.arrow_wrapper').addEventListener('click', function() {
// //     this.classList.toggle('rotated')
// //     ;
// // });



// // document.addEventListener("DOMContentLoaded", function () {

// //     const toggleButtons = document.querySelectorAll(".toggle-btn");

// //     toggleButtons.forEach(button => {
// //         button.addEventListener("click", function () {

// //             const content = this.nextElementSibling;
// //             const arrow = this.querySelector(".arrow_wrapper");

// //             // перемикання контенту
// //             content.classList.toggle("active");

// //             // обертання стрілки
// //             arrow.classList.toggle("rotated");

// //             // службовий клас (для вимоги)
// //             this.classList.toggle("active");
// //         });
// //     });
// // });


// // document.addEventListener("DOMContentLoaded", function () {

// //     const sections = document.querySelectorAll(".toggle-btn");

// //     sections.forEach(section => {
// //         // 🔹 при старті всі відкриті
// //         section.classList.add("active");

// //         const arrow = section.querySelector(".arrow_wrapper");

// //         arrow.addEventListener("click", function (e) {
// //             e.stopPropagation(); // не даємо кліку піти вище

// //             section.classList.toggle("active");
// //             arrow.classList.toggle("rotated");
// //         });
// //     });

// // });

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".toggle-btn").forEach(btn => {
//     btn.classList.add("active"); // при старті все відкрите

//     const arrow = btn.querySelector(".arrow_wrapper");

//     arrow.addEventListener("click", e => {
//       e.stopPropagation();

//       btn.classList.toggle("active");
//       arrow.classList.toggle("rotated");
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
    
//     const fullName = "Noel Taylor";
//     const nameElement = document.getElementById("personName");

//     if (nameElement) {
//         nameElement.textContent = fullName;
//     }

//     const toggleButtons = document.querySelectorAll(".toggle-btn");
//     toggleButtons.forEach(button => {
//         button.classList.add("active"); // стартово все відкрите

//         const arrow = button.querySelector(".arrow_wrapper");
//         arrow.addEventListener("click", e => {
//             e.stopPropagation();
//             button.classList.toggle("active");
//             arrow.classList.toggle("rotated");
//         });
//     });

    
//     const skills = [
//         { name: "Adobe Photoshop", level: 80 },
//         { name: "Microsoft Word", level: 80 },
//         { name: "HTML/CSS", level: 80 },
//         { name: "Adobe Illustrator", level: 80 },
//         { name: "Microsoft PowerPoint", level: 80 }
//     ];

//     function renderSkills(containerSelector, data) {
//         const container = document.querySelector(containerSelector);
//         if (!container) return;

//         // очищаємо перед вставленням
//         container.innerHTML = "";

//         // ділимо на дві колонки
//         const col1 = document.createElement("div");
//         col1.className = "col-md-6";
//         const col2 = document.createElement("div");
//         col2.className = "col-md-6";

//         data.forEach((skill, index) => {
//             const skillDiv = document.createElement("div");
//             skillDiv.className = "skill-item d-flex align-items-center mb-3";
//             skillDiv.innerHTML = `
//                 <p class="skill-name fw-bold mb-0 flex-shrink-0" style="width: 65%;">${skill.name}</p>
//                 <div class="progress flex-grow-1">
//                     <div class="progress-bar" style="width: ${skill.level}%;"></div>
//                 </div>
//             `;

//             // ділимо по черзі в колонки
//             if (index % 2 === 0) col1.appendChild(skillDiv);
//             else col2.appendChild(skillDiv);
//         });

//         container.appendChild(col1);
//         container.appendChild(col2);
//     }

    
//     renderSkills(".skills-container", skills);
// });


// // 5lab

// document.addEventListener("DOMContentLoaded", () => {

    
//     fetch("./data.json")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Помилка завантаження JSON");
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log("JSON успішно завантажено:", data);
//             renderAllData(data);
//         })
//         .catch(error => {
//             console.error(error);
//             showErrorMessage("Не вдалося завантажити дані. Перевірте сервер або файл data.json.");
//         });

// });

// function showErrorMessage(message) {
//     const errorBox = document.createElement("div");
//     errorBox.textContent = message;
//     errorBox.style.background = "#ffdddd";
//     errorBox.style.color = "#a00";
//     errorBox.style.padding = "10px";
//     errorBox.style.margin = "10px 0";
//     errorBox.style.border = "1px solid #a00";
//     errorBox.style.textAlign = "center";

//     document.body.prepend(errorBox);
// }

// function renderAllData(data) {

    
//     const nameElement = document.getElementById("personName");
//     if (nameElement) {
//         nameElement.textContent = `${data.person.firstName} ${data.person.lastName}`;
//     }

    
//     document.querySelector(".contact_block a[href^='tel:']").textContent = data.contact.phone;
//     document.querySelector(".contact_block a[href^='tel:']").href = `tel:${data.contact.phone}`;

//     document.querySelector(".contact_block a[href^='http']").textContent = data.contact.website;
//     document.querySelector(".contact_block a[href^='http']").href = data.contact.website;

//     document.querySelector(".contact_block a[href='#']").textContent = data.contact.address;

    
//     const aboutText = document.querySelector(".about-me-text");
//     if (aboutText) aboutText.textContent = data.aboutMe;

    
//     if (data.skills) {
//         renderSkills(".skills-container", data.skills);
//     }

    
//     const jobContainer = document.querySelector(".job-experience-section .toggle-content");
//     if (jobContainer) {
//         jobContainer.innerHTML = ""; // очистка

//         data.jobExperience.forEach(job => {
//             jobContainer.innerHTML += `
//                 <div class="job-item mb-0 pb-3 border-bottom-job">
//                     <div class="d-flex justify-content-between align-items-baseline mb-0">
//                         <h3 class="job-title fw-bold fs-4 text-uppercase mb-0">${job.title}</h3>
//                         <span class="job-years fw-semibold fs-5">${job.years}</span>
//                     </div>
//                     <p class="job-company fst-italic mb-3 fs-5">${job.company}</p>
//                     <p class="job-description fs-5">${job.description}</p>
//                 </div>
//             `;
//         });
//     }

    
//     const langLists = document.querySelectorAll(".language-list");
//     if (langLists.length === 2) {
//         langLists[0].innerHTML = "";
//         langLists[1].innerHTML = "";

//         data.languages.forEach((lang, index) => {
//             const li = `<li><span class="accent-dot" style="color:#01a698;">•</span> ${lang.toUpperCase()}</li>`;
//             if (index % 2 === 0) langLists[0].innerHTML += li;
//             else langLists[1].innerHTML += li;
//         });
//     }

    
//     const hobbiesList = document.querySelector(".hobbies-list");
//     if (hobbiesList) {
//         hobbiesList.innerHTML = "";
//         data.hobbies.forEach(h => {
//             hobbiesList.innerHTML += `
//                 <li><span class="accent-dot" style="color:#01a698;">•</span> ${h.toUpperCase()}</li>
//             `;
//         });
//     }

    
//     const educationContainer = document.querySelector(".references-section").previousElementSibling;
//     const eduItems = educationContainer.querySelectorAll(".education_item");

//     educationContainer.innerHTML = "";
//     data.education.forEach(ed => {
//         educationContainer.innerHTML += `
//             <div class="education_item mb-4 text-center">
//                 <h3 class="fs-4 text-uppercase mb-1">${ed.university}</h3>
//                 <p class="degree_title text-uppercase mb-0 fs-5">${ed.degree}</p>
//                 <p class="years fs-5">${ed.years}</p>
//             </div>
//         `;
//     });


//     const refContainer = document.querySelector(".references-section");
//     const refList = refContainer.querySelector(".references-section");
// }





document.addEventListener("DOMContentLoaded", () => {

    initToggle();

    fetch("./data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка завантаження JSON");
            }
            return response.json();
        })
        .then(data => {
            renderAllData(data);
        })
        .catch(() => {
            showErrorMessage("Не вдалося завантажити дані. Перевірте сервер або файл data.json.");
        });
});

/* ===== Toggle ===== */
function initToggle() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.classList.add("active");

        const arrow = button.querySelector(".arrow_wrapper");
        if (!arrow) return;

        arrow.addEventListener("click", e => {
            e.stopPropagation();
            button.classList.toggle("active");
            arrow.classList.toggle("rotated");
        });
    });
}

/* ===== Error ===== */
function showErrorMessage(message) {
    const errorBox = document.createElement("div");
    errorBox.textContent = message;
    errorBox.style.cssText = `
        background:#ffdddd;
        color:#a00;
        padding:10px;
        margin:10px 0;
        border:1px solid #a00;
        text-align:center;
    `;
    document.body.prepend(errorBox);
}

/* ===== Render All ===== */
function renderAllData(data) {

    // Name
    const name = document.getElementById("personName");
    if (name) {
        name.textContent = `${data.person.firstName} ${data.person.lastName}`;
    }

    // About me
    const about = document.querySelector(".about-me-text");
    if (about) about.textContent = data.aboutMe;

    // Contact
    const phone = document.querySelector(".contact_block a[href^='tel']");
    if (phone) {
        phone.textContent = data.contact.phone;
        phone.href = `tel:${data.contact.phone}`;
    }

    const site = document.querySelector(".contact_block a[href^='http']");
    if (site) {
        site.textContent = data.contact.website;
        site.href = `http://${data.contact.website}`;
    }

    const address = document.querySelector(".contact_block a[href='#']");
    if (address) address.textContent = data.contact.address;

    // Skills
    renderSkills(".skills-container", data.skills);

    // Jobs
    renderJobs(data.jobExperience);

    // Languages
    renderLanguages(data.languages);

    // Hobbies
    renderHobbies(data.hobbies);

    // Education
    renderEducation(data.education);

    // References (опціонально, але +бал)
    renderReferences(data.references);
}

/* ===== Helpers ===== */
function renderSkills(selector, skills) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = "";
    const col1 = document.createElement("div");
    const col2 = document.createElement("div");
    col1.className = col2.className = "col-md-6";

    skills.forEach((s, i) => {
        const item = document.createElement("div");
        item.className = "skill-item d-flex align-items-center mb-3";
        item.innerHTML = `
            <p class="skill-name fw-bold mb-0" style="width:65%">${s.name}</p>
            <div class="progress flex-grow-1">
                <div class="progress-bar" style="width:${s.level}%"></div>
            </div>
        `;
        (i % 2 === 0 ? col1 : col2).appendChild(item);
    });

    container.append(col1, col2);
}

function renderJobs(jobs) {
    const box = document.querySelector(".job-experience-section .toggle-content");
    if (!box) return;

    box.innerHTML = "";
    jobs.forEach(j => {
        box.innerHTML += `
            <div class="job-item pb-3 border-bottom-job">
                <div class="d-flex justify-content-between">
                    <h3 class="fw-bold fs-4">${j.title}</h3>
                    <span class="fs-5">${j.years}</span>
                </div>
                <p class="fst-italic fs-5">${j.company}</p>
                <p class="fs-5">${j.description}</p>
            </div>
        `;
    });
}

function renderLanguages(langs) {
    const lists = document.querySelectorAll(".language-list");
    if (lists.length < 2) return;

    lists[0].innerHTML = lists[1].innerHTML = "";

    langs.forEach((l, i) => {
        const li = `<li>• ${l.toUpperCase()}</li>`;
        lists[i % 2].innerHTML += li;
    });
}

function renderHobbies(hobbies) {
    const ul = document.querySelector(".hobbies-list");
    if (!ul) return;

    ul.innerHTML = "";
    hobbies.forEach(h => ul.innerHTML += `<li>• ${h.toUpperCase()}</li>`);
}

function renderEducation(edu) {
    const box = document.querySelector(".education_item")?.parentElement;
    if (!box) return;

    box.innerHTML = "";
    edu.forEach(e => {
        box.innerHTML += `
            <div class="education_item mb-4 text-center">
                <h3 class="fs-4">${e.university}</h3>
                <p class="fs-5">${e.degree}</p>
                <p class="fs-5">${e.years}</p>
            </div>
        `;
    });
}

function renderReferences(refs) {
    const box = document.querySelector(".references-section");
    if (!box) return;

    const items = box.querySelectorAll(".reference-item");
    items.forEach(i => i.remove());

    refs.forEach(r => {
        box.innerHTML += `
            <div class="reference-item text-center mb-4">
                <h3 class="fw-bold">${r.name}</h3>
                <p>${r.address}</p>
                <p>${r.phone}</p>
                <p>${r.email}</p>
            </div>
        `;
    });
}
