Ext.define("seaturtle.view.faq", {
    extend: 'Ext.Panel',
    xtype: 'faq',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        items: [
            {
                cls:'my-titlebar',
                docked: 'top',
                xtype: 'titlebar',
                title: "F.A.Q's",
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