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
                title: ' ',
                style: 'background-color:#FFF',
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [{
                        styleHtmlContent: true,
                        style: '',
                        html: ["<div>",
                        "<table border=\"1\" cellpadding=\"3\">",
                        "<thead>",
                            "<th>Name</th>",
                            "<th>Amount</th>",
                        "</thead>",
                        "<tbody>",
                        "<div id=\"rows\"></div>",
                        "</tbody></table>",
                        "</div>"].join(''),
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
                        position: 'relative',
                        bottom: '20px',
                        height: '50px',
                        float: 'center',
                        handler: function(btn){
                             popup.showBy(btn);
                        }
                    },
                    // {
                    //     xtype: 'button',
                    //     text: 'Bid',
                    //     iconAlign: 'right',
                    //     width: 200,
                    //     margin:'0 0 0 -100px',
                    //     left:'50%',
                    //     position: 'relative',
                    //     bottom: '20px',
                    //     height: '50px',
                    //     float: 'center',
                    //     handler: function(btn){
                    //          //formPanel.show();
                    //     }
                    // }
                ]
            }
        ]
    }
});

// var formPanel = new Ext.Create('Ext.form.Panel', {
//     fullscreen: true,

//     items: [{
//         xtype: 'fieldset',
//         items: [
//             {
//                 xtype: 'textfield',
//                 name : 'name',
//                 label: 'Name'
//             },
//             {
//                 xtype: 'emailfield',
//                 name : 'email',
//                 label: 'Email'
//             },
//             {
//                 xtype: 'passwordfield',
//                 name : 'password',
//                 label: 'Password'
//             }
//         ]
//     }]
// });

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