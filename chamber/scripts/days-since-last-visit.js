const NUM_VISITS_STRING_1 = "You've visited this page "
const NUM_VISITS_STRING_2 = " day(s) ago!"

if(sessionStorage.getItem("lastVisitDate") == null) {
    sessionStorage.setItem("lastVisitDate", new Date());
    document.getElementById("daysSinceLastVisist").innerText = "This is your first visit to this page. Welcome!"
} else {
    let lastVisitDate = sessionStorage.getItem("lastVisitDate");
    let daysSinceLastVisit = new Date(lastVisitDate).getDate() - new Date().getDate();
    sessionStorage.setItem("lastVisitDate", new Date());
    if(daysSinceLastVisit === 0) {document.getElementById("daysSinceLastVisist").innerText = "You were here earlier today";}
    else {
        document.getElementById("daysSinceLastVisist").innerText = NUM_VISITS_STRING_1 + daysSinceLastVisit.toString() + NUM_VISITS_STRING_2;
    }
}
