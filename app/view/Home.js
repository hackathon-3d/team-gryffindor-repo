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
                title: 'Hatchlings',
                iconCls: 'turtle',
                xtype: 'hatchlings'
            },
            {
                title: 'Bids',
                iconCls: 'money',
                xtype: 'bids'
            },
            {
                title: "F.A.Q's",
                iconCls: 'help',
                xtype: 'faq'
            },
        ]
    },

    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
});