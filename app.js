document.addEventListener("DOMContentLoaded", function() {

    // SIDEBAR BUTTON ANIMATION
    let map = document.getElementById("map");
    let loupe = document.getElementById("loupe");
    let playersSection = document.getElementById("players-section");
    let charactersSection = document.getElementById("characters-section")
    let mapSection = document.getElementById("map-section");
    let sectionArray = [playersSection, charactersSection, mapSection]
    let mapContainer = document.getElementById("map-container")
    const mapWidth = mapContainer.offsetWidth;
    const mapHeight = mapContainer.offsetHeight;
    const loupeWidth = loupe.offsetWidth;
    const loupeHeight = loupe.offsetHeight;

    // Def button id 
    let playersSectionButton = document.getElementById("players-button");
    let charactersSectionButton = document.getElementById("characters-button")
    let mapSectionButton = document.getElementById("map-button");
    let buttonArray = [playersSectionButton, charactersSectionButton, mapSectionButton];
    // Functions
    function changeSection(displaySection, displayButton) {
        for (let section of sectionArray) {
            if (section === displaySection) {
                section.style.display = 'block';
            } else {
                section.style.display = "none";

            }
        };
        for (let button of buttonArray) {
            if (button === displayButton) {
                button.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
                });
            } else {
                button.style.backgroundColor = '';
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = "";
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "";
                });
            };
        };
    }
    // Button animations
    playersSectionButton.addEventListener("click", () => changeSection(playersSection, playersSectionButton));
    charactersSectionButton.addEventListener("click", () => changeSection(charactersSection, charactersSectionButton));
    mapSectionButton.addEventListener("click", () => changeSection(mapSection, mapSectionButton));
    // ZOOM MAP ANIMATION
    mapSection.addEventListener("mousemove", (event) => {
        let zoom = 2;
        const x = event.pageX;
        const y = event.pageY;
        const mapRecCoords = map.getBoundingClientRect();

        loupe.style.backgroundSize = `${mapWidth * zoom}px`
        //Coordonnées de la loupe qui suivent le pointeur
        loupe.style.left = `${x - mapRecCoords.left - loupeWidth/2}px`;
        loupe.style.top = `${y - mapRecCoords.top - loupeHeight/2}px`;
        // Déplacement du zoom
        loupe.style.backgroundPosition = `-${(x - mapRecCoords.left + mapWidth) * zoom -loupeWidth/2 }px -${(y - mapRecCoords.top + mapHeight)* zoom - loupeHeight/2}px`;

        // Disparition de la loupe si le curseur sort du cadre.
        if ((x < (mapRecCoords.left)) || (x > mapRecCoords.right) || (y < mapRecCoords.top) || (y > mapRecCoords.bottom)) {
            loupe.style.display = "none";
        } else {
            loupe.style.display = "block";
        }
    });
  });
