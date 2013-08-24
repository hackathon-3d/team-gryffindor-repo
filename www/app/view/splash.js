Ext.define("seaturtle.view.splash", {
    extend: 'Ext.Panel',
	xtype: 'splash',
requires: [
        'Ext.TitleBar'
    ],
    scroll: 'vertical',
    config: {
        items: [
            {
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
                height:  1200,
                layout: 'vbox',
                scrollable: 'vertical',
		html: '<br><br><div align="center"><iframe src="resources/images/Seaturtle1.animproj_export/index.html" style="border: 20px solid #CBCGD6; -moz-border-radius: 5px;-webkit-border-radius: 5px">'


            }
        ]
    }
});