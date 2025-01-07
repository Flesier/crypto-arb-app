import React from "react";

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white shadow-lg">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-2">Crypto Arbitrage App</h1>
                <p className="text-lg font-medium">Find profitable trading opportunities across exchanges</p>
            </div>
        </header>
    );
}

export default Header;
