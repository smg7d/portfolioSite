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
On normal exectution, the file hides the typical excel interface and instead presents a user interface for "logging on."
`;

const p5 = `
I put "logging on" in quotes here because its a bit of a misnomer. There are no usernames or passwords, there is only 
a "room" which is actually a temporary file to be created at a specified filepath/filename combo. Remember how we're 
essentially reading/writing to a file very quickly? In order to do so, everyone needs to point to the same file or 
"room." That means the same filepath and the same filename at that path needs to be entered (the code adds a randomized 
bit of alphanumerics on the end to make sure it doesn't coincide with an existing file at that location). Full 
instructions for using the program can be found by clicking the help button.

Once you provide a directory path and a name, the chat interface boots up.
`;

const p6 = `
The info panel is found on the right hand side. It lists the location and file name of the room as well as all of 
the users currently active in it. The users field pulls from the "Username" environment variable, which usually 
corresponds to the system username. On the bottom of the screen is an input window where users can input their 
messages, and above that is the chat window, which displays input text.
`;

const p7 = `
And here is what a basic chat looks like. When users close the application, their username is cleared from the 
info panel, and when the last user closes the application, the file is deleted. The refresh rate (the rate at which 
the interface sends and receives data from the central workbook) is every 1 second, which experienced Excel users 
might recognize as problematic. Opening and saving a file (manually or programatically) are operations that 
typically take several seconds each. Instead, we treat the excel sheet as a database and use built in database 
objects to query that excel sheet which supports reading, creating, and updating fields and doesn't require us 
to actually open or close the file. The "table" is a matrix of usernames such that messages to be read by a user 
are put in that users row, and messages written by a user are inserted into that users column (which in turn places 
it in everyone user's row). This set up is much faster and presents no problems at the 1 second refresh rate.
`;

export { p1, p2, p3, p4, p5, p6, p7 }; 