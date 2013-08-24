Ext.define('seaturtle.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype:'home',
    requires: [
        'Ext.TitleBar',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.NestedList'
    ],

    config: {
        refs: {
            nav: '#mainNav'
        },

        tabBarPosition: 'bottom',
        id: 'mainNav',
        items: [
        {
            xtype: 'nestedlist',
            title: 'Home',
            iconCls: 'home',
            displayField: 'title',
            store: {
                    type: 'tree',

                    fields: [
                        'title', 'link', 'author', 'contentSnippet', 'content',
                        {name: 'leaf', defaultValue: true}
                    ],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://tinyurl.com/mbcdnvo',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },
                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    this.getDetailCard().setHtml(post.get('content'));
                    }
                }
        },
            // {
            //     title: 'Home',
            //     iconCls: 'home',
            //     styleHtmlContent: true,
            //     scrollable: true,
            //     layout: {
            //         type: 'vbox',
            //         align: 'center'
            //     },
            //     items: [{
            //         xtype: 'titlebar',
            //         cls:'my-titlebar',
            //         title: 'Save Our Sea Turtles',
            //         docked: 'top'
            //     }]
            // },
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
            }
        ]
    },

    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    },

    // initialize: function() {
    // }
});