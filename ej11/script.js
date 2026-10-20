
const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

document.write("<h1>Gestor de Playlist</h1>");

playlist.push(
    ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"],
    ["Billie Jean", "Michael Jackson", 294, "Pop"]
);

const cancionEliminada1 = playlist.pop();

playlist[0].push(1975);

document.write("<p>Canción eliminada: " + cancionEliminada1[0] + "</p>");
document.write("<pre>" + JSON.stringify(playlist, null, 2) + "</pre>");

playlist.splice(1, 0, ["Sweet Child O' Mine", "Guns N' Roses", 356, "Rock"]);

const cancionEliminada2 = playlist.splice(2, 1)[0];

playlist.splice(0, 1, ["Toxicity", "System of a Down", 234, "Metal"]);

document.write("<h2>Parte 2: splice</h2>");
document.write("<p>Canción eliminada: " + JSON.stringify(cancionEliminada2) + "</p>");
document.write("<pre>" + JSON.stringify(playlist, null, 2) + "</pre>");

const copiaSuperficial = [...playlist];

copiaSuperficial[0][0] = "copia playlist";

document.write("<h2>Parte 3: copia superficial</h2>");
document.write("<p>Primera canción de la copia: " + copiaSuperficial[0][0] + "</p>");
document.write("<p>Primera canción de la original: " + playlist[0][0] + "</p>");

const copiaIndependiente = playlist.map(cancion => [...cancion]);

copiaIndependiente[0][0] = "copia playlist 2";

document.write("<h2>Copia independiente con map y spread</h2>");
document.write("<p>Primera canción de la copia: " + copiaIndependiente[0][0] + "</p>");
document.write("<p>Primera canción de la original: " + playlist[0][0] + "</p>");
