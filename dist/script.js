// ============ Navbar Collapse - START ============
let navbarBtns = document.querySelectorAll(
    '[data-collapse-toggle="navbar-search"]'
);

navbarBtns.forEach((btn) => {
    btn.onclick = () => {
        let navbar = document.getElementById("navbar-search");
        navbar.classList.toggle("hidden");
    };
});
// ============ Navbar Collapse - END ============

// ============ Fetching the Menu - START ============
let menu; // Declare the variable
async function getData() {
    const response = await fetch("./assets/menu.json");
    const data = await response.json();
    menu = data; // Assign fetched data to the variable
}
// ============ Fetching the Menu - END ============

// Use an async function to wait for the data to be fetched before accessing it
(async () => {
    await getData(); // Wait for getData to finish
    // Now, the data will be available in menu variable

    ViewMenuCategories(menu);
})();


// ============ Setting menu categories on homepage - START ============
function ViewMenuCategories(menu) {
    let categories = new Set(menu.map((product) => product.category));
    let viewMenu = document.getElementById("viewmenu");
    categories.forEach((category) => {
        let button = document.createElement("button");
        button.classList.add(
            "bg-blue-500",
            "text-white",
            "px-6",
            "py-3",
            "rounded",
            "shadow-md",
            "hover:bg-blue-600",
            "mb-2"
        );
        button.textContent = category;
        viewMenu.appendChild(button);
    });
}
// ============ Setting menu categories on homepage - END ============
