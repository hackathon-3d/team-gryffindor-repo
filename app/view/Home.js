Ext.define('seaturtle.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype:'home',
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [{
                    xtype: 'titlebar',
                    cls:'my-titlebar',
                    title: 'S.O.S',
                    docked: 'top'
                }]
            },
            {
                title: 'Hatchling News',
                iconCls: 'team',
                xtype: 'hatchlings'
            },
            {
                title: 'Bids',
                iconCls: 'warning_dotted',
                xtype: 'bids'
            },
            {
                title: "F.A.Q's",
                iconCls: 'chart2',
                xtype: 'faq'
            },
        ]
    },

    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
});