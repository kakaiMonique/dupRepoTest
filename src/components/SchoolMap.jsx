import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import firebase from "firebase";

export default class SchoolMap extends Component {

    render() {
        const { schoolData } = this.props;
        const UScenter = [39.8283, -98.5795] // center of continental US

        const regIcon = new L.Icon({
            iconUrl: require('../imgs/bluedot.png'),
            iconSize: [10, 10],
        });

        return (
            <Map center={UScenter} zoom={4}>
                <TileLayer
                    url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=b8036ea1bdd04e658ebdde4c8bb56da4"
                />
                {
                    Object.keys(schoolData).map((key) => {
                        let schoolCenter = [schoolData[key].Lat, schoolData[key].Long]

                        return <Marker key={key} icon={regIcon} position={schoolCenter}>
                            <Popup>
                                <b>{schoolData[key].name}</b><br />{schoolData[key].location}
                            </Popup>
                        </Marker>;
                    })
                }
            </Map>
        )
    }
}

