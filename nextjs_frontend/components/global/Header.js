import { useState } from "react";
import NavBar from "./NavBar";
import Wallpaper from "./Wallpaper"

export default function Header(){
    return (
        <div
            className="w-full h-48 relative border-b-[12px]"
        >
            <Wallpaper/>
            <NavBar/>
        </div>
    )
}