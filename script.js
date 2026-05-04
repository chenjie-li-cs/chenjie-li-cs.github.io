const data = window.siteData;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value || "";
  });
};

const externalAttrs = (link, url) => {
  if (url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
};

const makeLink = (label, url) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  externalAttrs(link, url);
  return link;
};

const setLinkedText = (selector, value, links = []) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = "";
    const replacements = links.filter((link) => value.includes(link.label));

    if (replacements.length === 0) {
      element.textContent = value || "";
      return;
    }

    let cursor = 0;
    replacements.forEach((link) => {
      const index = value.indexOf(link.label, cursor);
      if (index < 0) return;

      element.append(document.createTextNode(value.slice(cursor, index)));
      element.append(makeLink(link.label, link.url));
      cursor = index + link.label.length;
    });
    element.append(document.createTextNode(value.slice(cursor)));
  });
};

const renderTopLinks = () => {
  const container = document.querySelector("#top-links");
  if (!container) return;

  const links = [
    { label: "Email", url: "mailto:cli206@uic.edu" },
    ...data.profileLinks.filter((link) =>
      ["CV", "Google Scholar", "LinkedIn", "GitHub"].includes(link.label)
    )
  ];

  container.innerHTML = "";
  links.forEach((link) => container.append(makeLink(link.label, link.url)));
};

const renderResearch = () => {
  const list = document.querySelector("#research-list");
  if (!list) return;

  list.innerHTML = "";

  data.researchAreas.forEach((area) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${area.title}.</strong> ${area.description}`;
    list.append(item);
  });
};

const renderInternships = () => {
  const list = document.querySelector("#internship-list");
  if (!list) return;

  list.innerHTML = "";

  data.internships.forEach((internship) => {
    const item = document.createElement("article");
    item.className = "internship";
    item.innerHTML = `
      <div class="company-logo">
        <img src="${internship.logo}" alt="${internship.alt}">
      </div>
      <div>
        <h3>${internship.company}</h3>
        <p class="meta">${internship.role} / ${internship.location} / ${internship.dates}</p>
        <ul>${internship.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    `;
    list.append(item);
  });
};

const renderPublications = () => {
  const list = document.querySelector("#publication-list");
  if (!list) return;

  list.innerHTML = "";

  data.publications.forEach((publication) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div><span class="publication-title">${publication.title}</span></div>
      <div>${publication.authors}</div>
      <div class="meta">${publication.venue} <span class="publication-links"></span></div>
    `;
    item.querySelector(".publication-links").append(makeLink("[paper]", publication.url));
    list.append(item);
  });
};

const renderProjects = () => {
  const list = document.querySelector("#project-list");
  if (!list) return;

  list.innerHTML = "";

  data.projects.forEach((project) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${project.title}.</strong> ${project.description} `;
    if (project.url && project.url !== "#") {
      item.append(makeLink("[link]", project.url));
    }
    list.append(item);
  });
};

const renderService = () => {
  const container = document.querySelector("#service-list");
  if (!container) return;

  container.innerHTML = "";

  data.service.forEach((group) => {
    const section = document.createElement("div");
    section.className = "service-group";
    const heading = document.createElement("h3");
    heading.textContent = group.label;
    const list = document.createElement("ul");
    list.className = "compact-list";
    group.items.forEach((entry) => {
      const item = document.createElement("li");
      item.textContent = entry;
      list.append(item);
    });
    section.append(heading, list);
    container.append(section);
  });
};

const renderGallery = () => {
  const gallerySection = document.querySelector("#gallery");
  if (!gallerySection) return;

  const visibleEntries = data.gallery.filter((entry) => entry.image);

  if (visibleEntries.length === 0) {
    gallerySection.hidden = true;
    return;
  }

  gallerySection.hidden = false;
  const list = document.querySelector("#gallery-list");
  list.innerHTML = "";

  visibleEntries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "gallery-item";

    const image = document.createElement("img");
    image.src = entry.image;
    image.alt = entry.alt;
    item.append(image);

    const title = document.createElement("h3");
    title.textContent = entry.title;
    const caption = document.createElement("p");
    caption.className = "muted";
    caption.textContent = entry.caption;
    item.append(title, caption);
    list.append(item);
  });
};

setText("[data-field='name']", data.name);
setText("[data-field='initials']", data.initials);
setText("[data-field='affiliation']", data.affiliation);
setLinkedText("[data-field='summary']", data.summary, data.summaryLinks);
setText("[data-field='jobMarket']", data.jobMarket);
setText("[data-field='researchIntro']", data.researchIntro);
setText("[data-field='galleryIntro']", data.galleryIntro);

renderTopLinks();
renderResearch();
renderInternships();
renderPublications();
renderProjects();
renderService();
renderGallery();

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
