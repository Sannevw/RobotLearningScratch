import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class SimpleCountdownTimer extends React.Component {
    render() {
        var settings = {
            count: 900,
            border: true,
            showTitle: true,
            noPoints: true,
            hideDay: true,
            hideHours: true,
        };
        return (
            <CountdownTimer {...settings} />
    );
    }
}

export default SimpleCountdownTimer;
