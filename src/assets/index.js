const startDate = new Date('2022-01-01');
const currentDate = new Date();

let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
let monthDiff = currentDate.getMonth() - startDate.getMonth() + 1;

if (monthDiff === 12) {
    monthDiff = 0;
    yearDiff += 1;
}

let formattedDuration = `${yearDiff}Y`;
if (monthDiff !== 0) {
    formattedDuration = `${formattedDuration} ${monthDiff}M`;
}

const experiencesSection = document.getElementById("experiences");
experiencesSection.setAttribute("data-total-duration", formattedDuration);
