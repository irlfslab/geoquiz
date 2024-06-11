const correct = ["B", "C", "B", "B", "C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    
    userAnswers.forEach((answer, idx) => {

        if(answer === correct[idx]){
            score += 1;
            questions[idx].classList.add("correct");
        } else {
            questions[idx].classList.add("incorrect");
        }
    });

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/5!`;
    for (let i = 0; i < document.getElementsByName("q1").length; i++) {
        document.getElementsByName("q1")[i].disabled = true;
    }
    for (let i = 0; i < document.getElementsByName("q2").length; i++) {
        document.getElementsByName("q2")[i].disabled = true;
    }
    for (let i = 0; i < document.getElementsByName("q3").length; i++) {
        document.getElementsByName("q3")[i].disabled = true;
    }
    for (let i = 0; i < document.getElementsByName("q4").length; i++) {
        document.getElementsByName("q4")[i].disabled = true;
    }
    for (let i = 0; i < document.getElementsByName("q5").length; i++) {
        document.getElementsByName("q5")[i].disabled = true;
    }
});
