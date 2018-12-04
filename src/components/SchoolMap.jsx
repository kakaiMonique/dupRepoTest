import React, { Component } from "react";
import { Map, TileLayer, Marker } from 'react-leaflet';
// import { L } from 'leaflet';

export default class SchoolMap extends Component {
    render() {
        const { schoolData } = this.props;
        const UScenter = [39.8283, -98.5795] // center of continental US
        return (
            <Map center={UScenter} zoom={4}>
                <TileLayer
                    url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=b8036ea1bdd04e658ebdde4c8bb56da4"
                />
                {
                    Object.keys(schoolData).map((key) => {
                        let schoolCenter = [schoolData[key].Lat, schoolData[key].Long]
                        // figure out later, differentiate icons with favorites and standard
                        // var regIcon = L.icon({
                        //     iconUrl: '../imgs/bluedot.png',
                        //     iconSize: [20, 20],
                        // });
                        // var starIcon = L.icon({
                        //     iconUrl: '../imgs/goldstar.png',
                        //     iconSize: [20, 20],
                        // });
                        return <Marker key={key} position={schoolCenter} />;
                    })
                }
            </Map>
        )
    }
}

