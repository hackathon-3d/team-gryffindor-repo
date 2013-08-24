Ext.define('seaturtle.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            mainMenuView: 'home'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            'button[action=logOffButton]': {
            	tap: 'onSignOffCommand'
        	}
        }
    },

    onSignOffCommand: function() {
    	Ext.Viewport.remove(Ext.Viewport.getActiveItem());  
		Ext.Viewport.add(Ext.create('HRapp.view.Login'));
	},

    onSignInCommand: function (view, username, password) {

        var me = this,
        loginView = me.getLoginView();

        if (username == 'harrypotter' && password == '1234') {
            loginView.destroy();
            Ext.Viewport.add(Ext.create('HRapp.view.Home'));
        } else {
            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
  		}
    }
});