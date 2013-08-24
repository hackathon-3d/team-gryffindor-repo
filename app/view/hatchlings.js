Ext.define("seaturtle.view.hatchlings", {
    extend: 'Ext.Panel',
    xtype: 'hatchlings',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        items: [
            {
                cls:'my-titlebar',
                docked: 'top',
                xtype: 'titlebar',
                title: "Hatchling News",
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