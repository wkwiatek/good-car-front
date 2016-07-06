const Amplitude = require('amplitude-js/amplitude.js');

const amplitudeInstance = Amplitude.getInstance();

amplitudeInstance.init(AMPLITUDE_API_KEY);

export const amplitude = amplitudeInstance;
