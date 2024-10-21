import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { RegistrarArtistas } from "../../componentes/artistas_Star/RegistrarArtistas";
import { ListarArtistas } from "../../componentes/artistas_Star/ListarArtistas";
import { NoEncontrada } from "../../componentes/contenedor/NoEncontrada";
import { AdminArtistas } from "../../componentes/artistas_Star/AdminArtistas";
import { Acercade } from "../../componentes/otros/Acercade";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
 
            <Route path="/registrart" element={<RegistrarArtistas />} />
            <Route path="/listarart" element={<ListarArtistas />} />
            <Route path="/adminart" element={<AdminArtistas />} />
            <Route path="*" element={<NoEncontrada />} />
            <Route path="/acercade" element={<Acercade />} />
        </Routes>
    );
};
