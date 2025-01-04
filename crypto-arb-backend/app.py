from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/opportunities', methods=['GET'])
def get_opportunities():
    try:
        response = requests.get('https://api.coingecko.com/api/v3/coins/markets', params={
            'vs_currency': 'usd',
            'order': 'market_cap_desc',
            'per_page': 10,
            'page': 1,
            'sparkline': False
        })
        data = response.json()
        opportunities = [
            {
                'coin': coin['name'],
                'buyExchange': 'Exchange A',  # Placeholder, replace with actual data
                'sellExchange': 'Exchange B',  # Placeholder, replace with actual data
                'buyPrice': coin['current_price'],
                'sellPrice': coin['current_price'] * 1.02,  # Placeholder, replace with actual data
                'profit': coin['current_price'] * 0.02  # Placeholder, replace with actual data
            }
            for coin in data
        ]
        return jsonify(opportunities)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)