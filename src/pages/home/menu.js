const container = document.querySelector("#content");

export function createMenu() {
    const menuText = document.createElement("div");
    menuText.setAttribute("id", "menu");
    menuText.setAttribute("class", "menu");
    menuText.innerText = 'Our Menu';
    container.appendChild(menuText);

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menuContainer");
    container.appendChild(menuContainer);

    const appetizers = document.createElement("div");
    appetizers.setAttribute("id", "appetizers");
    appetizers.setAttribute("class", "appetizers");
    appetizers.innerText = 'Appetizers';
    menuContainer.appendChild(appetizers);

    const rows = document.createElement("div");
    rows.setAttribute("class", "row");
    menuContainer.appendChild(rows);

    const entree = document.createElement("div");
    entree.setAttribute("id", "entree");
    entree.setAttribute("class", "entree");
    entree.innerText = 'Entrees';
    menuContainer.appendChild(entree);

    const rows2 = document.createElement("div");
    rows2.setAttribute("class", "row");
    menuContainer.appendChild(rows2);

    let i = 0;
    let entrees = ["Pizza", "Burgers", "Steaks", "Ribs", "Mac N Cheese"]
    let apps = ["Fries", "Cheese Sticks", "Roasted Potatoes", "Sweet Potatoes", "Loaded Chips"]
    let entreeBackground = [
        'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/570px-RedDot_Burger.jpg',
        'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
        'https://img.freepik.com/free-photo/closeup-pork-ribs-grilled-with-bbq-sauce_79782-1.jpg?size=626&ext=jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg'];

    let appBackground = [
        'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://st.depositphotos.com/2313203/2479/i/450/depositphotos_24796815-stock-photo-cheese-sticks.jpg',
        'https://images.pexels.com/photos/273825/pexels-photo-273825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3233282/pexels-photo-3233282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];


    for (i = 0; i < 5; i++) {
        const food1 = document.createElement("div");
        food1.setAttribute("class", "foodBackground");
        food1.setAttribute("style", `background-image: url("${appBackground[i]}")`);
        rows.appendChild(food1);

        const foodText = document.createElement("div");
        foodText.setAttribute("id", "foodText");
        foodText.setAttribute("class", "foodText");
        foodText.innerText = apps[i]
        food1.appendChild(foodText);
    }


    for (i = 0; i < 5; i++) {
        const food2 = document.createElement("div");
        food2.setAttribute("class", "foodBackground");
        food2.setAttribute("style", `background-image: url("${entreeBackground[i]}")`);
        rows2.appendChild(food2);

        const foodText2 = document.createElement("div");
        foodText2.setAttribute("id", "foodText");
        foodText2.setAttribute("class", "foodText");
        foodText2.innerText = entrees[i]
        food2.appendChild(foodText2);
    }
}
