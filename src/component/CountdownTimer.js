import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import Segment from "./Segment";

const COUNTER_IN_MS2 = 10 * 60 * 1000;
const NOW_IN_MS2 = new Date().getTime();
const dateTimeTenMin = NOW_IN_MS2 + COUNTER_IN_MS2;

const ShowCounter = ({ hours, minutes, seconds }) => {
    return (
        <Segment className="show-counter">
            <Segment
                className="countdown-link d-flex gap-2"
                rel="noopener noreferrer"
            >
                <DateTimeDisplay value={minutes} />
                <p className="paragraph-form py-1">:</p>
                <DateTimeDisplay value={seconds} />
            </Segment>
        </Segment>
    );
};

const CountdownTimer = () => {
    const [hours, minutes, seconds] = useCountdown(dateTimeTenMin);
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
