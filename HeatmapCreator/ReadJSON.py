import json
import os
import sys

#Max/Min Latitude/Longitude for Kolkata/Mumbai/Delhi/Bangy/
maxLong = [89,74,78,78]
minLong = [87,70,75,77]
maxLat = [23,20,30,14]
minLat = [22,18,27,12]

if (len(sys.argv)):
	fpath = './'+str(sys.argv[1])
	for fn in os.listdir(fpath):
		if os.path.isfile(fpath+str(fn)):
			try:		
				with open(fpath+str(fn)) as json_file:
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