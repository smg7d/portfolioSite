import React, { Component } from 'react';


const p1 = () => {
    return (
        <p>
            This project is a no-frills, excel-based chat application. There is no real business reason for this, 
            I mostly just wanted to challenge myself.
        </p>
        )
};

const p2 = `
How can excel be used as a chat application? Imagine if you and I sent messages back and forth by doing the following - 
opening an excel file, reading any messages left in that file, clearing those messages, and then leaving a response before 
saving and closing that file.

This project automates that process, but provides it in a GUI makes it much more user friendly and looks a lot more like a typical chat room.
`; 

const p3 = `
The file is available for download at the end of this page if you'd like to follow along. Note that it's been tested and 
works on Windows 10, but may not work on *NIX systems or older versions of Microsoft Office. It requires macros to be 
enabled which can allow malicious code to execute on your machine. I'd recommend inspecting the code before running by 
opening the file in "safe mode" using ctrl+click. Once you're satisfied it won't run anything harmful, you can then choose 
to enable macros and proceed if you wish.
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