Ext.define("seaturtle.view.bid", {
    extend: 'Ext.Panel',
    xtype: 'bids',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        items: [
            {
                cls:'my-titlebar',
                docked: 'top',
                xtype: 'titlebar',
                title: 'Bids',
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                }
            },{


                html: [
                	"<p style='padding:20px 0px 0px 50px';>Test</p>"
                ].join('')


            }
        ]
    }
});