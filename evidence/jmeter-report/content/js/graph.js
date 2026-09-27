/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 8153.0, "series": [{"data": [[0.0, 10.0], [0.1, 10.0], [0.2, 11.0], [0.3, 11.0], [0.4, 11.0], [0.5, 11.0], [0.6, 11.0], [0.7, 12.0], [0.8, 13.0], [0.9, 15.0], [1.0, 15.0], [1.1, 15.0], [1.2, 15.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 15.0], [1.7, 16.0], [1.8, 16.0], [1.9, 16.0], [2.0, 16.0], [2.1, 16.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 16.0], [3.0, 16.0], [3.1, 16.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 16.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 17.0], [4.2, 17.0], [4.3, 17.0], [4.4, 17.0], [4.5, 17.0], [4.6, 17.0], [4.7, 17.0], [4.8, 17.0], [4.9, 17.0], [5.0, 17.0], [5.1, 17.0], [5.2, 17.0], [5.3, 17.0], [5.4, 17.0], [5.5, 17.0], [5.6, 17.0], [5.7, 17.0], [5.8, 17.0], [5.9, 17.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 18.0], [6.5, 18.0], [6.6, 18.0], [6.7, 18.0], [6.8, 18.0], [6.9, 18.0], [7.0, 18.0], [7.1, 18.0], [7.2, 18.0], [7.3, 18.0], [7.4, 18.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 18.0], [8.0, 18.0], [8.1, 18.0], [8.2, 18.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 19.0], [9.3, 19.0], [9.4, 19.0], [9.5, 19.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 19.0], [10.9, 19.0], [11.0, 20.0], [11.1, 20.0], [11.2, 20.0], [11.3, 20.0], [11.4, 20.0], [11.5, 20.0], [11.6, 20.0], [11.7, 20.0], [11.8, 20.0], [11.9, 20.0], [12.0, 20.0], [12.1, 20.0], [12.2, 20.0], [12.3, 20.0], [12.4, 20.0], [12.5, 20.0], [12.6, 20.0], [12.7, 20.0], [12.8, 20.0], [12.9, 21.0], [13.0, 21.0], [13.1, 21.0], [13.2, 21.0], [13.3, 21.0], [13.4, 21.0], [13.5, 21.0], [13.6, 21.0], [13.7, 21.0], [13.8, 21.0], [13.9, 21.0], [14.0, 21.0], [14.1, 21.0], [14.2, 21.0], [14.3, 21.0], [14.4, 21.0], [14.5, 22.0], [14.6, 22.0], [14.7, 22.0], [14.8, 22.0], [14.9, 22.0], [15.0, 22.0], [15.1, 22.0], [15.2, 22.0], [15.3, 22.0], [15.4, 22.0], [15.5, 22.0], [15.6, 22.0], [15.7, 22.0], [15.8, 22.0], [15.9, 22.0], [16.0, 23.0], [16.1, 23.0], [16.2, 23.0], [16.3, 23.0], [16.4, 23.0], [16.5, 23.0], [16.6, 23.0], [16.7, 23.0], [16.8, 23.0], [16.9, 23.0], [17.0, 23.0], [17.1, 23.0], [17.2, 23.0], [17.3, 23.0], [17.4, 24.0], [17.5, 24.0], [17.6, 24.0], [17.7, 24.0], [17.8, 24.0], [17.9, 24.0], [18.0, 24.0], [18.1, 24.0], [18.2, 24.0], [18.3, 24.0], [18.4, 24.0], [18.5, 25.0], [18.6, 25.0], [18.7, 25.0], [18.8, 25.0], [18.9, 25.0], [19.0, 25.0], [19.1, 25.0], [19.2, 25.0], [19.3, 25.0], [19.4, 25.0], [19.5, 26.0], [19.6, 26.0], [19.7, 26.0], [19.8, 26.0], [19.9, 26.0], [20.0, 26.0], [20.1, 26.0], [20.2, 26.0], [20.3, 26.0], [20.4, 26.0], [20.5, 27.0], [20.6, 27.0], [20.7, 27.0], [20.8, 27.0], [20.9, 27.0], [21.0, 27.0], [21.1, 27.0], [21.2, 27.0], [21.3, 28.0], [21.4, 28.0], [21.5, 28.0], [21.6, 28.0], [21.7, 28.0], [21.8, 28.0], [21.9, 28.0], [22.0, 28.0], [22.1, 28.0], [22.2, 29.0], [22.3, 29.0], [22.4, 29.0], [22.5, 29.0], [22.6, 29.0], [22.7, 29.0], [22.8, 29.0], [22.9, 29.0], [23.0, 30.0], [23.1, 30.0], [23.2, 30.0], [23.3, 30.0], [23.4, 30.0], [23.5, 30.0], [23.6, 30.0], [23.7, 31.0], [23.8, 31.0], [23.9, 31.0], [24.0, 31.0], [24.1, 31.0], [24.2, 31.0], [24.3, 31.0], [24.4, 32.0], [24.5, 32.0], [24.6, 32.0], [24.7, 32.0], [24.8, 32.0], [24.9, 32.0], [25.0, 32.0], [25.1, 32.0], [25.2, 33.0], [25.3, 33.0], [25.4, 33.0], [25.5, 33.0], [25.6, 33.0], [25.7, 33.0], [25.8, 33.0], [25.9, 34.0], [26.0, 34.0], [26.1, 34.0], [26.2, 34.0], [26.3, 34.0], [26.4, 34.0], [26.5, 34.0], [26.6, 35.0], [26.7, 35.0], [26.8, 35.0], [26.9, 35.0], [27.0, 35.0], [27.1, 35.0], [27.2, 36.0], [27.3, 36.0], [27.4, 36.0], [27.5, 36.0], [27.6, 36.0], [27.7, 36.0], [27.8, 36.0], [27.9, 37.0], [28.0, 37.0], [28.1, 37.0], [28.2, 37.0], [28.3, 37.0], [28.4, 37.0], [28.5, 38.0], [28.6, 38.0], [28.7, 38.0], [28.8, 38.0], [28.9, 38.0], [29.0, 38.0], [29.1, 38.0], [29.2, 39.0], [29.3, 39.0], [29.4, 39.0], [29.5, 39.0], [29.6, 39.0], [29.7, 39.0], [29.8, 40.0], [29.9, 40.0], [30.0, 40.0], [30.1, 40.0], [30.2, 40.0], [30.3, 40.0], [30.4, 41.0], [30.5, 41.0], [30.6, 41.0], [30.7, 41.0], [30.8, 41.0], [30.9, 41.0], [31.0, 42.0], [31.1, 42.0], [31.2, 42.0], [31.3, 42.0], [31.4, 42.0], [31.5, 43.0], [31.6, 43.0], [31.7, 43.0], [31.8, 43.0], [31.9, 43.0], [32.0, 43.0], [32.1, 44.0], [32.2, 44.0], [32.3, 44.0], [32.4, 44.0], [32.5, 44.0], [32.6, 45.0], [32.7, 45.0], [32.8, 45.0], [32.9, 45.0], [33.0, 45.0], [33.1, 46.0], [33.2, 46.0], [33.3, 46.0], [33.4, 46.0], [33.5, 47.0], [33.6, 47.0], [33.7, 47.0], [33.8, 47.0], [33.9, 47.0], [34.0, 47.0], [34.1, 48.0], [34.2, 48.0], [34.3, 48.0], [34.4, 48.0], [34.5, 48.0], [34.6, 49.0], [34.7, 49.0], [34.8, 49.0], [34.9, 49.0], [35.0, 49.0], [35.1, 49.0], [35.2, 50.0], [35.3, 50.0], [35.4, 50.0], [35.5, 50.0], [35.6, 50.0], [35.7, 51.0], [35.8, 51.0], [35.9, 51.0], [36.0, 51.0], [36.1, 51.0], [36.2, 51.0], [36.3, 52.0], [36.4, 52.0], [36.5, 52.0], [36.6, 52.0], [36.7, 52.0], [36.8, 53.0], [36.9, 53.0], [37.0, 53.0], [37.1, 53.0], [37.2, 53.0], [37.3, 54.0], [37.4, 54.0], [37.5, 54.0], [37.6, 54.0], [37.7, 54.0], [37.8, 55.0], [37.9, 55.0], [38.0, 55.0], [38.1, 55.0], [38.2, 55.0], [38.3, 56.0], [38.4, 56.0], [38.5, 56.0], [38.6, 56.0], [38.7, 56.0], [38.8, 56.0], [38.9, 57.0], [39.0, 57.0], [39.1, 57.0], [39.2, 57.0], [39.3, 58.0], [39.4, 58.0], [39.5, 58.0], [39.6, 58.0], [39.7, 58.0], [39.8, 59.0], [39.9, 59.0], [40.0, 59.0], [40.1, 59.0], [40.2, 59.0], [40.3, 60.0], [40.4, 60.0], [40.5, 60.0], [40.6, 60.0], [40.7, 60.0], [40.8, 61.0], [40.9, 61.0], [41.0, 61.0], [41.1, 61.0], [41.2, 61.0], [41.3, 62.0], [41.4, 62.0], [41.5, 62.0], [41.6, 62.0], [41.7, 62.0], [41.8, 63.0], [41.9, 63.0], [42.0, 63.0], [42.1, 63.0], [42.2, 64.0], [42.3, 64.0], [42.4, 64.0], [42.5, 64.0], [42.6, 64.0], [42.7, 64.0], [42.8, 65.0], [42.9, 65.0], [43.0, 65.0], [43.1, 65.0], [43.2, 66.0], [43.3, 66.0], [43.4, 66.0], [43.5, 66.0], [43.6, 66.0], [43.7, 67.0], [43.8, 67.0], [43.9, 67.0], [44.0, 67.0], [44.1, 67.0], [44.2, 68.0], [44.3, 68.0], [44.4, 68.0], [44.5, 68.0], [44.6, 68.0], [44.7, 69.0], [44.8, 69.0], [44.9, 69.0], [45.0, 69.0], [45.1, 69.0], [45.2, 70.0], [45.3, 70.0], [45.4, 70.0], [45.5, 70.0], [45.6, 70.0], [45.7, 71.0], [45.8, 71.0], [45.9, 71.0], [46.0, 71.0], [46.1, 71.0], [46.2, 71.0], [46.3, 72.0], [46.4, 72.0], [46.5, 72.0], [46.6, 72.0], [46.7, 72.0], [46.8, 73.0], [46.9, 73.0], [47.0, 73.0], [47.1, 73.0], [47.2, 73.0], [47.3, 74.0], [47.4, 74.0], [47.5, 74.0], [47.6, 74.0], [47.7, 75.0], [47.8, 75.0], [47.9, 75.0], [48.0, 75.0], [48.1, 75.0], [48.2, 76.0], [48.3, 76.0], [48.4, 76.0], [48.5, 76.0], [48.6, 76.0], [48.7, 77.0], [48.8, 77.0], [48.9, 77.0], [49.0, 77.0], [49.1, 77.0], [49.2, 78.0], [49.3, 78.0], [49.4, 78.0], [49.5, 78.0], [49.6, 78.0], [49.7, 79.0], [49.8, 79.0], [49.9, 79.0], [50.0, 79.0], [50.1, 79.0], [50.2, 80.0], [50.3, 80.0], [50.4, 80.0], [50.5, 80.0], [50.6, 80.0], [50.7, 81.0], [50.8, 81.0], [50.9, 81.0], [51.0, 81.0], [51.1, 81.0], [51.2, 82.0], [51.3, 82.0], [51.4, 82.0], [51.5, 82.0], [51.6, 82.0], [51.7, 83.0], [51.8, 83.0], [51.9, 83.0], [52.0, 83.0], [52.1, 84.0], [52.2, 84.0], [52.3, 84.0], [52.4, 84.0], [52.5, 84.0], [52.6, 85.0], [52.7, 85.0], [52.8, 85.0], [52.9, 85.0], [53.0, 86.0], [53.1, 86.0], [53.2, 86.0], [53.3, 86.0], [53.4, 87.0], [53.5, 87.0], [53.6, 87.0], [53.7, 87.0], [53.8, 88.0], [53.9, 88.0], [54.0, 88.0], [54.1, 88.0], [54.2, 89.0], [54.3, 89.0], [54.4, 89.0], [54.5, 89.0], [54.6, 90.0], [54.7, 90.0], [54.8, 90.0], [54.9, 90.0], [55.0, 90.0], [55.1, 91.0], [55.2, 91.0], [55.3, 91.0], [55.4, 91.0], [55.5, 92.0], [55.6, 92.0], [55.7, 92.0], [55.8, 92.0], [55.9, 92.0], [56.0, 93.0], [56.1, 93.0], [56.2, 93.0], [56.3, 93.0], [56.4, 94.0], [56.5, 94.0], [56.6, 94.0], [56.7, 94.0], [56.8, 94.0], [56.9, 95.0], [57.0, 95.0], [57.1, 95.0], [57.2, 95.0], [57.3, 96.0], [57.4, 96.0], [57.5, 96.0], [57.6, 96.0], [57.7, 96.0], [57.8, 97.0], [57.9, 97.0], [58.0, 97.0], [58.1, 98.0], [58.2, 98.0], [58.3, 98.0], [58.4, 98.0], [58.5, 98.0], [58.6, 99.0], [58.7, 99.0], [58.8, 99.0], [58.9, 99.0], [59.0, 100.0], [59.1, 100.0], [59.2, 100.0], [59.3, 100.0], [59.4, 101.0], [59.5, 101.0], [59.6, 101.0], [59.7, 102.0], [59.8, 102.0], [59.9, 102.0], [60.0, 102.0], [60.1, 103.0], [60.2, 103.0], [60.3, 103.0], [60.4, 104.0], [60.5, 104.0], [60.6, 104.0], [60.7, 104.0], [60.8, 105.0], [60.9, 105.0], [61.0, 105.0], [61.1, 105.0], [61.2, 106.0], [61.3, 106.0], [61.4, 107.0], [61.5, 107.0], [61.6, 107.0], [61.7, 108.0], [61.8, 108.0], [61.9, 108.0], [62.0, 109.0], [62.1, 109.0], [62.2, 110.0], [62.3, 110.0], [62.4, 110.0], [62.5, 111.0], [62.6, 111.0], [62.7, 111.0], [62.8, 112.0], [62.9, 112.0], [63.0, 112.0], [63.1, 113.0], [63.2, 113.0], [63.3, 114.0], [63.4, 114.0], [63.5, 115.0], [63.6, 115.0], [63.7, 116.0], [63.8, 116.0], [63.9, 117.0], [64.0, 117.0], [64.1, 118.0], [64.2, 119.0], [64.3, 119.0], [64.4, 120.0], [64.5, 120.0], [64.6, 121.0], [64.7, 121.0], [64.8, 122.0], [64.9, 123.0], [65.0, 123.0], [65.1, 124.0], [65.2, 124.0], [65.3, 125.0], [65.4, 126.0], [65.5, 126.0], [65.6, 127.0], [65.7, 127.0], [65.8, 128.0], [65.9, 129.0], [66.0, 130.0], [66.1, 130.0], [66.2, 131.0], [66.3, 132.0], [66.4, 132.0], [66.5, 133.0], [66.6, 134.0], [66.7, 135.0], [66.8, 136.0], [66.9, 137.0], [67.0, 138.0], [67.1, 139.0], [67.2, 139.0], [67.3, 140.0], [67.4, 141.0], [67.5, 142.0], [67.6, 143.0], [67.7, 144.0], [67.8, 145.0], [67.9, 146.0], [68.0, 147.0], [68.1, 148.0], [68.2, 150.0], [68.3, 151.0], [68.4, 152.0], [68.5, 153.0], [68.6, 155.0], [68.7, 156.0], [68.8, 158.0], [68.9, 159.0], [69.0, 160.0], [69.1, 160.0], [69.2, 162.0], [69.3, 163.0], [69.4, 164.0], [69.5, 166.0], [69.6, 167.0], [69.7, 168.0], [69.8, 170.0], [69.9, 171.0], [70.0, 172.0], [70.1, 174.0], [70.2, 176.0], [70.3, 177.0], [70.4, 178.0], [70.5, 180.0], [70.6, 181.0], [70.7, 182.0], [70.8, 184.0], [70.9, 185.0], [71.0, 187.0], [71.1, 188.0], [71.2, 189.0], [71.3, 191.0], [71.4, 192.0], [71.5, 193.0], [71.6, 195.0], [71.7, 196.0], [71.8, 198.0], [71.9, 199.0], [72.0, 200.0], [72.1, 202.0], [72.2, 204.0], [72.3, 204.0], [72.4, 206.0], [72.5, 208.0], [72.6, 210.0], [72.7, 212.0], [72.8, 214.0], [72.9, 217.0], [73.0, 219.0], [73.1, 221.0], [73.2, 223.0], [73.3, 225.0], [73.4, 227.0], [73.5, 228.0], [73.6, 231.0], [73.7, 233.0], [73.8, 236.0], [73.9, 237.0], [74.0, 239.0], [74.1, 242.0], [74.2, 244.0], [74.3, 247.0], [74.4, 249.0], [74.5, 252.0], [74.6, 254.0], [74.7, 256.0], [74.8, 259.0], [74.9, 261.0], [75.0, 263.0], [75.1, 264.0], [75.2, 267.0], [75.3, 268.0], [75.4, 270.0], [75.5, 272.0], [75.6, 274.0], [75.7, 277.0], [75.8, 278.0], [75.9, 279.0], [76.0, 281.0], [76.1, 283.0], [76.2, 284.0], [76.3, 287.0], [76.4, 288.0], [76.5, 290.0], [76.6, 292.0], [76.7, 293.0], [76.8, 295.0], [76.9, 296.0], [77.0, 297.0], [77.1, 299.0], [77.2, 301.0], [77.3, 302.0], [77.4, 304.0], [77.5, 305.0], [77.6, 306.0], [77.7, 308.0], [77.8, 310.0], [77.9, 312.0], [78.0, 313.0], [78.1, 315.0], [78.2, 317.0], [78.3, 319.0], [78.4, 321.0], [78.5, 324.0], [78.6, 326.0], [78.7, 328.0], [78.8, 329.0], [78.9, 331.0], [79.0, 334.0], [79.1, 336.0], [79.2, 337.0], [79.3, 340.0], [79.4, 342.0], [79.5, 343.0], [79.6, 346.0], [79.7, 348.0], [79.8, 350.0], [79.9, 353.0], [80.0, 355.0], [80.1, 357.0], [80.2, 359.0], [80.3, 361.0], [80.4, 363.0], [80.5, 366.0], [80.6, 368.0], [80.7, 370.0], [80.8, 373.0], [80.9, 376.0], [81.0, 379.0], [81.1, 382.0], [81.2, 384.0], [81.3, 387.0], [81.4, 389.0], [81.5, 392.0], [81.6, 393.0], [81.7, 395.0], [81.8, 397.0], [81.9, 399.0], [82.0, 401.0], [82.1, 403.0], [82.2, 405.0], [82.3, 408.0], [82.4, 409.0], [82.5, 411.0], [82.6, 414.0], [82.7, 416.0], [82.8, 419.0], [82.9, 421.0], [83.0, 424.0], [83.1, 428.0], [83.2, 431.0], [83.3, 434.0], [83.4, 438.0], [83.5, 440.0], [83.6, 442.0], [83.7, 445.0], [83.8, 449.0], [83.9, 452.0], [84.0, 454.0], [84.1, 456.0], [84.2, 459.0], [84.3, 461.0], [84.4, 464.0], [84.5, 466.0], [84.6, 469.0], [84.7, 471.0], [84.8, 475.0], [84.9, 477.0], [85.0, 480.0], [85.1, 483.0], [85.2, 486.0], [85.3, 488.0], [85.4, 490.0], [85.5, 494.0], [85.6, 496.0], [85.7, 498.0], [85.8, 499.0], [85.9, 502.0], [86.0, 507.0], [86.1, 509.0], [86.2, 512.0], [86.3, 515.0], [86.4, 517.0], [86.5, 521.0], [86.6, 525.0], [86.7, 530.0], [86.8, 534.0], [86.9, 538.0], [87.0, 542.0], [87.1, 544.0], [87.2, 548.0], [87.3, 552.0], [87.4, 556.0], [87.5, 559.0], [87.6, 562.0], [87.7, 566.0], [87.8, 570.0], [87.9, 573.0], [88.0, 577.0], [88.1, 583.0], [88.2, 586.0], [88.3, 592.0], [88.4, 595.0], [88.5, 598.0], [88.6, 600.0], [88.7, 602.0], [88.8, 604.0], [88.9, 607.0], [89.0, 611.0], [89.1, 614.0], [89.2, 620.0], [89.3, 623.0], [89.4, 627.0], [89.5, 632.0], [89.6, 636.0], [89.7, 640.0], [89.8, 644.0], [89.9, 652.0], [90.0, 656.0], [90.1, 661.0], [90.2, 664.0], [90.3, 668.0], [90.4, 672.0], [90.5, 680.0], [90.6, 684.0], [90.7, 689.0], [90.8, 691.0], [90.9, 695.0], [91.0, 697.0], [91.1, 700.0], [91.2, 703.0], [91.3, 705.0], [91.4, 708.0], [91.5, 712.0], [91.6, 717.0], [91.7, 723.0], [91.8, 727.0], [91.9, 732.0], [92.0, 737.0], [92.1, 742.0], [92.2, 748.0], [92.3, 755.0], [92.4, 761.0], [92.5, 765.0], [92.6, 769.0], [92.7, 773.0], [92.8, 777.0], [92.9, 783.0], [93.0, 788.0], [93.1, 792.0], [93.2, 795.0], [93.3, 798.0], [93.4, 800.0], [93.5, 803.0], [93.6, 807.0], [93.7, 811.0], [93.8, 818.0], [93.9, 823.0], [94.0, 833.0], [94.1, 840.0], [94.2, 849.0], [94.3, 855.0], [94.4, 866.0], [94.5, 870.0], [94.6, 877.0], [94.7, 881.0], [94.8, 888.0], [94.9, 892.0], [95.0, 896.0], [95.1, 899.0], [95.2, 903.0], [95.3, 907.0], [95.4, 915.0], [95.5, 921.0], [95.6, 928.0], [95.7, 933.0], [95.8, 940.0], [95.9, 949.0], [96.0, 958.0], [96.1, 965.0], [96.2, 972.0], [96.3, 981.0], [96.4, 987.0], [96.5, 994.0], [96.6, 999.0], [96.7, 1004.0], [96.8, 1014.0], [96.9, 1024.0], [97.0, 1032.0], [97.1, 1042.0], [97.2, 1058.0], [97.3, 1066.0], [97.4, 1075.0], [97.5, 1082.0], [97.6, 1087.0], [97.7, 1095.0], [97.8, 1100.0], [97.9, 1107.0], [98.0, 1127.0], [98.1, 1148.0], [98.2, 1168.0], [98.3, 1187.0], [98.4, 1196.0], [98.5, 1212.0], [98.6, 1233.0], [98.7, 1256.0], [98.8, 1282.0], [98.9, 1329.0], [99.0, 1359.0], [99.1, 1392.0], [99.2, 1443.0], [99.3, 1482.0], [99.4, 1556.0], [99.5, 1654.0], [99.6, 1864.0], [99.7, 2015.0], [99.8, 5203.0], [99.9, 6749.0]], "isOverall": false, "label": "GET /api/compute", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 12024.0, "series": [{"data": [[0.0, 12024.0], [600.0, 519.0], [700.0, 457.0], [800.0, 367.0], [900.0, 301.0], [1000.0, 239.0], [1100.0, 132.0], [1200.0, 87.0], [1300.0, 54.0], [1400.0, 40.0], [1500.0, 31.0], [100.0, 2638.0], [1600.0, 12.0], [1700.0, 8.0], [1800.0, 11.0], [1900.0, 13.0], [2000.0, 8.0], [2300.0, 1.0], [200.0, 1064.0], [3500.0, 3.0], [3800.0, 1.0], [300.0, 970.0], [4800.0, 2.0], [5000.0, 2.0], [5100.0, 3.0], [4900.0, 2.0], [5300.0, 2.0], [5200.0, 3.0], [5600.0, 2.0], [5500.0, 1.0], [5400.0, 3.0], [5700.0, 3.0], [6300.0, 1.0], [400.0, 794.0], [6600.0, 3.0], [6500.0, 2.0], [6700.0, 2.0], [6800.0, 1.0], [7100.0, 2.0], [7200.0, 4.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 4.0], [500.0, 560.0], [8100.0, 3.0]], "isOverall": false, "label": "GET /api/compute", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 138.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 17496.0, "series": [{"data": [[0.0, 17496.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2750.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 138.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9729729729729726, "minX": 1.79049684E12, "maxY": 30.0, "series": [{"data": [[1.79049732E12, 2.0], [1.79049702E12, 2.0], [1.79049696E12, 2.0], [1.79049762E12, 1.9871794871794872], [1.79049708E12, 2.0], [1.79049738E12, 2.0], [1.79049684E12, 1.9729729729729726], [1.7904975E12, 2.0], [1.79049744E12, 2.0], [1.79049714E12, 2.0], [1.79049756E12, 2.0], [1.79049726E12, 2.0], [1.7904972E12, 2.0], [1.7904969E12, 2.0]], "isOverall": false, "label": "1-Baseline (whole test)", "isController": false}, {"data": [[1.79049732E12, 29.85052264808363], [1.79049702E12, 6.23611111111111], [1.79049714E12, 30.0], [1.79049708E12, 25.530739673390972], [1.79049726E12, 30.0], [1.7904972E12, 30.0]], "isOverall": false, "label": "2-Surge (t=180s..480s)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79049762E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 17.546413502109694, "minX": 1.0, "maxY": 854.7878787878789, "series": [{"data": [[2.0, 17.546413502109694], [32.0, 220.65113025962532], [3.0, 51.72727272727273], [4.0, 86.16666666666667], [5.0, 74.95652173913045], [6.0, 147.19354838709677], [7.0, 221.51724137931032], [8.0, 347.0833333333333], [9.0, 485.67999999999995], [10.0, 450.88888888888897], [11.0, 562.9199999999998], [12.0, 653.0384615384615], [13.0, 643.0357142857141], [14.0, 765.6071428571428], [15.0, 753.9655172413793], [1.0, 134.0], [16.0, 854.7878787878789], [17.0, 774.9999999999998], [18.0, 425.19999999999993], [19.0, 398.33333333333337], [20.0, 423.20338983050857], [21.0, 496.96491228070175], [22.0, 424.2714285714286], [23.0, 302.13095238095235], [24.0, 326.81395348837196], [25.0, 306.59375], [26.0, 335.90217391304355], [27.0, 376.129411764706], [28.0, 360.5851063829788], [29.0, 394.3478260869565], [30.0, 310.0683760683761], [31.0, 273.4871794871795]], "isOverall": false, "label": "GET /api/compute", "isController": false}, {"data": [[29.807201726844728, 224.22434262166325]], "isOverall": false, "label": "GET /api/compute-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 82.01666666666667, "minX": 1.79049684E12, "maxY": 16714.4, "series": [{"data": [[1.79049732E12, 10132.0], [1.79049702E12, 1108.4], [1.79049696E12, 408.0], [1.79049762E12, 265.2], [1.79049708E12, 7340.6], [1.79049738E12, 404.6], [1.79049684E12, 125.8], [1.7904975E12, 408.0], [1.79049744E12, 404.6], [1.79049714E12, 15589.0], [1.79049756E12, 408.0], [1.79049726E12, 16714.4], [1.7904972E12, 15592.4], [1.7904969E12, 404.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79049732E12, 6605.666666666667], [1.79049702E12, 722.6333333333333], [1.79049696E12, 266.0], [1.79049762E12, 172.9], [1.79049708E12, 4785.783333333334], [1.79049738E12, 263.78333333333336], [1.79049684E12, 82.01666666666667], [1.7904975E12, 266.0], [1.79049744E12, 263.78333333333336], [1.79049714E12, 10163.416666666666], [1.79049756E12, 266.0], [1.79049726E12, 10897.133333333333], [1.7904972E12, 10165.633333333333], [1.7904969E12, 263.78333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79049762E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 10.897435897435896, "minX": 1.79049684E12, "maxY": 490.4691987031037, "series": [{"data": [[1.79049732E12, 212.20369127516796], [1.79049702E12, 255.91411042944785], [1.79049696E12, 20.066666666666666], [1.79049762E12, 10.897435897435896], [1.79049708E12, 490.4691987031037], [1.79049738E12, 17.605042016806728], [1.79049684E12, 28.540540540540547], [1.7904975E12, 17.01666666666667], [1.79049744E12, 17.34453781512605], [1.79049714E12, 208.1768811341328], [1.79049756E12, 13.941666666666663], [1.79049726E12, 179.44365337672951], [1.7904972E12, 206.02311382468392], [1.7904969E12, 18.69747899159665]], "isOverall": false, "label": "GET /api/compute", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79049762E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 10.897435897435896, "minX": 1.79049684E12, "maxY": 490.42612320518805, "series": [{"data": [[1.79049732E12, 212.1989932885905], [1.79049702E12, 255.8190184049078], [1.79049696E12, 19.96666666666667], [1.79049762E12, 10.897435897435896], [1.79049708E12, 490.42612320518805], [1.79049738E12, 17.59663865546219], [1.79049684E12, 28.054054054054053], [1.7904975E12, 17.01666666666667], [1.79049744E12, 17.336134453781515], [1.79049714E12, 208.16030534351182], [1.79049756E12, 13.941666666666663], [1.79049726E12, 179.4383645240032], [1.7904972E12, 206.01439162668993], [1.7904969E12, 18.63025210084034]], "isOverall": false, "label": "GET /api/compute", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79049762E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.79049684E12, "maxY": 1.4054054054054057, "series": [{"data": [[1.79049732E12, 0.008389261744966434], [1.79049702E12, 0.07975460122699382], [1.79049696E12, 0.05000000000000002], [1.79049762E12, 0.0], [1.79049708E12, 0.03381194997684111], [1.79049738E12, 0.01680672268907563], [1.79049684E12, 1.4054054054054057], [1.7904975E12, 0.016666666666666663], [1.79049744E12, 0.025210084033613453], [1.79049714E12, 0.012431842966194097], [1.79049756E12, 0.008333333333333331], [1.79049726E12, 0.010577705451586651], [1.7904972E12, 0.008722197993894485], [1.7904969E12, 0.03361344537815126]], "isOverall": false, "label": "GET /api/compute", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79049762E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 10.0, "minX": 1.79049684E12, "maxY": 8153.0, "series": [{"data": [[1.79049732E12, 8137.0], [1.79049702E12, 902.0], [1.79049696E12, 71.0], [1.79049762E12, 14.0], [1.79049708E12, 8153.0], [1.79049738E12, 25.0], [1.79049684E12, 257.0], [1.7904975E12, 24.0], [1.79049744E12, 36.0], [1.79049714E12, 1685.0], [1.79049756E12, 90.0], [1.79049726E12, 1972.0], [1.7904972E12, 1363.0], [1.7904969E12, 39.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79049732E12, 678.6000000000004], [1.79049702E12, 609.2], [1.79049696E12, 24.0], [1.79049762E12, 12.0], [1.79049708E12, 1116.0], [1.79049738E12, 21.0], [1.79049684E12, 37.60000000000002], [1.7904975E12, 19.0], [1.79049744E12, 20.0], [1.79049714E12, 508.40000000000055], [1.79049756E12, 17.900000000000006], [1.79049726E12, 501.0], [1.7904972E12, 684.3000000000002], [1.7904969E12, 22.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79049732E12, 1989.7600000000002], [1.79049702E12, 868.8000000000011], [1.79049696E12, 69.52999999999994], [1.79049762E12, 14.0], [1.79049708E12, 6683.4], [1.79049738E12, 24.799999999999997], [1.79049684E12, 257.0], [1.7904975E12, 23.789999999999992], [1.79049744E12, 33.599999999999966], [1.79049714E12, 1238.8200000000043], [1.79049756E12, 88.52999999999994], [1.79049726E12, 980.2799999999988], [1.7904972E12, 1014.1300000000001], [1.7904969E12, 36.599999999999966]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79049732E12, 975.8999999999996], [1.79049702E12, 767.9999999999991], [1.79049696E12, 27.94999999999999], [1.79049762E12, 12.0], [1.79049708E12, 1350.0], [1.79049738E12, 22.0], [1.79049684E12, 88.70000000000027], [1.7904975E12, 19.94999999999999], [1.79049744E12, 21.0], [1.79049714E12, 690.0], [1.79049756E12, 22.799999999999955], [1.79049726E12, 660.2999999999993], [1.7904972E12, 819.6499999999996], [1.7904969E12, 23.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79049732E12, 14.0], [1.79049702E12, 17.0], [1.79049696E12, 15.0], [1.79049762E12, 10.0], [1.79049708E12, 16.0], [1.79049738E12, 15.0], [1.79049684E12, 16.0], [1.7904975E12, 14.0], [1.79049744E12, 14.0], [1.79049714E12, 16.0], [1.79049756E12, 10.0], [1.79049726E12, 14.0], [1.7904972E12, 15.0], [1.7904969E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79049732E12, 48.0], [1.79049702E12, 116.0], [1.79049696E12, 19.0], [1.79049762E12, 11.0], [1.79049708E12, 113.0], [1.79049738E12, 17.0], [1.79049684E12, 19.0], [1.7904975E12, 17.0], [1.79049744E12, 17.0], [1.79049714E12, 98.0], [1.79049756E12, 11.0], [1.79049726E12, 76.0], [1.7904972E12, 87.0], [1.7904969E12, 18.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79049762E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 1105.5, "series": [{"data": [[2.0, 17.0], [3.0, 16.0], [4.0, 20.5], [5.0, 43.0], [6.0, 29.5], [9.0, 27.0], [10.0, 139.5], [11.0, 500.0], [13.0, 487.5], [14.0, 602.0], [15.0, 504.5], [16.0, 905.0], [17.0, 185.0], [20.0, 1105.5], [22.0, 634.0], [25.0, 475.0], [26.0, 89.5], [28.0, 263.5], [29.0, 226.0], [30.0, 205.0], [32.0, 168.0], [34.0, 18.0], [37.0, 55.0], [36.0, 18.0], [41.0, 97.0], [42.0, 73.0], [43.0, 68.5], [45.0, 67.0], [44.0, 94.5], [47.0, 54.0], [46.0, 263.5], [48.0, 94.0], [49.0, 148.0], [50.0, 127.0], [51.0, 66.0], [53.0, 112.5], [52.0, 200.5], [54.0, 267.0], [55.0, 159.0], [56.0, 75.5], [57.0, 147.0], [59.0, 70.0], [58.0, 90.5], [60.0, 59.0], [61.0, 236.0], [63.0, 25.0], [64.0, 72.0], [65.0, 105.5], [67.0, 125.0], [66.0, 157.5], [70.0, 120.5], [71.0, 104.0], [68.0, 95.0], [69.0, 137.5], [74.0, 85.5], [75.0, 89.0], [73.0, 101.0], [72.0, 122.0], [76.0, 91.0], [78.0, 109.0], [79.0, 88.0], [77.0, 98.5], [83.0, 63.0], [80.0, 85.0], [82.0, 71.0], [81.0, 69.0], [84.0, 61.0], [85.0, 63.0], [87.0, 51.0], [86.0, 49.0], [88.0, 68.5], [90.0, 82.5], [91.0, 55.5], [89.0, 55.0], [92.0, 90.0], [97.0, 85.5], [98.0, 93.5], [107.0, 48.0], [112.0, 90.5], [113.0, 52.0], [123.0, 52.0], [125.0, 98.0], [1.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 1105.5, "series": [{"data": [[2.0, 17.0], [3.0, 16.0], [4.0, 20.5], [5.0, 43.0], [6.0, 29.5], [9.0, 27.0], [10.0, 139.5], [11.0, 500.0], [13.0, 487.5], [14.0, 601.0], [15.0, 504.0], [16.0, 905.0], [17.0, 185.0], [20.0, 1105.5], [22.0, 634.0], [25.0, 475.0], [26.0, 89.5], [28.0, 263.5], [29.0, 226.0], [30.0, 205.0], [32.0, 168.0], [34.0, 17.5], [37.0, 55.0], [36.0, 18.0], [41.0, 97.0], [42.0, 73.0], [43.0, 68.5], [45.0, 67.0], [44.0, 94.0], [47.0, 54.0], [46.0, 263.5], [48.0, 94.0], [49.0, 148.0], [50.0, 127.0], [51.0, 66.0], [53.0, 112.5], [52.0, 200.5], [54.0, 267.0], [55.0, 159.0], [56.0, 75.5], [57.0, 147.0], [59.0, 70.0], [58.0, 90.5], [60.0, 59.0], [61.0, 236.0], [63.0, 25.0], [64.0, 72.0], [65.0, 105.5], [67.0, 125.0], [66.0, 157.5], [70.0, 120.5], [71.0, 104.0], [68.0, 95.0], [69.0, 137.5], [74.0, 85.5], [75.0, 89.0], [73.0, 101.0], [72.0, 122.0], [76.0, 91.0], [78.0, 109.0], [79.0, 88.0], [77.0, 98.5], [83.0, 63.0], [80.0, 85.0], [82.0, 71.0], [81.0, 69.0], [84.0, 61.0], [85.0, 63.0], [87.0, 51.0], [86.0, 49.0], [88.0, 68.5], [90.0, 82.5], [91.0, 55.5], [89.0, 55.0], [92.0, 90.0], [97.0, 85.5], [98.0, 93.5], [107.0, 48.0], [112.0, 90.5], [113.0, 52.0], [123.0, 52.0], [125.0, 98.0], [1.0, 18.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.79049684E12, "maxY": 81.95, "series": [{"data": [[1.79049732E12, 49.36666666666667], [1.79049702E12, 5.566666666666666], [1.79049696E12, 2.0], [1.79049762E12, 1.3], [1.79049708E12, 36.166666666666664], [1.79049738E12, 1.9833333333333334], [1.79049684E12, 0.6166666666666667], [1.7904975E12, 2.0], [1.79049744E12, 1.9833333333333334], [1.79049714E12, 76.35], [1.79049756E12, 2.0], [1.79049726E12, 81.95], [1.7904972E12, 76.46666666666667], [1.7904969E12, 1.9833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79049762E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.79049684E12, "maxY": 81.93333333333334, "series": [{"data": [[1.79049732E12, 49.666666666666664], [1.79049702E12, 5.433333333333334], [1.79049696E12, 2.0], [1.79049762E12, 1.3], [1.79049708E12, 35.983333333333334], [1.79049738E12, 1.9833333333333334], [1.79049684E12, 0.6166666666666667], [1.7904975E12, 2.0], [1.79049744E12, 1.9833333333333334], [1.79049714E12, 76.41666666666667], [1.79049756E12, 2.0], [1.79049726E12, 81.93333333333334], [1.7904972E12, 76.43333333333334], [1.7904969E12, 1.9833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79049762E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.79049684E12, "maxY": 81.93333333333334, "series": [{"data": [[1.79049732E12, 49.666666666666664], [1.79049702E12, 5.433333333333334], [1.79049696E12, 2.0], [1.79049762E12, 1.3], [1.79049708E12, 35.983333333333334], [1.79049738E12, 1.9833333333333334], [1.79049684E12, 0.6166666666666667], [1.7904975E12, 2.0], [1.79049744E12, 1.9833333333333334], [1.79049714E12, 76.41666666666667], [1.79049756E12, 2.0], [1.79049726E12, 81.93333333333334], [1.7904972E12, 76.43333333333334], [1.7904969E12, 1.9833333333333334]], "isOverall": false, "label": "GET /api/compute-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79049762E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.79049684E12, "maxY": 81.93333333333334, "series": [{"data": [[1.79049732E12, 49.666666666666664], [1.79049702E12, 5.433333333333334], [1.79049696E12, 2.0], [1.79049762E12, 1.3], [1.79049708E12, 35.983333333333334], [1.79049738E12, 1.9833333333333334], [1.79049684E12, 0.6166666666666667], [1.7904975E12, 2.0], [1.79049744E12, 1.9833333333333334], [1.79049714E12, 76.41666666666667], [1.79049756E12, 2.0], [1.79049726E12, 81.93333333333334], [1.7904972E12, 76.43333333333334], [1.7904969E12, 1.9833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79049762E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

