import React, { useReducer, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Loader from "react-loader-spinner";

import BarChartView from '../screens/dashboard/views/components/BarChartView';
import "./MapboxStyles.scss";
import api from '../commons/api';

const MAP_ACTION_TYPES = {
    UPDATE_COORDS: "UPDATE_COORDS",
};

const initialMapState = {
    lat: 56.130367,
    lng: -106.346771,
    zoom: 1,
};

const mapReducer = (state, action) => {
    switch (action.type) {
        case MAP_ACTION_TYPES.UPDATE_COORDS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const Mapbox = () => {
    const [mapState, updateMapState] = useReducer(mapReducer, initialMapState);
    const [barChartData, updateBarChartData] = useState([
        { name: "Joy", Emotion: 0 },
        { name: "Sadness", Emotion: 0 },
        { name: "Fear", Emotion: 0 }
    ]);
    const [isLoading, updateIsLoading] = useState(false);
    const mapContainer = useRef(null);

    useEffect(() => {
        // map instance
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [mapState.lng, mapState.lat],
            zoom: mapState.zoom,
            interactive: false,
        });

        // adding geocoder
        const geocoder = new MapBoxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl,
            types: 'region',
        });
        geocoder.on('result', onRegionChange);

        map.addControl(geocoder);
        // eslint-disable-next-line 
    }, []);

    const onRegionChange = async (response) => {
        if (!response.result) return;

        updateMapState({
            action: MAP_ACTION_TYPES.UPDATE_COORDS,
            payload: {
                lat: response.result.center[1],
                lng: response.result.center[0],
            }
        });
        updateBarChartData([
            { name: "Joy", Emotion: 0 },
            { name: "Sadness", Emotion: 0 },
            { name: "Fear", Emotion: 0 }
        ]);
        updateIsLoading(true);

        try {
            const { data } = await api.get(`https://covid19impactanalysisapipython.herokuapp.com/province/score/${response.result.center[1]},${response.result.center[0]}`);
            updateBarChartData([
                { name: "Joy", Emotion: data.joyScore },
                { name: "Sadness", Emotion: data.sadnessScore },
                { name: "Fear", Emotion: data.fearScore }
            ]);
        } catch (err) {
            // ToDo: handle api error
        }
        updateIsLoading(false);
    };

    return (
        <div>
            <div ref={mapContainer} className="mapContainer" />
            <div className="mapbox-comp__result-container">
                <div className="mapbox-comp__bar-chart-container">
                    <h4>Search for a province/state to get started.</h4>
                    <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={50}
                        width={50}
                        visible={isLoading}
                        style={{
                            position: 'absolute',
                            zIndex: 10
                        }}
                    />
                    <BarChartView data={barChartData} />
                </div>
            </div>
        </div>
    );
};

export default Mapbox;
