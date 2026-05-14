import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Apriori() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 ml-64 p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Apriori</h1>
                
            </div>
        </div>
    );
}