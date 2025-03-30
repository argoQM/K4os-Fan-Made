import React from "react";

function App() {
  return (
    <div className="h-screen ">
      <div className=" h-1/5 flex justify-between">
        <div className="flex justify-center items-center bg-black text-white w-4/12">
          K4os
        </div>
        <div className="flex justify-center items-center bg-red-600 text-white w-2/12">
          Tau
        </div>
        <div className="flex justify-center items-center bg-pink-600 text-white w-2/12">
          Mechi
        </div>
        <div className="flex justify-center items-center bg-teal-600 text-white w-2/12">
          Ine
        </div>
        <div className="flex justify-center items-center bg-blue-600 text-white w-2/12">
          Lily
        </div>
      </div>
      <div className=" h-1/10 flex justify-around items-center">
        <div className="flex justify-center items-center bg-black text-white  text-2xl text-center rounded-3xl w-30 h-20">
          Caos
        </div>
        <div className="flex justify-center items-center bg-pink-400 text-white  text-2xl text-center rounded-3xl w-30 h-20">
          Extra
        </div>
        <div className="flex justify-center items-center bg-black text-gray-300  text-2xl text-center rounded-3xl w-30 h-20">
          Mente en Blanco
        </div>
        <div className="flex justify-center items-center bg-red-800 text-yellow-500  text-2xl text-center rounded-3xl w-30 h-20">
          Rage
        </div>
        <div className="flex justify-center items-center bg-blue-300 text-pink-500  text-2xl text-center rounded-3xl w-30 h-20">
          Uff Baby
        </div>
      </div>
      <div className=" h-2/5 flex ">
        <div className="w-1/3 bg-amber-400 flex justify-center aspect-auto items-center">
          imagen
        </div>
        <div className="w-2/3 bg-amber-800 flex justify-center aspect-video items-center rounded-3xl">
          video
        </div>
      </div>
      <div className="h-2/10 flex justify-around items-center overflow-x-auto overflow-y-hidden">
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 1
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 2
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 3
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 4
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 5
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 6
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 7
        </div>
        <div className="bg-purple-800 rounded-3xl  aspect-video h-full flex justify-center items-center mx-1">
          Foto 8
        </div>
      </div>
      <div className="h-1/10 flex justify-center items-center">footer</div>
    </div>
  );
}

export default App;
