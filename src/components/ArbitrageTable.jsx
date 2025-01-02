import React from "react";

function ArbitrageTable ({ opportunities }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-blue text-white">
                    <tr>
                        <th className="p-2">Coin</th>
                        <th className="p-2">Buy Exchange</th>
                        <th className="p-2">Sell Exchange</th>
                        <th className="p-2">Buy Price</th>
                        <th className="p-2">Sell Price</th>
                        <th className="p-2">Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {opportunities.map((opportunity, index) => (
                        <tr key={index} className="border-t hover:bg-gray-light">
                            <td className="p-2 text-center">{opportunity.coin}</td>
                            <td className="p-2 text-center">{opportunity.buyExchange}</td>
                            <td className="p-2 text-center">{opportunity.sellExchange}</td>
                            <td className="p-2 text-center">{opportunity.buyPrice}</td>
                            <td className="p-2 text-center">{opportunity.sellPrice}</td>
                            <td className="p-2 text-center text-green-500 font-semibold">
                            {opportunity.profit}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ArbitrageTable;