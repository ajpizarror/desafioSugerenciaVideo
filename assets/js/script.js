class Multimedia {
  constructor(url) {
    this._url = url;
  }
  getUrl() {
    return this._url;
  }
  setUrl(nuevaUrl) {
    this._url = nuevaUrl;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  playMultimedia = () => {
    moduloMultimedia.insertarVideo(this._url, this._id);
  };

  setInicio = (tiempo) => {
    const urlInicio = `${this._url}&amp;start=${tiempo}`;
    return urlInicio;
  };
}

const moduloMultimedia = (() => {
  const mostrarVideo = (url, id) => {
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };
  const insertarVideo = (url, id) => {
    mostrarVideo(url, id);
  };
  return {
    insertarVideo,
  };
})();

let repMusica = new Reproductor(
  "https://www.youtube.com/embed/tntWqH3t1EY?si=V4RL1HClAVTlXTFA",
  "musica"
);
let repPelicula = new Reproductor(
  "https://www.youtube.com/embed/4OiMOHRDs14?si=RGZzv5mvVDNqsenm",
  "peliculas"
);
let repSerie = new Reproductor(
  "https://www.youtube.com/embed/HN4oydykJFc?si=Xvvs3WX9B82P8MQu",
  "series"
);

urlInicioMusica = repMusica.setInicio("50");
repMusica.setUrl(urlInicioMusica);
repMusica.playMultimedia();

urlInicioSerie = repSerie.setInicio("50");
repSerie.setUrl(urlInicioSerie);
repSerie.playMultimedia();

urlInicioPelicula = repPelicula.setInicio("50");
repPelicula.setUrl(urlInicioPelicula);
repPelicula.playMultimedia();
