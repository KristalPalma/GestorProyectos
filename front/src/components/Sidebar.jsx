import React, { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import { Grid2x2, Users, StickyNote , LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>

            <div className={`bg-background-sec h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"
                }`}>
                {/*perfil */}
                <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
                    <img
                        src="src/images/Perfil.jpg"
                        className="w-20 h-20 object-cover rounded-full ring-2 ring-white"
                    />
                    <h1 className="text-xl text-white font-bold">Kris Palma</h1>
                    <p className="bg-primary-100 py-2 px-4 rounded-full text-white">Dashboard</p>
                </div>
                {/* Nav */}
                <div className="bg-primary-300 p-8 rounded-tr-[120px] h-[70vh] no-scrollbar flex flex-col justify-between">
                    <nav className="flex flex-col gap-3">

                        {/* Pages */}
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-Brown-third transition-colors">
                        <LayoutDashboard /> Inicio
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-Brown-third transition-colors">
                        <StickyNote /> Proyectos
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-Brown-third transition-colors">
                        <Users /> Equipos
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-Brown-third transition-colors">
                        <Grid2x2 /> Inventario
                        </a>
                    </nav>
                </div>

            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden fixed right-4 bottom-4 text-2xl bg-Brown-third p-2.5 rounded-full text-white z-50"
            >
                {showMenu ? <IoIosClose /> : <IoMenu />}
            </button>
        </>
    );
};

export default Sidebar;