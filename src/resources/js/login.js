document.getElementById('login-form').addEventListener('submit', function (e) {
    function value(id) {
        return document.getElementById(id).value;
    }

    var jid = value('jid');
    if (SERVER_CONFIG.domain && jid.indexOf('@') == -1)
         jid += "@" + SERVER_CONFIG.domain;
    var password = value('password');
    var connURL = SERVER_CONFIG.wss ? SERVER_CONFIG.wss : value('connURL');

    var transport;
    var wsURL = '';
    var boshURL = '';
    if (connURL.indexOf('http') === 0) {
        boshURL = connURL;
        transport = 'bosh';
    } else if (connURL.indexOf('ws') === 0) {
        wsURL = connURL;
        transport = 'websocket';
    }

    localStorage.config = JSON.stringify({
        jid: jid,
        server: jid.slice(jid.indexOf('@') + 1),
        wsURL: wsURL,
        boshURL: boshURL,
        transport: transport,
        credentials: {
            password: password
        }
    });

    window.location = '/';

    e.preventDefault();
});
