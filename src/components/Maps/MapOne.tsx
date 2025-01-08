import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'jsvectormap/dist/maps/world.js'; // Import the world map
import { useEffect } from 'react';

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'world', // Load the world map
      zoomButtons: true,
      markers: [
        { coords: [-77.0369, 38.9072], name: 'USA', sales: 1923 },
        { coords: [-34.6037, -58.3816], name: 'Argentina', sales: 1923 },
        { coords: [138.6007, -34.9285], name: 'Australia', sales: 1923 },
        { coords: [25.2797, 54.6872], name: 'Lithuania', sales: 1923 },
        { coords: [21.8254, 41.9981], name: 'Albania', sales: 1923 },
        { coords: [7.4216, 43.7384], name: 'Monaco', sales: 1923 },
        { coords: [10.7522, 59.9139], name: 'Norway', sales: 1923 },
        { coords: [73.0551, 33.6844], name: 'Pakistan', sales: 1923 },
      ],
      markerStyle: {
        initial: {
          fill: '#3056D3',
          stroke: '#fff',
          r: 8,
        },
        hover: {
          fill: '#FF6B6B',
          stroke: '#fff',
          cursor: 'pointer',
        },
      },
      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      labels: {
        markers: {
            render(marker: { name: string; sales: number }) {
            return `${marker.name}: ${marker.sales}`;
            },
        },
      },
    });
    mapOne;
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Top Countries
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90"></div>
      <p className="mt-4 text-center text-sm text-gray-500">Sales by countries</p>
    </div>
  );
};

export default MapOne;
