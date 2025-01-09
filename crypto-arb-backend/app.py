import requests
from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Fetch exchanges from CoinGecko
def fetch_exchanges():
    url = "https://api.coingecko.com/api/v3/exchanges"
    try:
        response = requests.get(url)
        response.raise_for_status()
        exchanges = response.json()
        return {exchange['id']: exchange['name'] for exchange in exchanges}
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching exchanges: {e}")
        return {}

# Fetch live market data
def fetch_market_data():
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 100,
        "page": 1,
        "sparkline": False
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching market data: {e}")
        return []

# Calculate arbitrage opportunities
def calculate_arbitrage(market_data, exchange_mapping):
    opportunities = []
    for coin in market_data:
        ticker_id = coin.get("id")
        current_price = coin.get("current_price")
        if not current_price:
            continue
        buy_price = current_price
        sell_price = current_price * 1.02  # Placeholder logic
        opportunities.append({
            "coin": coin['name'],
            "buy_exchange": exchange_mapping.get(ticker_id, "Unknown Exchange"),
            "sell_exchange": exchange_mapping.get(ticker_id, "Unknown Exchange"),
            "buy_price": buy_price,
            "sell_price": sell_price,
            "profit": sell_price - buy_price
        })
    return opportunities

# Get exchange mappings at startup
EXCHANGE_MAPPING = fetch_exchanges()

@app.route('/api/opportunities', methods=['GET'])
def get_arbitrage_opportunities():
    market_data = fetch_market_data()
    arbitrage_opportunities = calculate_arbitrage(market_data, EXCHANGE_MAPPING)
    return jsonify(arbitrage_opportunities)

if __name__ == '__main__':
    app.run(debug=True)