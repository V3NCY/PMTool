function toggleFlag() {
    const flagIcon = event.target.closest(".flag-icon");
    const task = flagIcon.parentElement;
    const checkbox = task.querySelector(".task-item");
    const isFlagged = flagIcon.classList.contains("flagged");

    if (!isFlagged) {
        flagIcon.classList.add("flagged");
        checkbox.setAttribute("data-important", "true");
    } else {
        flagIcon.classList.remove("flagged");
        checkbox.setAttribute("data-important", "false");
    }
}
