"use strict";

module.exports = function (client, stanzas) {
    var types = stanzas.utils;

    var PushNotification = stanzas.define({
        name: 'pushNotification',
        namespace: 'urn:xmpp:push:0',
        element: 'push',
        fields: {
            body: types.subText('urn:xmpp:push:0', 'body')
        }
    });

    stanzas.withMessage(function (Message) {
        stanzas.extend(Message, PushNotification);
    });

    var RegisterPush = stanzas.define({
        name: 'registerPush',
        namespace: 'urn:xmpp:push:0',
        element: 'register',
        fields: {
            service: types.text()
        }
    });

    var UnregisterPush = stanzas.define({
        name: 'unregisterPush',
        namespace: 'urn:xmpp:push:0',
        element: 'unregister',
        fields: {
            service: types.text()
        }
    });

    var OtalkRegister = stanzas.define({
        name: 'otalkRegister',
        namespace: 'http://otalk.im/protocol/push',
        element: 'register',
        fields: {
            deviceID: types.text()
        }
    });

    stanzas.withIq(function (Iq) {
        stanzas.extend(Iq, RegisterPush);
        stanzas.extend(Iq, UnregisterPush);
        stanzas.extend(Iq, OtalkRegister);
    });

    client.registerPushService = function (jid, cb) {
        return client.sendIq({
            type: 'set',
            registerPush: {
                service: jid
            }
        }, cb);
    };

    client.getPushServices = function (cb) {
        return client.getDiscoItems('', 'urn:xmpp:push', cb);
    };

    client.unregisterPushService = function (jid, cb) {
        return client.sendIq({
            type: 'set',
            unregisterPush: {
                service: jid
            }
        }, cb);
    };

    client.otalkRegister = function (deviceID, cb) {
        return client.sendIq({
            type: 'set',
            to: 'push@push.otalk.im/prod',
            otalkRegister: {
                deviceID: deviceID
            }
        }, cb);
    };
};
