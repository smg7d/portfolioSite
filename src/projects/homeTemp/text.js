import React, { Component } from 'react';


const p1 = () => {
    return (
        <React.Fragment>
            I've recently had some issues with the AC in my apartment. First it wasn't working well, then it altogether 
            broke. The landlord sent someone to fix it, so it works, but it doesn't seem to be as strong as it used to be. 
            I want to ask for additional maintainence, but without some hard data to point to, I don't have much to 
            stand on.
            <br />
            <p>
                I came across 
                <a href="https://www.circuitbasics.com/raspberry-pi-ds18b20-temperature-sensor-tutorial" target="_blank"> this 
                </a> tutorial online on how to set up a temperature sensor on a raspberry pi and control it using python. 
                <a href="https://www.amazon.com/Diymore-DS18B20-Digital-Thermometer-Temperature/dp/B01IVN3X6K/ref=sr_1_6?keywords=ds18b20&qid=1564774252&s=gateway&sr=8-6" target="_blank"> $11 and four days</a> later, I was in business.
            </p>
                    </React.Fragment>
        )
};

const p2 = `
The sensor is connected to the power supply, ground, and one of the input pins of the pi which allows data transfer. 
Internally, after editing a few configuration files, the sensor is listed as a connected device, and, in python, can 
be treated as a file. Opening and reading the file will return a few strings with some data, including the temperature.
`; 

const p3 = `
The actual data returned requires some parsing and a conversion to Fahrenheit.
`;

const p4 = `
So the end result is a pretty easy way to read the temperature of the room whenever you'd like. Here it is in action.
`;

const p5 = `
I wanted data that was representative, so I let it run for a full week, reading the temperature every five minutes 
and saving the time and data in a text file. After a full week, I converted the text file to csv and read the results 
into a pandas data frame. A couple of seaborn plot commands later and this is what we get:
`;

const p6 = `
So, off the bat, it looks like the AC actually is working, for the most part. It gets down to as cold as 64 degrees 
which is typically where I have it set. That said, there's a clear daily cycle, rising and falling with the outside 
temperature which indicates some lag in its ability to keep up, so it could be better, but in general the temperatures 
are in a comfortable range.
`;

const p7 = `
As far as extending this, I plan to re-run this project keeping specific tabs on where I have the thermostat set, 
cross referencing this with weather data accessed through an API and the electricity costs to see if I can back out 
a cost per degree of cooling.
`;

export { p1, p2, p3, p4, p5, p6, p7 }; 