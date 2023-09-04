from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save():
    data = request.json
    field = data['field']
    value = data['value']

    # Here you would save 'field' and 'value' to your database
    # For example, using SQL: INSERT INTO table (field, value) VALUES (field, value)

    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run()
