import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import firebase from "firebase";

export default class SchoolMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favSchools: null
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(data) {
        this.setState({favSchools: data})
    }
    componentDidMount() {
        const goldIcon = new L.Icon({
            iconUrl: require('../imgs/goldstar.png'),
            iconSize: [20, 20],
        });

        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/favorites/').on('value', (snapshot) => {
                    let values = snapshot.val();
                    let favorites = null;
                    if (values != null) {
                        favorites = (Object.keys(values).map(key => {
                            let schoolCenter = [values[key].Lat, values[key].Long]

                            return (<Marker key={key} icon={goldIcon} position={schoolCenter}>
                                <Popup>
                                    <b>{values[key].name}</b><br/>{values[key].location}
                                </Popup>
                            </Marker>)
                        }));
                    }
                    this.changeState(favorites);
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.props.currentUser) {
            firebase.database().ref('users/' + this.props.currentUser.uid + '/favorites/').off()
        }
        this.unAuthSubFunction()
    }

    render() {
        const { schoolData } = this.props;
        const UScenter = [39.8283, -98.5795] // center of continental US

        const regIcon = new L.Icon({
            iconUrl: require('../imgs/map-pin.svg'),
            iconSize: [20, 20],
        });



        return (
           
            <Map className="MapContainer" center={UScenter} zoom={4} minZoom={4} >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" //apikey=b8036ea1bdd04e658ebdde4c8bb56da4
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
                {
                    this.props.displayFavorited ? this.state.favSchools : null
                }
            </Map>
         
        )
    }
}

