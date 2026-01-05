## Overview

Team development in the student organization POLYGON. A web application that collects and visualizes IoT sensor data and displays the real-time usage status of the DX Center facility at Toyama Prefectural University.

### Implemented Content + Sensors Used

1. Display of weather information such as temperature, humidity, and atmospheric pressure

   Temperature/Humidity/Atmospheric Pressure Sensor (BME280) ×3

2. Number of door openings and closings per day at DX Center

   Light Sensor ×1　Motion Sensor ×1

3. Conference room usage status

   Distance Sensor ×1

4. Fortune slip (fortune telling starts when you put your hands together in front of the camera)

## App Screen

![App Screen](/images/development/spring-iot/SensingDXCenter.png)

## Innovations + Efforts

- It was my first time doing electronics and writing in Python, but I was glad I managed to implement automatic data acquisition through trial and error
- It was also my first time using Firebase, but I was able to deepen my understanding from the basics such as structure and use it
- Web app
  - Created with a design concept like `iPhone widgets` and MUI style
  - By using `SASS` instead of CSS, I was able to write styles efficiently and cleanly
- Although it took quite a bit of time, I was glad I could allocate resources to this project without missing team meetings and communications
