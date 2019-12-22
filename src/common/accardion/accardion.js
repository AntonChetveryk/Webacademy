import "./accardion.scss";

const sectionsContent = [
  { tittle: "Section 1", text: "Text 1" },
  { tittle: "Section 2", text: "Text 2" },
  { tittle: "Section 3", text: "Text 3" }
];

function renderSection(item) {
  const section = document.createElement("div");
  section.classList.add("section");
  const sectionTittle = document.createElement("div");
  sectionTittle.textContent = item.tittle;
  sectionTittle.classList.add("sectionTittle");
  const sectionText = document.createElement("div");
  sectionText.classList.add("sectionText");
  sectionText.textContent = item.text;
  section.append(sectionTittle);
  section.append(sectionText);

  return section;
}

const renderSections = mountPoint => {
  const sections = [];

  sectionsContent.forEach(item => {
    const section = renderSection(item);
    sections.push(section);
    mountPoint.append(section);
  });

  return sections;
};

const createAccardion = mountPoint => {
  renderSections(mountPoint);

  function sectionHandler() {
    const sections = document.querySelectorAll(".section");

    sections.forEach(function(item) {
      function showSectionText() {
        item.lastElementChild.classList.toggle("active");
      }
      item.firstElementChild.addEventListener("click", showSectionText);
    });
  }

  sectionHandler();
};

export { createAccardion };
