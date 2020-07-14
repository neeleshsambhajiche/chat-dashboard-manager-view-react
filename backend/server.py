from flask import Flask, request, jsonify, send_file
from PIL import Image

app = Flask(__name__)


@app.route("/send_image", methods=["POST"])
def save_image():
    file = request.files['image']
    img = Image.open(file.stream)
    img.save('new.png')
    return 'success'


@app.route("/get_image", methods=["GET"])
def get_image():
    return send_file('new.png', mimetype='image/gif')


if __name__ == "__main__":
    app.run(debug=True)
