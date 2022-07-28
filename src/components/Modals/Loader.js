import React from "react";
import LoadingOverlay from 'react-loading-overlay';

const Loader = ({ isActive, description }) => {

    return (
        <LoadingOverlay
            active={isActive}
            spinner
            text={description}
        >
            </LoadingOverlay>
    )
}

export default Loader;