const bolygók = {
    "Nap": "Nap - Központi csillag",
    "Merkúr": "Merkúr - 57,9M km",
    "Vénusz": "Vénusz - 108,2M km",
    "Föld": "Föld - 149,6M km",
    "Mars": "Mars - 227,9M km",
    "Jupiter": "Jupiter - 778,3M km",
    "Szaturnusz": "Szaturnusz - 1,4Mrd km",
    "Uránusz": "Uránusz - 2,9Mrd km",
    "Neptunusz": "Neptunusz - 4,5Mrd km"
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

const erdekessegek = {
    bolygok: [
        "A Merkúrnak nincsen légköre, ezért hatalmas a hőmérsékletingadozása.",
        "A Vénusz felszíni hőmérséklete elérheti a 465°C-ot.",
        "A Marsnak van a Naprendszer legnagyobb vulkánja, az Olympus Mons.",
        "A Jupiter tömege több mint kétszerese az összes többi bolygó tömegének együtt.",
        "A Szaturnusz gyűrűi jégből, porból és apró törmelékekből állnak.",
        "Az Uránusz az egyetlen bolygó, amely szinte oldalán forog.",
        "A Neptunuszon viharok tombolnak, köztük a híres Nagy Sötét Folt.",
        "A Föld az egyetlen ismert bolygó, amelyen folyékony víz található a felszínen.",
        "A Jupiter mágneses mezeje 14-szer erősebb a Földénél.",
        "A Vénuszon a Nap nyugaton kel és keleten nyugszik."
    ],
    csillagaszat: [
        "A Naprendszerünk körülbelül 4,6 milliárd éves.",
        "A fény egy év alatt körülbelül 9,46 billió kilométert tesz meg.",
        "A neutroncsillagok olyan sűrűek, hogy egy teáskanálnyi anyaguk milliárd tonnát nyomna.",
        "A galaxisok többsége spirális vagy elliptikus alakú.",
        "A Föld légköre miatt a csillagok fénye pislogni látszik.",
        "A Nap energiáját a magjában zajló nukleáris fúzió biztosítja.",
        "A Tejútrendszerben körülbelül 100-400 milliárd csillag található.",
        "A fekete lyukak olyan erős gravitációval rendelkeznek, hogy a fény sem szökhet el belőlük.",
        "Egy nap a Vénuszon hosszabb, mint egy éve (243 földi nap).",
        "Az Androméda-galaxis közeledik a Tejútrendszerhez, és 4 milliárd év múlva összeütköznek."
    ],
    kuldetesek: [
        "A Szputnyik-1 volt az első ember alkotta műhold, amelyet 1957-ben bocsátottak fel.",
        "A Voyager-1 1977-ben indult, és jelenleg a csillagközi térben halad.",
        "Az első ember a világűrben Jurij Gagarin volt 1961-ben.",
        "Az Apollo-13 küldetése során a legénységnek sikerült megmenekülnie egy súlyos meghibásodás után.",
        "A Mars Pathfinder 1997-ben sikeresen landolt a Marson, és elindította a Sojourner rovert.",
        "A James Webb űrteleszkóp képes a korai világegyetem infravörös vizsgálatára.",
        "A Hubble űrteleszkóp 1990 óta készít ikonikus képeket a világegyetemről.",
        "Az Artemis-program célja, hogy újra embereket juttasson a Holdra a 2020-as években.",
        "A Cassini űrszonda 13 évet töltött a Szaturnusz körül, mielőtt 2017-ben elpusztult.",
        "A Perseverance marsjáró szerves anyagok nyomait keresi a Marson."
    ]
};

function mutatErdekesseg() {
    const tema = document.getElementById("tema").value;
    const randomIndex = Math.floor(Math.random() * erdekessegek[tema].length);
    const erdekessegElem = document.getElementById("erdekesseg");
    erdekessegElem.style.opacity = 0;
    setTimeout(() => {
        erdekessegElem.textContent = erdekessegek[tema][randomIndex];
        erdekessegElem.style.opacity = 1;
    }, 500);
}