from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/opportunities', methods=['GET'])
def get_opportunities():
    opportunities = [
        {
            'coin': 'Bitcoin',
            'buyExchange': 'Exchange A',
            'sellExchange': 'Exchange B',
            'buyPrice': 50000,
            'sellPrice': 51000,
            'profit': 1000
        },
        {
            'coin': 'Ethereum',
            'buyExchange': 'Exchange C',
            'sellExchange': 'Exchange D',
            'buyPrice': 3000,
            'sellPrice': 3200,
            'profit': 200
        }
    ]
    return jsonify(opportunities)

if __name__ == '__main__':
    app.run(debug=True)