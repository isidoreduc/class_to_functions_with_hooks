import { useEffect, useState } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setError(err.message)
        );
    }, []) // empty array, so run the arrow func one time in the life cycle of the compoenent

    return [lat, error]
}