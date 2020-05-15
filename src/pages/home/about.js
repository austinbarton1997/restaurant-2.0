const container = document.querySelector("#content");

export function createAbout() {
    const aboutText = document.createElement("div");
    aboutText.setAttribute("id", "about");
    aboutText.setAttribute("class", "about");
    aboutText.innerText = 'About Our Family';
    container.appendChild(aboutText);

    const aboutBox1 = document.createElement("div");
    aboutBox1.setAttribute("class", "aboutBox1");
    container.appendChild(aboutBox1);

    const boxText1 = document.createElement("div");
    boxText1.setAttribute("class", "boxText1");
    boxText1.innerText = 'Our Family';
    aboutBox1.appendChild(boxText1);

    const boxP1 = document.createElement("p");
    boxP1.setAttribute("class", "boxP1");
    boxP1.innerText = paragraphOne;
    aboutBox1.appendChild(boxP1);

    const aboutBox2 = document.createElement("div");
    aboutBox2.setAttribute("class", "aboutBox2");
    container.appendChild(aboutBox2);

    const boxText2 = document.createElement("div");
    boxText2.setAttribute("class", "boxText2");
    boxText2.innerText = 'Our Ingredients';
    aboutBox2.appendChild(boxText2);

    const boxP2 = document.createElement("p");
    boxP2.setAttribute("class", "boxP1");
    boxP2.innerText = paragraphOne;
    aboutBox2.appendChild(boxP2);
}

let paragraphOne = `
Pellentesque habitant morbi tristique senectuset netus et malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
Donec eu libero sit amet quam egestas semper.
Aenean ultricies mi vitae est.Mauris placerat eleifend leo.
Quisque sit amet est et sapien ullamcorper pharetra.
Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
Donec non enim in turpis pulvinar facilisis.Ut felis.
Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
Aliquam erat volutpat.Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus`;
