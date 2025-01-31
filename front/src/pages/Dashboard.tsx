import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { RiHashtag, RiLineChartLine } from "react-icons/ri";
import { CircleAlert } from 'lucide-react';


function Dashboard () {
    return (
<div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card */}
          <div className="p-4 bg-background-latte rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-Brown-third text-gray-300 text-2xl font-bold p-4 rounded-xl">
                35
              </span>
              <div>
                <h3 className="font-bold">Recurso #1</h3>
                <p className="text-gray-800">Cable UTP CAT5e</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-Brown-third text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  18
                </span>
                <div>
                  <h3 className="font-bold">Recurso #2</h3>
                  <p className="text-gray-800">Resistores 220</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                    Recursos más usados
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Equipos Nuevos</h1>
            <div className="bg-background-beige p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="src/images/soft to all.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">ZeroWaste Tech</h3>
                  <p className="text-gray-500">Desarrollo de app para conectar restaurantes y supermercados con personas o bancos de alimentos para donar comida sobrante.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="src/images/speed.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">BookConnect</h3>
                  <p className="text-gray-500">Desarrollar una plataforma donde usuarios puedan intercambiar libros de manera gratuita.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </section>
                {/* Section 2 */}
                <section className=" grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
            <h1 className="text-2xl font-bold mb-8  ">Projecto completado</h1>
            <div className="bg-Brown-third p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/Producto.png"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-bold  *:">JARDÍN INTELIGENTE</h3>
                    <span className="bg-amber-100 text-green-950 px-2 rounded-full font-medium">
                    Completado
                  </span>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Inicio: 18 DE DICIEMBRE
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-white text-lg font-bold">
                Descripción
                </h5>
                <p className="text-white">
                Sistema de riego y fertilización automatizado que se adapta a las condiciones climáticas y al nivel de humedad del suelo.
                </p>
              </div>
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                <span className="text-2xl text-background-latte font-bold mr-2">Team Garden</span>
                </div>
                <div>
                  <span className="border bg-background-latte hover:bg-background text-primary-100 py-2 px-4 rounded-full">
                    Más detalles
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Projectos en curso</h1>
            <div className="bg-background-latte p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Proyecto 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="src/images/cliente.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jardín Inteligente</h3>
                    <p className="text-Brown-sec">Sistema de riego y fertilización automatizado </p>
                  </div>
                </div>
                <div>
                  <span className="bg-amber-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    En Curso
                  </span>
                </div>
                <div>
                  <span className="font-bold">Team Garden</span>
                </div>
              </div>
              {/* Projecto 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="src/images/cliente.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Centinela Security</h3>
                    <p className="text-Brown-sec">Sistema de seguridad automatizado</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Pendiente
                  </span>
                </div>
                <div>
                  <span className="font-bold">Team Sentinel</span>
                </div>
              </div>
            </div>
            <div className="bg-Brown-sec text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <CircleAlert className="text-xl bg-red-700 rounded-xl w-8 h-8 "/>
              </div>
              <div>
                <h5 className="font-bold text-lg text-white">ALERTA DE STOCK</h5>
                <h5 className="text-white ">Resistencias de 220</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-background hover:bg-background-latte py-2 px-6 rounded-xl text-black w-full">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;