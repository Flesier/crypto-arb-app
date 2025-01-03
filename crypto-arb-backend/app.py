from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Mock data for arbitrage opportunities
opportunities = [
    {"coin": "BTC", "buy_exchange": "Binance", "sell_exchange": "Kraken", "buy_price": 20000, "sell_price": 21000, "profit": 1000},
    {"coin": "ETH", "buy_exchange": "Coinbase", "sell_exchange": "Binance", "buy_price": 1500, "sell_price": 1550, "profit": 50},
]

@app.route('/api/opportunities', methods=['GET'])
def get_opportunities():
    return jsonify(opportunities)

@app.route('/api/opportunities', methods=['POST'])
def add_opportunity():
    data = request.json
    opportunities.append(data)
    return jsonify({"message": "Opportunity added successfully!"}), 201

@app.route('/api/opportunities/random', methods=['POST'])
def random_opportunity():
    random_opportunity = {
        "coin": random.choice(["BTC", "ETH", "LTC", "XRP"]),
        "buy_exchange": random.choice(["Binance", "Kraken", "Coinbase", "Bitfinex"]),
        "sell_exchange": random.choice(["Binance", "Kraken", "Coinbase", "Bitfinex"]),
        "buy_price": round(random.uniform(100, 1000), 2),
        "sell_price": round(random.uniform(100, 1000), 2),
    }
    random_opportunity["profit"] = round(random_opportunity["sell_price"] - random_opportunity["buy_price"], 2)
    opportunities.append(random_opportunity)
    return jsonify(random_opportunity), 201

if __name__ == '__main__':
    app.run(debug=True)
