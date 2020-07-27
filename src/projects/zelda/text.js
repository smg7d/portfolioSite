import React, { Component } from 'react';


const p1 = () => {
    return (
        <React.Fragment>
            This project is a text-based, Zelda-themed game that, at each turn, prints a board to the 
            console and provides players with a menu of options. The goal of the game is to collect objects 
            and defeat enemies on your path to collecting the "triforce." All objects are represented by 
            ASCII characters, so it's not exactly pretty. Ok, actually it's downright ugly, but we're not 
            shooting for any design awards here, we're demonstrating an ability to
            <ul>
                <li>work with pointers</li>
                <li>properly allocate and free memory</li>
                <li>get and error-check user input in a comprehensive way</li>
                <li>implement a well-designed class structure</li>
                <li>handle non-trivial and concurrent logic with software components</li>
            </ul>
        </React.Fragment>
        )
};

const p2 = `
The program is written in C++ and contains 17 classes for game objects (dice, board, menu), 
characters (main character, 4 different types of enemies), and items (sword, shield, potion, etc). 
The program starts with a main menu that provides options to get info, start or quit.
`; 

const p3 = `
That's Link (the main character) in the top right corner, represented by the X. In front of him 
is the Sword (S) without which he cannot fight any enemies. When he occupies the same space as any 
item, he picks it up and the program informs the user of this by displaying a message at the top 
and showing it in the item container.
`;

const p4 = `
One of the terrain types is "rock," and Link can't move into that space without the use of the 
hammer. If he tries to, or if he tries to move off the board, the game stops him.
`;

const p5 = `
Enemies move randomly to any of the adjacent spaces on each turn. If Link and an enemy attempt 
to occupy the same space, they are sent to battle where they take turns attacking and defending 
until one of them dies, at which point the enemy is removed from the map or the game is over.
`;

const p6 = `
After collecting all the items and opening the door the space in the lower right hand corner 
where he faces the dragon boss, Link collects the triforce and the game is over.
`;

const p7 = () => {
    return (
            <p>
            And that's pretty much it. Since it's an executable that prints to the console, there is no great 
            way to host this on the web, but all of the files are available at <a href="https://github.com/smg7d/asciiZelda" target="_blank">this</a> github repository (note: 
            you will need a g++ compiler. xcode comes with one). Thanks for reading.
            </p>
    )
}


export { p1, p2, p3, p4, p5, p6, p7 }; 