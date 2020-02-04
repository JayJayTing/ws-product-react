import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';
import { getEventsSumGeo, getStatsSumGeo } from '../actions';
import { Button } from 'antd';
function Map(props) {
	const [condition, setCondition] = useState('state');
	const [info, setInto] = useState('events');
	const [selectedLocation, setSelectedLocation] = useState(null);

	return (
		<div>
			<GoogleMap defaultZoom={10} defaultCenter={{ lat: 43.6426, lng: -79.3871 }}>
				{info == 'events'
					? Object.values(props.props.eventsSumGeo).map(location => {
							return (
								<Marker
									position={{ lat: location.lat, lng: location.lon }}
									onClick={() => {
										console.log(location);
										setSelectedLocation(location);
									}}></Marker>
							);
					  })
					: Object.values(props.props.statsSumGeo).map(location => {
							return (
								<Marker
									position={{ lat: location.lat, lng: location.lon }}
									onClick={() => {
										console.log(location);
										setSelectedLocation(location);
									}}></Marker>
							);
					  })}

				{info == 'events'
					? selectedLocation && (
							<InfoWindow
								position={{ lat: selectedLocation.lat, lng: selectedLocation.lon }}
								onCloseClick={() => {
									setSelectedLocation(null);
								}}>
								<div>
									<h1>{selectedLocation.name}</h1>
									<p>Number of Events: {selectedLocation.events}</p>
								</div>
							</InfoWindow>
					  )
					: selectedLocation && (
							<InfoWindow
								position={{ lat: selectedLocation.lat, lng: selectedLocation.lon }}
								onCloseClick={() => {
									setSelectedLocation(null);
								}}>
								<div>
									<h1>{selectedLocation.name}</h1>
									<p>Number of Clicks: {selectedLocation.clicks}</p>
									<p>Revenue: {selectedLocation.revenue}</p>
									<p>Impressions: {selectedLocation.impressions}</p>
								</div>
							</InfoWindow>
					  )}

				{console.log('OVER HERE', selectedLocation)}
			</GoogleMap>
			{info == 'events' ? (
				<Button
					type='primary'
					onClick={() => {
						setInto('stats');
					}}>
					Switch to Stats
				</Button>
			) : (
				<Button
					type='primary'
					onClick={() => {
						setInto('events');
					}}>
					Switch to Events
				</Button>
			)}
		</div>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const mapStateToProps = state => {
	return {
		eventsSumGeo: state.eventsSumGeo,
		statsSumGeo: state.statsSumGeo,
		poi: state.poi
	};
};

const CompleteMap = props => {
	useEffect(() => {
		props.getEventsSumGeo();
		props.getStatsSumGeo();
	}, []);

	return (
		<WrappedMap
			props={props}
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `400px` }} />}
			mapElement={<div style={{ height: `100%` }} />}></WrappedMap>
	);
};
connect(mapStateToProps, { getEventsSumGeo, getStatsSumGeo })(Map);
export default connect(mapStateToProps, { getEventsSumGeo, getStatsSumGeo })(CompleteMap);
