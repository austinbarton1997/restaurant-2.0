const container = document.querySelector("#content");

export function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("class", "header");
    container.appendChild(header);

    const logoText = document.createElement('a');
    logoText.innerText = 'Family Pizzeria';
    logoText.classList.add('logoText')
    logoText.setAttribute("id", "home");
    container.appendChild(logoText);

    const navTabs = document.createElement("nav");
    navTabs.setAttribute("class", "navTabs");

    const homeTab = document.createElement('a');
    homeTab.innerText = 'Home';
    homeTab.classList.add('tabs')
    homeTab.setAttribute('href', '#home')
    navTabs.appendChild(homeTab);

    const aboutTab = document.createElement('a');
    aboutTab.innerText = 'About';
    aboutTab.classList.add('tabs')
    aboutTab.setAttribute('href', '#about')
    navTabs.appendChild(aboutTab);

    const menuTab = document.createElement('a');
    menuTab.innerText = 'Menu';
    menuTab.classList.add('tabs')
    menuTab.setAttribute('href', '#menu')
    navTabs.appendChild(menuTab);

    const contactTab = document.createElement('a');
    contactTab.innerText = 'Contact Us';
    contactTab.classList.add('tabs')
    contactTab.setAttribute('href', '#contact')
    navTabs.appendChild(contactTab);

    header.appendChild(navTabs);
}