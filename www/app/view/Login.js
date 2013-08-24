Ext.define('seaturtle.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    alias: "widget.loginview",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.util.DelayedTask'],
    config: {
        title: 'Login',
        items: [
            {
                html: ['<div align="center"><img src="resources/images/lock.png" width="300px"/><br></div>',
                    ].join('')
            },
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                title: '',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                padding: '10px',
                ui: 'confirm',
                text: 'Log In'
            },
            {
                html: '<div align="center"><br><i><font color="#f38411"><font size="2">Making it easier to visualize and analyze workforce data to support decision making</font></i></font></div>'
            }
         ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]
    },
    onLogInButtonTap: function () {

        var me = this,
            usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
            label = me.down('#signInFailedLabel'),
            username = usernameField.getValue(),
            password = passwordField.getValue();

        label.hide();

        var task = Ext.create('Ext.util.DelayedTask', function () {

            label.setHtml('');

            me.fireEvent('signInCommand', me, username, password);

            usernameField.setValue('');
            passwordField.setValue('');
        });

        task.delay(500);

    },
    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});