document.addEventListener("DOMContentLoaded", function() {
    fetch("EldenThings.json")
        .then(response => response.json())
        .then(data => {
            console.log("Loaded Data: ", data);
    
            const dataDisplay = document.getElementById("dataDisplay");
    
            if (data && data.Elden && data.Elden.eldenThings) {
                data.Elden.eldenThings.forEach(item => {
                            // Create a container for each item (optional but helps in styling and organization)
                    const itemContainer = document.createElement("div");
                    itemContainer.classList.add("item-container");
    
                            // Create and append Name element
                    const nameElement = document.createElement("p");
                    nameElement.textContent = item.Name;
                    nameElement.contentEditable = true;  // Allows editing
                    itemContainer.appendChild(nameElement);
    
                            // Create and append Type element
                    const typeElement = document.createElement("p");
                    typeElement.textContent = item.Type;
                    typeElement.contentEditable = true;  // Allows editing
                    itemContainer.appendChild(typeElement);
    
                            // Create and append Description element
                    const descriptionElement = document.createElement("p");
                    descriptionElement.textContent = item.Description;
                    descriptionElement.contentEditable = true;  // Allows editing
                    itemContainer.appendChild(descriptionElement);
    
                            // Create and append Image element
                    const photoElement = document.createElement("img");
                    photoElement.src = item.photo;
                    photoElement.alt = item.Name;
                    photoElement.classList.add("photo"); // You can use this class to style the image
                    itemContainer.appendChild(photoElement);
    
                            // Append the item container to the main display area
                    dataDisplay.appendChild(itemContainer);
                });
            } else {
                dataDisplay.textContent = "Error: Missing or malformed data in the JSON file.";
                    }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
            document.getElementById("dataDisplay").textContent = "Error loading JSON data.";
        });
    });