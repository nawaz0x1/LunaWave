# LunaWave

A [Moonquake Map 2.0](https://www.spaceappschallenge.org/2023/challenges/make-a-moonquake-map-20/) for any Planetary Enthusiasts.

## About

This project was created for NASA's Space Apps Challenge 2023.

For more information please refer to our team site: https://www.spaceappschallenge.org/2023/find-a-team/team-alpha/

Try out a demo application: https://lunawave.vercel.app/

## Detailed Project Description

### BACKGROUND

The Apollo astronauts deployed seismic experiments on the nearside of the Moon between 1969 and 1972. Five stations collected passive seismic data. The data were recorded on magnetic reel-to-reel tapes, with timestamps representing the signal reception time on Earth. The characteristics of the signals were also surprising when compared with terrestrial seismograms. What we lacked was a 3-dimensional Moon globe that showed us where and when the moonquakes had occurred.

### MOONQUAKE VISUALIZED

![](https://assets.spaceappschallenge.org/media/images/LunaWave-Ring_7DpjoHn.width-1024.png)

We have developed 'LunaWave,' a web application that allows users to explore various seismic activities on the Lunar surface. users can select a specific event from our table of Nakamura Events. When a user clicks on a particular event, the corresponding latitude and longitude, along with details related to the moonquake are shown on the bottom right corner of the screen. A ring-like movement is animated on a 3D Moon Globe at the moonquake coordinates of the selected date. The size of the ring is dynamically calculated based on the magnitude of the moonquake.

### MINERAL COMPOSITION

![](https://assets.spaceappschallenge.org/media/images/MineralComposition_M0yC4wf.width-1024.png)

The next category “Mineral Composition” (LRO DLRE Color STD CF 128ppd, Global) contains Christiansen Feature (CF) which is a special mark that changes color depending on what the rocks are made of. Scientists use these colors to know which minerals are on the Moon. The CF chart has been given on the right of the screen.

### BOUGUER DISTURBANCES

![](https://assets.spaceappschallenge.org/media/images/BouguerDisturbances.width-1024.png)

The final category is” Bouguer disturbances” (GRAIL LGRS, Bouguer Disturbances L180) This data product is a map of the Bouguer disturbances (in mGal) of the lunar gravity field at a resolution of 16 by 16 pix/deg. It refers to the gravity anomaly, corrected for the height at which it is measured and the attraction of terrain.

The Bouguer Disturbances chart(in mGal) has been given on the right of the screen.

### HOW DOES IT WORK?

Clicking on the LunaWave web application link will land the user on the designated project. Users can adjust the perspective freely by dragging the screen with the mouse. Clicking on a date in the “Nakamura Events” tab will generate the ring-like movement on the coordinate of the moonquake that occurred on that date. Additionally, the user can find the latitude and longitude details, along with information about the moonquake, displayed in the bottom right corner of the screen.

Clicking the tab on the top right corner adds surfaces above the original moon surface. The MINERAL composition adds the CF colored surface while as the Bouguer Disturbances adds the Bouguer Disturbances gravity anomaly surface.

### WHAT BENEFITS DOES IT HAVE?

Our project solves the challenge by providing a 3D interface for the users to visualize the seismic activity on the moon. Our idea Could one day help enrich astronomy curricula, making the study of Moon phases engaging for learners of all ages. Planetariums and science centers can incorporate it into their exhibits, offering visitors an immersive lunar experience. It can serve as a beacon of curiosity during public outreach events, inspiring interest in astronomy and space science. It is not merely a work of art; it's an educational marvel. It fosters a deeper understanding of astronomy, celestial mechanics, and the intricate interplay between celestial bodies.

### TOOLS USED TO DEVELOP THE PROJECT

The project was developed using the following technologies:

- The web app was built using [ReactJS](https://github.com/facebook/react).
- The 3D globe and ring-like animations were created using the [React-globe.gl](https://github.com/vasturiano/react-globe.gl) library.
- The Mineral Composition and Bouguer Disturbance surfaces were taken from [Moon Trek](https://trek.nasa.gov/moon/).
- [Obspy](https://github.com/obspy/obspy) was used for processing seismic data.

## Space Agency Data

- [Apollo Seismic Waveform Data from NASA’s Planetary Data System (PDS)](https://pds-geosciences.wustl.edu/missions/apollo/apollo_pse.htm)
- [Moon Trek](https://trek.nasa.gov/moon)
- [OUTGOING LONGWAVE RADIATION](https://neo.gsfc.nasa.gov/view.php?datasetId=CERES_LWFLUX_M)
- [Catalog of Lunar Seismic Data from Apollo Passive Seismic Experiment on 8-mm Video Cassette (Exabyte) Tapes](https://nssdc.gsfc.nasa.gov/misc/documents/b53211.pdf)
- [Scientific Visualization Studio Computer Generated Imagery (CGI) Moon Kit](https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=4720)

## References

- [Apollo Seismic Waveform Data from NASA’s Planetary Data System (PDS)](https://pds-geosciences.wustl.edu/missions/apollo/apollo_pse.htm)
- [Apollo Passive Seismic Experiment SEED Collection from NASA's Planetary Data System (PDS)](https://pds-geosciences.wustl.edu/lunar/urn-nasa-pds-apollo_pse/)
- [React-Globe.Gl for Moon Map and Apollo landing locations:](https://github.com/vasturiano/react-globe.gl)
- [A New Archive of Apollo's Lunar Seismic Data](https://iopscience.iop.org/article/10.3847/PSJ/ac87af)
- [ObsPy: A Python Toolbox for Seismology](https://github.com/obspy/obspy)
