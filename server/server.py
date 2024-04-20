import model

from flask import Flask, jsonify, request
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        "message": "yo"
    })


@app.route('/api/submit-form', methods=['POST'])
def handle_data():
    data = request.json
    return model(data["age"], data["sex"], data["history"], data["race"], "150", data["calcium"], "Low", data["physical_activity"], "No", "No")

if __name__ == "__main__":
    app.run(debug=True, port=8080)