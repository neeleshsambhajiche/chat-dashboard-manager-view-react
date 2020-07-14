from flask import Flask, request, jsonify, send_file
from flask_cors import CORS, cross_origin
from PIL import Image
from datetime import datetime

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

breachList = []
dict1 = {"name": "abc", "empId": "24701000", "email": "123@gmail.com", "time": "5.00 pm 12th July 2020",
         "type": "Sleeping", "imageName": "titan-graph3.JPG"}
breachList.append(dict1)


@app.route("/image", methods=["POST"])
def save_image():
    # Get the arguments from the request
    agentName = request.args.get('agentName')
    empId = request.args.get('empId')
    email = request.args.get('email')
    type = request.args.get('type')
    file = request.files['image']

    # Create DateStamp
    dateTimeObj = datetime.now()
    timestampStr = dateTimeObj.strftime("%d-%b-%Y %H:%M:%S")

    # Save the image
    img = Image.open(file.stream)
    imgFileName = empId + " - " + \
        str(dateTimeObj.timestamp()).split('.')[0] + ".jpg"
    img.save('./images/' + imgFileName)

    # Create dictionary entry
    dict1 = {"agentName": agentName, "empId": empId, "email": email, "time": timestampStr,
             "type": type, "imageName": imgFileName}

    breachList.append(dict1)
    return 'success'


@app.route("/image", methods=["GET"])
def get_image():
    imageName = request.args.get('imageName')
    return send_file('./images/' + imageName, mimetype='image/jpeg')


@app.route("/breaches", methods=["GET"])
def get_breaches():
    return jsonify(breachList)


if __name__ == "__main__":
    app.run(debug=True)
