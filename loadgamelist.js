fetch('gamelist.json')
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.name.localeCompare(b.name));
                const gameList = document.getElementById('gameList');
                data.forEach(game => {
                    const gameItem = document.createElement('div');
                    gameItem.innerHTML = `
                        <div class="game">
                            <h2>${game.name}</h2>
                            <img src="${game.img}" alt="${game.name} Image">
                            <a href="${game.file}" class="button">Play</a>
                        </div>
                    `;
                    gameList.appendChild(gameItem);
                });
            })
            .catch(error => console.error('Error loading JSON data:', error));