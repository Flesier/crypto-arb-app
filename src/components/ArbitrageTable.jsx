import React from 'react';

const ArbitrageTable = ({ opportunities }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border-b">Coin</th>
                        <th className="p-2 border-b">Buy Exchange</th>
                        <th className="p-2 border-b">Sell Exchange</th>
                        <th className="p-2 border-b">Buy Price</th>
                        <th className="p-2 border-b">Sell Price</th>
                        <th className="p-2 border-b">Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {opportunities.map((opportunity, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-2 text-center border-b">{opportunity.coin}</td>
                            <td className="p-2 text-center border-b">{opportunity.buyExchange}</td>
                            <td className="p-2 text-center border-b">{opportunity.sellExchange}</td>
                            <td className="p-2 text-center border-b">{opportunity.buyPrice}</td>
                            <td className="p-2 text-center border-b">{opportunity.sellPrice}</td>
                            <td className="p-2 text-center text-green-500 font-semibold border-b">
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