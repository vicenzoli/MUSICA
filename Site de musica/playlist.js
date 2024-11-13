// Lista de músicas (isso pode ser alterado para vir de um arquivo JSON ou API)
const playlist = [
    { title: "Song 1", artist: "Artist 1", src: "music/song1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "music/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "music/song3.mp3" }
];

// Referências aos elementos da página
const playlistElement = document.getElementById("playlist");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

// Função para carregar as músicas na playlist
function loadPlaylist() {
    playlist.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = `${song.title} - ${song.artist}`;
        li.setAttribute("data-src", song.src);
        li.setAttribute("data-index", index);
        li.addEventListener("click", playSong);
        playlistElement.appendChild(li);
    });
}

// Função para tocar a música
function playSong(event) {
    const songIndex = event.target.getAttribute("data-index");
    const song = playlist[songIndex];

    audioSource.src = song.src;
    audioPlayer.load();  // Recarregar o áudio
    audioPlayer.play();  // Iniciar a reprodução

    // Alterar o título da página para a música atual
    document.querySelector("h1").textContent = `Tocando: ${song.title} - ${song.artist}`;
}

// Carregar a playlist ao carregar a página
window.onload = loadPlaylist;

musicList.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${song.title} - ${song.artist}</span>
        <button onclick="saveToPlaylist(${index})">Salvar</button>
    `;
    musicListElement.appendChild(li);
});

// Função para salvar a música na playlist
function saveToPlaylist(index) {
// Recupera a playlist salva do localStorage
let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

// Verifica se a música já está na playlist
if (!playlist.some(song => song.src === musicList[index].src)) {
    playlist.push(musicList[index]); // Adiciona a música à playlist
    localStorage.setItem("playlist", JSON.stringify(playlist)); // Salva no localStorage
    alert("Música salva na playlist!");
} else {
    alert("Esta música já está na sua playlist.");
}
}

// Carregar a lista de músicas ao iniciar a página
window.onload = loadMusicList;