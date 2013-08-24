Ext.define("seaturtle.view.bid", {
    extend: 'Ext.Panel',
    xtype: 'bids',
    requires: [
        'Ext.TitleBar'
    ],
    scroll: 'vertical',
    config: {
        items: [{
                cls:'my-titlebar',
                docked: 'top',
                xtype: 'titlebar',
                title: "Save Our Sea Turtles",
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                }
            },{
                height:  '100%',
                layout: 'vbox',
                scrollable: 'vertical',
                html: [
                "<div style='padding:20px 20px 20px 50px';><text align='center'>",
                "<p><text-align=center>Our latest sea turtle nest hatched August 24th on Folly Beach.<br>",
                "125 baby sea turtles made thier way to the ocean.<br>",
                "Our highest donar will be notified and invited to join<br>",
                "Folly Beach Sea Turtle Patrol to hand release the straglers<br>",
                "on August 27th.<br><br>Start the bidding!</p>"

                ].join(''),
                handler: function(event){
                }
            },{
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
            }]

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