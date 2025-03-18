const bolygók = {
    "Nap": "Nap - Központi csillag",
    "Merkúr": "Merkúr - 57,9M km",
    "Vénusz": "Vénusz - 108,2M km",
    "Föld": "Föld - 149,6M km",
    "Mars": "Mars - 227,9M km",
    "Jupiter": "Jupiter - 778,3M km",
    "Szaturnusz": "Szaturnusz - 1,4B km",
    "Uránusz": "Uránusz - 2,9B km",
    "Neptunusz": "Neptunusz - 4,5B km"
};

const informaciok = document.createElement("div");
informaciok.id = "informaciok";
document.body.appendChild(informaciok);

document.querySelectorAll(".Bolygó").forEach(bolygó => {
    bolygó.addEventListener("mouseover", (event) => {
        informaciok.textContent = bolygók[bolygó.id] || "Ismeretlen bolygó";
        informaciok.style.display = "block";
        informaciok.style.left = event.pageX + "px";
        informaciok.style.top = (event.pageY + 20) + "px";
    });
    
    bolygó.addEventListener("mouseout", () => {
        informaciok.style.display = "none";
    });

});