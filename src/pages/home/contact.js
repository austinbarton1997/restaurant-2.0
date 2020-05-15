const container = document.querySelector("#content");

let street = ` Address: 9481 Schoolhouse Street
Hawthorne, CA 90250`;

export function createContact() {

    const contactText = document.createElement("div");
    contactText.setAttribute("id", "contact");
    contactText.setAttribute("class", "contact");
    contactText.innerText = 'Contact Us';
    container.appendChild(contactText);

    const background = document.createElement("div");
    background.setAttribute("class", "contactBackground");
    container.appendChild(background);

    const restImg = document.createElement("img");
    restImg.setAttribute("class", "restImg");
    restImg.setAttribute("src", "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background.appendChild(restImg);


    const number = document.createElement("div");
    number.setAttribute("class", "number");
    number.innerText = 'Phone: 1(720) 202-2022';
    background.appendChild(number);

    const address = document.createElement("div");
    address.setAttribute("class", "address");
    address.innerText = street;
    background.appendChild(address);


    const column = document.createElement("div");
    column.setAttribute("class", "column");
    background.appendChild(column);
    const column1 = document.createElement("div");
    column1.setAttribute("class", "column1");
    background.appendChild(column1);


    const nameBox = document.createElement("label");
    nameBox.setAttribute("for", "fname");
    nameBox.innerText = 'First Name';
    column.appendChild(nameBox);

    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "fname");
    input1.setAttribute("name", "firstname");
    input1.setAttribute("placeholder", "Your name..");
    nameBox.appendChild(input1);

    const nameBox1 = document.createElement("label");
    nameBox1.setAttribute("for", "lname");
    nameBox1.innerText = 'Last Name';
    column.appendChild(nameBox1);

    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "lname");
    input2.setAttribute("name", "lastname");
    input2.setAttribute("placeholder", "Your last name..");
    nameBox1.appendChild(input2);

    const nameBox2 = document.createElement("label");
    nameBox2.setAttribute("for", "pnumber");
    nameBox2.innerText = 'Phone Number';
    column.appendChild(nameBox2);

    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "pnumber");
    input3.setAttribute("name", "phonenumber");
    input3.setAttribute("placeholder", "Your phone number..");
    nameBox2.appendChild(input3);

    const nameBox3 = document.createElement("label");
    nameBox3.setAttribute("for", "cconcern");
    nameBox3.innerText = 'Comment or Concern';
    column1.appendChild(nameBox3);

    const input4 = document.createElement("textarea");
    input4.setAttribute("id", "subject");
    input4.setAttribute("name", "subject");
    input4.setAttribute("style", "height:170px");
    input4.setAttribute("placeholder", "Write something..");
    nameBox3.appendChild(input4);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("class", "submit");
    submit.setAttribute("value", "submit");
    background.appendChild(submit);

    var sub = document.querySelector(".submit");
    sub.addEventListener("click", function () { alert("Currently Disabled") });

}