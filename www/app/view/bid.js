var bids = {
    bids: [
        {
            name: "Cynthia Donatemuch",
            amount: "100"
        },
        {
            name: "John Q. Generous",
            amount: "80"
        },
        {
            name: "Steve Gives",
            amount: "75"
        },
        {
            name: "Bill Gates",
            amount: "70"
        }
    ]
}

var bidTemp = "<tr><th>" +  + "</th><th>" +  + "</th></tr>";

function getBids() {
    var returnString = "";
    for(var i = 0; i < bid.length; i++) {
        returnString += "<tr><th>" + bid[i].name + "</th><th>" + bid[i].amount + "</th></tr>";
        if (i == bid.length-1) {
            return returnString;
        }
    }
}

function addBid(bid) {
    bids.add(bid);
}

Ext.define('seaturtle.view.bid', {
    extend: 'Ext.tab.Panel',
    xtype: 'bids',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'top',
        tabBar: {
            layout: {
                pack: 'center'
            } 
        },
        items: [
            {
                title: 'Save Our Sea Turtles',
                style: 'background-color:#FFF',
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [{
                        styleHtmlContent: true,
                        style: 'background-color:transparent',
                        html: [
<h3>Look for tracks</h3>
<p>Dawn is the best time for finding sea turtle tracks. The females have come ashore during the previous night, creating the distinctive &ldquo;tractor&rdquo; marks as they pull themselves across the sand in search of a nesting site.</p>
<p>But don&rsquo;t look for tracks near the water&rsquo;s edge. Find the mark of the last high tide and look between that &ldquo;guideline&rdquo; and the dry sand toward the dune line (or in Folly&rsquo;s case, toward the houses).</p>
<p>If you see tracks, take care to avoid walking on the crawl or on a suspected nest site, note your landmarks (e.g., what block are you in?, what&rsquo;s the address or size/color of the nearest house?, what walkovers are nearby?), and&nbsp;<strong>call Folly Beach Public Safety at 843-588-2433</strong>. They will contact the Turtle Crew to document and assess the crawl and determine if eggs were laid.</p>
<p>&nbsp;</p>
<h3>Clear the beach</h3>
<p>Remove all debris from the beach, especially plastics (e.g., cups, bottles, bags, fishing line). This will prevent them from being swept into the ocean by winds or high tides and mistaken as a food source by sea turtles, dolphin, and fish.</p>
<p>Remove furniture from the beach to prevent nesting loggerheads from becoming entangled in chairs.</p>
<p>Fill in holes created by &ldquo;kids&rdquo; at play. This will enable the tiny hatchlings to speed along their way to the ocean without getting trapped or disoriented. Watching a hatchling struggle to crawl out of a footprint increases awareness of their point of view and their obstacle-filled course.</p>
<p>&nbsp;</p>
<h3>Allow hatchlings to crawl</h3>
<p>If you&rsquo;re fortunate enough to see hatchlings emerge from their nest, you&rsquo;ll surely be tempted to pick them up and carry them to the ocean. Stop yourself! It&rsquo;s vital that the hatchlings &ldquo;imprint&rdquo; on their natal beach. When the female hatchlings mature, they&rsquo;ll return to the same beach to nest. If you see hatchlings crawling off-course, simply guide them on a path to the ocean and cheer them on.&nbsp;<strong>Report any hatchling emergence or crawl activity by calling 843-588-2433</strong>.</p>
<p>&nbsp;</p>
<h3>Practice &amp; Preach &ldquo;Lights out for Turtles!&rdquo;</h3>
<p>Artificial lights affect the nesting and hatching of sea turtles. Brightly lit beaches are a deterrent to nesting females and a deathtrap for hatchlings. Instead of being attracted by the natural light of the moon and starlight on the surf, hatchlings move toward the brighter beams of streetlights, porch &amp; deck lights, floodlights, interior lights, car headlights, flashlights, etc. They fail to find their way to the ocean quickly and become the victims of ghost crabs and gulls, or die from dehydration in the morning sun.&nbsp;<strong>Dark beaches are critical to sea turtle survival.</strong>&nbsp;Help educate others about the importance of &ldquo;lights out for sea turtles!&rdquo;</p>
<p>&nbsp;</p>
<h3>Report nest abuse</h3>
<p>Occasionally dogs, cats, racoons, and careless humans will dig into a nest. If you notice that a newly laid or a relocated nest has been disturbed in any way,&nbsp;<strong>please report it to Folly Beach Public Safety by calling 843-588-2433.</strong></p>
<p>Loggerhead turtles are a threatened species on the Endangered List and are protected by state and federal laws. Nests that have been relocated by licensed members of the Turtle Crew will be clearly marked<br />
by a bright orange sign and bright plastic tape wound around wooden stakes that are numbered and dated. Monitoring the nests during the hatchlings&rsquo; 45/60-day incubation period is an important part of Folly&rsquo;s conservation program.</p>
<p>&nbsp;</p>

<h3>Celebrate the species</h3>

<p>Sea turtles are ancient reptiles from the days of the dinosaurs. They are symbols of perseverance, longevity and eternity. Adult loggerheads are about 3 feet long and can weigh over 300 pounds. Females return after more than 20 years to nest on the beach where they were born, but males rarely come ashore.</p>

<p>During the May-October nesting season, females may nest 2-5 times and lay approximately 100 ping-pong ball sized eggs in each nest. Hatching occurs, usually en masse, after 45-60 days. Loggerhead hatchlings are dark brown, about 2 inches long, and weigh only ounces.</p>

<p>It&rsquo;s estimated that 1 out of 1000 hatchlings lives to reproduce. Their predators include ghost crabs, racoons, sea birds, fish, and especially human activities &mdash; egg and meat consumption, long-line fishing, TED-less trawling, careless boating, beachfront development.</p>

<p>Celebrate the species &hellip;&nbsp;<strong>participate in its survival.</strong></p>

                        ].join(''),
                        handler: function(event){
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Donate',
                        iconAlign: 'right',
                        width: 200,
                        margin:'0 0 0 -100px',
                        left:'50%',
                        position: 'absolute',
                        bottom: '20px',
                        height: '50px',
                        float: 'left',
                        handler: function(btn){
                             popup.showBy(btn);
                        }
                    }
                ]
            }
        ]
    }
});

