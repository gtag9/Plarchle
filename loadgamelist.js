fetch("gamelist.json")
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.name.localeCompare(b.name));
                const gameContainer = document.getElementById("game-container");
                data.forEach(game => {
                    const gameDiv = document.createElement("a");
                    gameDiv.href = game.file;
                    gameDiv.classList.add("game-container");

                    const gameImage = document.createElement("img");
                    gameImage.src = game.img;
                    gameImage.alt = game.name;
                    gameImage.classList.add("game-image");

                    const gameTitle = document.createElement("div");
                    gameTitle.textContent = game.name;
                    gameTitle.classList.add("game-title");

                    gameDiv.appendChild(gameImage);
                    gameDiv.appendChild(gameTitle);

                    gameContainer.appendChild(gameDiv);
                });
            })
<<<<<<< HEAD
            .catch(error => console.error("Error loading gamelist.json:", error));
=======
            .catch(error => console.error("Error loading gamelist.json:", error));
>>>>>>> e220eda7291de86127418f6d5e678b3d44e8b35f
