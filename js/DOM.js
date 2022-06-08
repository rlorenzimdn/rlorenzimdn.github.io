function funcionDOM() {
    const session = sessionStorage.getItem('bookT');
    var newSection = document.createElement("section");
    var newContent = document.createTextNode(session);
    newSection.appendChild(newContent);
    var currentSection = document.getElementById("section1");
    document.body.insertBefore(newSection, currentSection);
}
funcionDOM();