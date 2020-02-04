import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { connect } from 'react-redux';
import { getEventsSumGeo, getStatsSumGeo } from '../actions';

const WrappedMap = withScriptjs(
	withGoogleMap(() => {
		return (
			<div>
				<GoogleMap defaultZoon={10} defaultCenter={{ lat: 43.63, lng: -79.3871 }} />
			</div>
		);
	})
);

const mapStateToProps = state => {
	return {
		eventsSumGeo: state.eventsSumGeo,
		statsSumGeo: state.statsSumGeo
	};
};

export default connect(mapStateToProps, { getEventsSumGeo, getStatsSumGeo })(WrappedMap);
