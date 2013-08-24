Ext.define('seaturtle.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            nav: '#mainNav'
        }
    },

    addLogoutButton: function() {
        this.getNav().add({
                title: 'New Test',
                iconCls: 'turtle',
                xtype: 'hatchlings'
        });
    }
});