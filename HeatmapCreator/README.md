Heatmap Creator
---------------
The Heatmap Visualization has been done by using **Google Maps API**

*A heatmap is a visualization used to depict the intensity of data at geographical points. When the Heatmap Layer is enabled, a colored overlay will appear on top of the map. By default, areas of higher intensity will be colored red, and areas of lower intensity will appear green.*

Here, the data being represented are the places facing possible traffic congestion.

The heat map creation is done in a series of steps:
1. The extracted data from Twitter/Facebook stored in JSON files is parsed using a program which uses NLP (Natural Language Processing) to return a text file containing list of places found out in various Tweets/Status Updates.

2. The list of keywords is then read one by one by a script and a geocoding request for each one of them is sent to Google Maps API which returns another JSON file containing information about that place (Like Geometry etc.). There might be multiple results for a single place, so they are all indexed in the JSON file.

3. A third script reads all the JSON files one-by-one and extracts the latitude and longitude from the Geometry information of the place. Filtering of data is also done at this stage, where results returning Latitude and Longitude out of range of the concerned place are ignored. This script returns a list of objects containing information of latitude and longitude, in a form like this:
```js
new google.maps.LatLng(<LatitudeValue>,<LongitudeVal>)
```
4. These objects are copied and then stored in an array in the final Javascript file which implements the heatmap.

Visualization
-------------
- The Google Maps API renders heatmap data client-side by making use of the Heatmap Layer.
- The heatmap layer is a part of the google.maps.visualization library.
- The heatmap can be customized by specifying various parameters like:
- **dissipating**: Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.
- **gradient**: The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.
- **radius**: The radius of influence for each data point, in pixels.
- **maxIntensity**: The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum. Setting the maximum intensity can be helpful when your dataset contains a few outliers with an unusually high intensity.
- **opacity**: The opacity of the heatmap, expressed as a number between 0 and 1.
- **HighCharts** is an interactive jQuery plugin used for generating realtime charts and graphs.
- Using **HighCharts**, one can select the table and use the existing data for drawing the graph.
- The graph generated using **HighCharts** has interactive options including printing and exporting to SVG, JPEG, PNG and TIFF.
