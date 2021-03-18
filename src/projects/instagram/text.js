import React, { Component } from 'react';


const p1 = () => {
    return (
        <React.Fragment>
            <p>
            The Friendship paradox is an observable phenomenon that states most people 
            have fewer friends than their friends do, or rather than their average friend. Put another way, if you 
            pluck a random person from the population and compare the number of friends
            they have with the number of friends their friends do, most people will have less.
            It has nothing to do with people and is actually a direct consequence of the topology of social 
            networks. In fact, any network where any single node has more connections than any other node
            will have this property. 
            </p>
            
            <p>
                This <a href="https://www.alexirpan.com/2017/09/13/friendship-paradox.html" target="_blank">blog article</a> does 
                a great overview of the math behind it, and it's worth the read, but the 
                intuition is simple: when you look at the friend group of a random person, you
                are more likely to find people that have lots of friends because who shows up in friend groups?
                people with lots of friends. Who doesn't show up in friend groups? People with fewer friends.
                It's sampling bias, plain and simple.
            </p>

            <p>
                Put another way, if you count the number of friends each person has in a population, each
                person gets counted once. But if you count the number of friends their friends have, you
                count the popular people a lot more.
            </p>
        </React.Fragment>
        )
};

const p2 = () => {
    return (
        <React.Fragment>
            <p>
                I wanted to test this out using Instagram data - do most people have fewer followers 
                than their followers have on average? - so I found a decent <a href="https://github.com/LevPasha/Instagram-API-python" target="_blank"> python wrapper</a> for 
                the Instagram API and cloned it. 
                The repo provides an "InstagramAPI" object which handles authentication 
                flow and administrative stuff like login/logout, but, more importantly, it 
                provides a way to get a list of followers for a given username.
            </p>  

            With that set, the picture becomes pretty straightforward. To test this for one user, all we need is to:
                    <ul>
                        <li>generate a list of their followers</li>
                        <li>count this list (call this myCount)</li>
                        <li>for each follower in that list, get their number of followers</li>
                        <li>average the followers' follow count (call this avCount)</li>
                        <li>observe myCount/avCount. if this ratio is less than 1 then paradox is true for this person</li>
                    </ul>
            <br />
        </React.Fragment>
        )
};


const p4 = `
Of course, it's important to evaluate this over a large number of people and see if 
it holds for most. For our purposes, if 80% of people have a ratio of < 1, 
then we'll judge the claim true.
`;

const p5 = () => {
    return (
        <React.Fragment>
            <p>
                Of course, there were a few challenge to overcome.
            </p>
                
            <p>
                First, the API referenced data using <i>userIds</i> not <i> usernames</i>. 
            Fortunately, I was able to locate an endpoint that converted from the latter to the former. 
            Using the requests library, I wrote a short method that get userIds as needed.
            </p>      
        </React.Fragment>
        )
};

const p6 = () => {
    return (
        <React.Fragment>
            <p>
                Secondly, a recent deprecation meant Instagram allowed only 200 calls per account 
                per hour. My account has 230 friends who average 780 friends each, which meant 
                I was looking at roughly 37 days of runtime minimum. Needless to say, 
                I was not interested in letting my laptop run 24/7 for over a month straight, 
                so I did a couple of things to address this.
            </p>
            <p>
                <b>More accounts. </b> 
                    At 37 accounts, I could run it in 24 hours, which is much better than 37 
                    days. Instagram only lets you do 3, which still meant 13 days but was better
                    than nothing. I made some dummy accounts and added an account swapping method
                    to the class. After each hit their limit, the program would sleep for an hour.
            </p>
        </React.Fragment>
    )
}

const p7 = () => {
    return (
        <React.Fragment>
            <p>
                <b>Memoization with a hashmap. </b> 
                    There must be some overlap between friends' friends, so I logged every new friend 
                    count lookup in a hash map which checked before hitting the API.
            </p>

            <p>
                <b>Mental offload. </b> 
                    Finally, if I couldn't get execution down any further, I at least 
                    wanted to be able to not think about it, so I dropped the files on a 
                    raspberry pi (a small, cheap computer), hooked it up to the wireless 
                    and let it do its thing. For peace of mind, I used Twilio to have 
                    the program send text messages to me every once in a while if 
                    the program was still running and on certain error conditions, so if 
                    something went wrong, I would know it. Out of site, out of mind.
                </p>
        </React.Fragment>
    )
}


const p8 = `
The results look fairly positive for the paradox. Most accounts have a ratio of less than 
one (which means they have less friends then the average of their friend group), 
while a select few are a good bit above one. Importantly, we can see the skew in the 
distribution. In positively skewed distribution, the average will be above the mode and
median.
`;

const p9 = `
Another thing to note - as your follower count goes up, your ratio tends to go up as well.
This is what we might expect. At a certain point, you have more followers than most people on 
instagram, so your chances for a ratio > 1 are better. However, the relationship weakens
as the follower count increases meaning it's less good of a predictor at a cetain point. This
is a classic "shotgun spray" pattern known as heteroskedacity, and it's a good indicator that
there's more going on than just having a high follower count.
`;

export { p1, p2, p4, p5, p6, p7, p8, p9 }; 