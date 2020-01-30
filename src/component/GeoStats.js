import React from 'react';
import DeckGL from 'deck.gl';
import { LineLayer } from '@deck.gl/layers';

function GeoStats() {
  const data = [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781]
    }
  ];
  const viewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };
  const layers = [new LineLayer({ id: 'line-layer', data })];
  return (
    <div>
      <DeckGL viewState={viewState} layers={layers} />
    </div>
  );
}

export default GeoStats;
