import React, { useState } from "react";
import datos from "./datos.json";

function App() {
  const info = datos;

  // imagen principal

  const [imgPrincipalSrc, setImgPrincipalSrc] = useState(
    info.k4os.img.k4osLogo.src
  );
  const [imgPrincipalTitle, setImgPrincipalTitle] = useState(
    info.k4os.img.k4osLogo.title
  );
  const [imgPrincipalAlt, setImgPrincipalAlt] = useState(
    info.k4os.img.k4osLogo.alt
  );

  function seleccionarActivo(activo: string) {
    const colores: Element | null = document.querySelector(".activo");
    if (colores != null) {
      colores.classList.remove("k4os");
      colores.classList.remove("tau");
      colores.classList.remove("mechi");
      colores.classList.remove("ine");
      colores.classList.remove("lily");
      colores.classList.add(activo);
    }
  }
  function seleccionarTemaActivo(activo: string) {
    const colores = document.querySelectorAll(".temaActivo");
    for (let i: number = 0; i < colores.length; i++) {
      if (colores != null) {
        colores[i].classList.remove("caos");
        colores[i].classList.remove("extra");
        colores[i].classList.remove("menteEnBlanco");
        colores[i].classList.remove("rage");
        colores[i].classList.remove("uffBaby");
        colores[i].classList.add(activo);
      }
    }
  }
  return (
    <div className="h-screen activo bg-fondo">
      <div className=" h-1/5 flex justify-between">
        <div
          className="flex justify-center items-center bg-k4os hover:cursor-pointer text-white w-4/12"
          onClick={() => {
            seleccionarActivo("k4os");
            seleccionarTemaActivo("k4os");
            setImgPrincipalSrc(info.k4os.img.k4osLogo.src);
            setImgPrincipalTitle(info.k4os.img.k4osLogo.title);
            setImgPrincipalAlt(info.k4os.img.k4osLogo.alt);
          }}
        >
          K4os
        </div>
        <div
          className="flex justify-center items-center bg-tau hover:cursor-pointer text-white w-2/12"
          onClick={() => {
            seleccionarActivo("tau");
          }}
        >
          Tau
        </div>
        <div
          className="flex justify-center items-center bg-mechi hover:cursor-pointer text-white w-2/12"
          onClick={() => {
            seleccionarActivo("mechi");
          }}
        >
          Mechi
        </div>
        <div
          className="flex justify-center items-center bg-ine hover:cursor-pointer text-white w-2/12"
          onClick={() => {
            seleccionarActivo("ine");
          }}
        >
          Ine
        </div>
        <div
          className="flex justify-center items-center bg-lily hover:cursor-pointer text-white w-2/12"
          onClick={() => {
            seleccionarActivo("lily");
          }}
        >
          Lily
        </div>
      </div>
      <div className=" h-1/10 flex justify-around items-center">
        <div
          onClick={() => {
            seleccionarTemaActivo("caos");
            setImgPrincipalSrc(info.k4os.img.caos.src);
            setImgPrincipalTitle(info.k4os.img.caos.title);
            setImgPrincipalAlt(info.k4os.img.caos.alt);
          }}
          className="flex justify-center items-center bg-caos text-white  text-2xl text-center rounded-3xl w-30 h-20 hover:cursor-pointer"
        >
          Caos
        </div>
        <div
          onClick={() => {
            seleccionarTemaActivo("extra");
            setImgPrincipalSrc(info.k4os.img.extra.src);
            setImgPrincipalTitle(info.k4os.img.extra.title);
            setImgPrincipalAlt(info.k4os.img.extra.alt);
          }}
          className="flex justify-center items-center bg-extra text-white  text-2xl text-center rounded-3xl w-30 h-20 hover:cursor-pointer"
        >
          Extra
        </div>
        <div
          onClick={() => {
            seleccionarTemaActivo("menteEnBlanco");
            setImgPrincipalSrc(info.k4os.img.menteEnBlanco.src);
            setImgPrincipalTitle(info.k4os.img.menteEnBlanco.title);
            setImgPrincipalAlt(info.k4os.img.menteEnBlanco.alt);
          }}
          className="flex justify-center items-center bg-menteEnBlanco text-black  text-2xl text-center rounded-3xl w-30 h-20 hover:cursor-pointer"
        >
          Mente en Blanco
        </div>
        <div
          onClick={() => {
            seleccionarTemaActivo("rage");
            setImgPrincipalSrc(info.k4os.img.rage.src);
            setImgPrincipalTitle(info.k4os.img.rage.title);
            setImgPrincipalAlt(info.k4os.img.rage.alt);
          }}
          className="flex justify-center items-center bg-rage text-yellow-500  text-2xl text-center rounded-3xl w-30 h-20 hover:cursor-pointer"
        >
          Rage
        </div>
        <div
          onClick={() => {
            seleccionarTemaActivo("uffBaby");
            setImgPrincipalSrc(info.k4os.img.uffBaby.src);
            setImgPrincipalTitle(info.k4os.img.uffBaby.title);
            setImgPrincipalAlt(info.k4os.img.uffBaby.alt);
          }}
          className="flex justify-center items-center bg-uffBaby text-pink-500  text-2xl text-center rounded-3xl w-30 h-20 hover:cursor-pointer"
        >
          Uff Baby
        </div>
      </div>
      <div className=" h-2/5 flex ">
        <div className="w-1/3 bg-fondoTema flex justify-center aspect-auto items-center temaActivo text-white">
          <img
            className="h-full aspect-auto"
            src={imgPrincipalSrc}
            alt={imgPrincipalAlt}
            title={imgPrincipalTitle}
          />
        </div>
        <div className="w-2/3 bg-fondoTema flex justify-center aspect-video items-center rounded-3xl temaActivo text-white">
          video
        </div>
      </div>
      <div className="h-2/10 flex justify-around items-center overflow-x-auto overflow-y-hidden">
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 1
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 2
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 3
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 4
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 5
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 6
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 7
        </div>
        <div className="bg-fondoTema rounded-3xl  aspect-video h-full flex justify-center items-center mx-1 temaActivo text-white">
          Foto 8
        </div>
      </div>
      <div className="h-1/10 flex justify-center items-center temaActivo bg-fondoTema text-white">
        footer
      </div>
    </div>
  );
}

export default App;

// "album1": {
//     "caos": {
//       "video": {
//         "url": "",
//         "title": ""
//       },
//       "tau": {},
//       "mechi": {},
//       "ine": {},
//       "lily": {}
//     },
//     "extra": {
//       "video": {
//         "url": "",
//         "title": ""
//       },
//       "tau": {},
//       "mechi": {},
//       "ine": {},
//       "lily": {}
//     },
//     "menteEnBlanco": {
//       "video": {
//         "url": "",
//         "title": ""
//       },
//       "tau": {},
//       "mechi": {},
//       "ine": {},
//       "lily": {}
//     },
//     "rage": {
//       "video": {
//         "url": "",
//         "title": ""
//       },
//       "tau": {},
//       "mechi": {},
//       "ine": {},
//       "lily": {}
//     },
//     "uffBaby": {
//       "video": {
//         "url": "",
//         "title": ""
//       },
//       "tau": {},
//       "mechi": {},
//       "ine": {},
//       "lily": {}
//     }
//   }
