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


document.addEventListener("DOMContentLoaded", function () {
    
    const fullName = "Noel Taylor";
    const nameElement = document.getElementById("personName");

    if (nameElement) {
        nameElement.textContent = fullName;
    }

    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.classList.add("active"); // стартово все відкрите

        const arrow = button.querySelector(".arrow_wrapper");
        arrow.addEventListener("click", e => {
            e.stopPropagation();
            button.classList.toggle("active");
            arrow.classList.toggle("rotated");
        });
    });

    
    const skills = [
        { name: "Adobe Photoshop", level: 80 },
        { name: "Microsoft Word", level: 10 },
        { name: "HTML/CSS", level: 80 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Microsoft PowerPoint", level: 80 }
    ];

    function renderSkills(containerSelector, data) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        // очищаємо перед вставленням
        container.innerHTML = "";

        // ділимо на дві колонки
        const col1 = document.createElement("div");
        col1.className = "col-md-6";
        const col2 = document.createElement("div");
        col2.className = "col-md-6";

        data.forEach((skill, index) => {
            const skillDiv = document.createElement("div");
            skillDiv.className = "skill-item d-flex align-items-center mb-3";
            skillDiv.innerHTML = `
                <p class="skill-name fw-bold mb-0 flex-shrink-0" style="width: 65%;">${skill.name}</p>
                <div class="progress flex-grow-1">
                    <div class="progress-bar" style="width: ${skill.level}%;"></div>
                </div>
            `;

            // ділимо по черзі в колонки
            if (index % 2 === 0) col1.appendChild(skillDiv);
            else col2.appendChild(skillDiv);
        });

        container.appendChild(col1);
        container.appendChild(col2);
    }

    
    renderSkills(".skills-container", skills);
});


