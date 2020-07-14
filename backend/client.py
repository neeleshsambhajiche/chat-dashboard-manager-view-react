import requests

url = 'http://127.0.0.1:5000/image?agentName=Tom&empId=24701455&email=tom@gmail.com&type=Mobile'
my_img = {'image': open('Bike.jpg', 'rb')}
r = requests.post(url, files=my_img)

# convert server response into JSON format.
print(r)

# get_image_url = 'http://127.0.0.1:5000/get_image'
# r = requests.get(get_image_url)
# file = open("return.png", "wb")
# file.write(r.content)
# file.close()
