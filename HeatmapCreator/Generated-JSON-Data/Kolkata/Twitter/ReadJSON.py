import json
import os

#Max/Min Latitude/Longitude for Delhi/Bangy/Kolkata/Mumbai
maxLong = [90,77]
minLong = [86,70]
maxLat = [27,23]
minLat = [20,15]

for fn in os.listdir('.'):
	if os.path.isfile(fn):
		try:		
			with open(fn) as json_file:
				data = json.load(json_file)
				try:
					latitude = data['results'][0]['geometry']['location']['lat']
					longitude = data['results'][0]['geometry']['location']['lng']
					if (latitude> minLat[0] and latitude< maxLat[0] and longitude >minLong[0] and longitude <maxLong[0]) or (latitude>minLat[1] and latitude< maxLat[1] and longitude >minLong[1] and longitude <maxLong[1]) or (latitude> minLat[2] and latitude< maxLat[2] and longitude >minLong[2] and longitude <maxLong[2]) or (latitude> minLat[3] and latitude< maxLat[3] and longitude >minLong[3] and longitude <maxLong[3]):
						print ("new google.maps.LatLng(%f ,%f)," % (latitude, longitude))
				except:
						print("")
		except:
			print("")