var popup = new Ext.Panel({
    floating: true,
    modal: true,
    width: 600,
    height: 500,
    styleHtmlContent: true,
    html: [
            '<div style="margin-left:20px; margin-top:10px;">',
            '<form>',
            'First Name: <input type="text" style="width:400px;" name="FirstName"><br>',
            'Last Name:  <input type="text" style="width:401px;" name="LastName"><br>',
            'Phone:      <input type="text" style="width:430px;" name="Phone"><br>',
            'Email:      <input type="text" style="width:436px;" name="Email"><br>',
            'Zip Code:   <input type="text" style="width:412px;" name="ZipCode"><br><br>',
            'Credit Card Type:<br>',
            '<ul',
            '<li><input type="radio" name="issue" value="visa"> Visa<br></li>',
            '<li><input type="radio" name="issue" value="amex"> American Express<br></li>',
            'Credit Card Number:<br><input type="text" style="width:500px;" name="Name"><br><br>',
            'Amount:<br><input type="text" style="width:500px;" name="amount"><br><br>',
            '</form>',
            '</div>'
        ].join(''),
    dockedItems: [{
        xtype: 'toolbar',
        docked: 'bottom',
        
        items: [{
            text: 'Donate',
            handler: function(event, event2, event3, event4, event5){
                //debugger;
                //addBid({ name: event.FirstName, amount: event.amount });
                popup.hide();
            }
        },
        { xtype: 'spacer' },
        {
            text: 'Cancel',
            handler: function(){
                popup.hide();
            }
        },
        ]
    }]
});