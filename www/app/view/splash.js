Ext.define("seaturtle.view.splash", {
    extend: 'Ext.Panel',
	xtype: 'splash',
requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [
            {
                cls:'my-titlebar',
                docked: 'top',
                xtype: 'titlebar',
                title: "",
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                }
            },{
				html: '<br><br><div align="center"><iframe src="resources/images/seaturtleanim/index.html" style="border: 20px solid #CBCGD6; -moz-border-radius: 5px;-webkit-border-radius: 5px">'


            }
        ]
    }
});