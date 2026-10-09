
/* Question 1 */
function showBox() {
    let box = document.getElementById("myBox");
    box.classList.add("show-box");
}

/* Question 2 */
function imageHover() {
    let picture = document.getElementById("myImage");
    picture.classList.add("image-effect");
}

function imageNormal() {
    let picture = document.getElementById("myImage");
    picture.classList.remove("image-effect");
}

/* Question 3 */
function highlightNotices() {
    let notices = document.getElementsByTagName("p");

    for (let i = 0; i < notices.length; i++) {
        notices[i].innerHTML = "📢 " + notices[i].innerHTML;
        notices[i].classList.add("highlight");
    }
}

/* Question 4 */
function highlightRules() {
    let rules = document.getElementById("studentRules");
    let paragraphs = rules.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "✔ " + paragraphs[i].innerHTML;
        paragraphs[i].classList.add("highlight");
    }
}

/* Question 4: Highlight Course*/
function highlightCourse() {
    let course = document.getElementById("courseInfo");
    let paragraphs = course.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "📘 " + paragraphs[i].innerHTML;
        paragraphs[i].classList.add("highlight");
    }
}
