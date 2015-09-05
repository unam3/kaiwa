var jade = require('@lukekarrys/jade-runtime');

var templatizer = {};

templatizer["includes"] = {};
templatizer["misc"] = {};
templatizer["pages"] = {};

// body.jade compiled template
templatizer["body"] = function tmpl_body() {
    return '<body><div id="updateBar"><p>Update available!</p><button class="primary upgrade">Upgrade</button></div><div id="wrapper"><aside id="menu"><section id="organization"><span id="orga_name"></span><a href="/" class="button secondary settings"><svg id="settingssvg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 25 25" height="25" width="25"><g transform="scale(0.4)"><path d="M37.418,34.3c-2.1-2.721-2.622-6.352-1.292-9.604c0.452-1.107,1.104-2.1,1.902-2.951 c-0.753-0.877-1.573-1.697-2.507-2.387l-2.609,1.408c-1.05-0.629-2.194-1.112-3.414-1.421l-0.845-2.833 c-0.75-0.112-1.512-0.188-2.287-0.188c-0.783,0-1.54,0.075-2.288,0.188l-0.851,2.833c-1.215,0.309-2.355,0.792-3.41,1.421 l-2.614-1.408c-1.229,0.912-2.318,2-3.228,3.231l1.404,2.612c-0.628,1.053-1.11,2.193-1.419,3.411l-2.832,0.849 c-0.114,0.75-0.187,1.508-0.187,2.287c0,0.778,0.073,1.537,0.187,2.286l2.832,0.848c0.309,1.22,0.791,2.36,1.419,3.413l-1.404,2.61 c0.909,1.231,1.999,2.321,3.228,3.231l2.614-1.406c1.055,0.628,2.195,1.11,3.41,1.42l0.851,2.832 c0.748,0.114,1.505,0.188,2.288,0.188c0.775,0,1.537-0.074,2.287-0.188l0.845-2.832c1.224-0.31,2.364-0.792,3.414-1.42l0.062,0.033 l2.045-3.02L37.418,34.3z M26.367,36.776c-2.777,0-5.027-2.253-5.027-5.027c0-2.775,2.25-5.028,5.027-5.028 c2.774,0,5.024,2.253,5.024,5.028C31.391,34.523,29.141,36.776,26.367,36.776z"></path><path d="M51.762,24.505l-1.125-0.459l-1.451,3.55c-0.814,1.993-2.832,3.054-4.505,2.37l-0.355-0.144 c-1.673-0.686-2.37-2.856-1.558-4.849l1.451-3.551l-1.125-0.46c-2.225,0.608-4.153,2.2-5.092,4.501 c-1.225,2.997-0.422,6.312,1.771,8.436l-2.958,6.812l-2.204,3.249l-0.007,2.281l5.275,2.154l1.593-1.633l0.7-3.861l2.901-6.836 c3.049,0.018,5.947-1.785,7.174-4.779C53.186,28.983,52.924,26.499,51.762,24.505z"></path></g></svg></a></section><div class="viewport"><section id="bookmarks"><h1>Rooms</h1><nav></nav><input type="text" placeholder="add a room" id="joinmuc" class="inline"/></section><section id="roster"><h1>Contacts</h1><ul id="contactrequests"></ul><nav></nav><input type="text" placeholder="add a contact" id="addcontact" class="inline"/></section></div><section id="kaiwaNotice">Powered by<a href="http://getkaiwa.com" target="_blank"><img src="/images/logo.png" alt="Kaiwa"/></a></section></aside><header id="topbar"><div id="connectionStatus"><p>You\'re currently&nbsp;<strong>disconnected</strong></p><button class="primary reconnect">Reconnect</button></div><div id="me"><img class="avatar"/><div><span class="name"></span><span contenteditable="true" spellcheck="false" class="status"></span></div></div></header><main id="pages"></main></div></body>';
};

// head.jade compiled template
templatizer["head"] = function tmpl_head() {
    return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato:400,700"/><link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>';
};

// includes\bareMessage.jade compiled template
templatizer["includes"]["bareMessage"] = function tmpl_includes_bareMessage(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(firstEl, message, messageDate, undefined) {
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attr("id", "chat" + message.cid, true, false) + jade.cls([ "message", messageClasses ], [ null, true ]) + "><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + '</div><p class="body">' + ((jade_interp = message.processedBody) == null ? "" : jade_interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            }
        }).call(this);
        buf.push("</section></div>");
    }).call(this, "firstEl" in locals_for_with ? locals_for_with.firstEl : typeof firstEl !== "undefined" ? firstEl : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined, "messageDate" in locals_for_with ? locals_for_with.messageDate : typeof messageDate !== "undefined" ? messageDate : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
    return buf.join("");
};

// includes\call.jade compiled template
templatizer["includes"]["call"] = function tmpl_includes_call() {
    return '<div class="call"><img class="callerAvatar"/><h1 class="caller"><span class="callerName"></span><span class="callerNumber"></span></h1><h2 class="callTime"></h2><div class="callActions"><button class="answer">Answer</button><button class="ignore">Ignore</button><button class="cancel">Cancel</button><button class="end">End</button><button class="mute">Mute</button><button class="unmute">Unmute</button></div></div>';
};

// includes\contactListItem.jade compiled template
templatizer["includes"]["contactListItem"] = function tmpl_includes_contactListItem(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(contact) {
        buf.push('<li class="contact joined"><div class="wrap"><i class="remove fa fa-times-circle"></i><i class="presence fa fa-circle"></i><div class="user"><img class="avatar"/><span class="name">' + jade.escape(null == (jade_interp = contact.displayName) ? "" : jade_interp) + '</span><span class="idleTime">' + jade.escape(null == (jade_interp = contact.idleSince) ? "" : jade_interp) + '</span></div><div class="unread">' + jade.escape(null == (jade_interp = contact.unreadCount) ? "" : jade_interp) + "</div></div></li>");
    }).call(this, "contact" in locals_for_with ? locals_for_with.contact : typeof contact !== "undefined" ? contact : undefined);
    return buf.join("");
};

// includes\contactListItemResource.jade compiled template
templatizer["includes"]["contactListItemResource"] = function tmpl_includes_contactListItemResource(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(resource) {
        buf.push('<li><p class="jid">' + jade.escape(null == (jade_interp = resource.jid) ? "" : jade_interp) + '</p><p class="status">' + jade.escape(null == (jade_interp = resource.status) ? "" : jade_interp) + "</p></li>");
    }).call(this, "resource" in locals_for_with ? locals_for_with.resource : typeof resource !== "undefined" ? resource : undefined);
    return buf.join("");
};

// includes\dayDivider.jade compiled template
templatizer["includes"]["dayDivider"] = function tmpl_includes_dayDivider(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(day_name) {
        buf.push('<li class="day_divider"><hr/><div class="day_divider_name">' + jade.escape((jade_interp = day_name) == null ? "" : jade_interp) + "</div></li>");
    }).call(this, "day_name" in locals_for_with ? locals_for_with.day_name : typeof day_name !== "undefined" ? day_name : undefined);
    return buf.join("");
};

// includes\contactRequest.jade compiled template
templatizer["includes"]["contactRequest"] = function tmpl_includes_contactRequest() {
    return '<li><div class="jid"></div><div class="response"><button class="primary small approve">Approve</button><button class="secondary small deny">Deny</button></div></li>';
};

// includes\embeds.jade compiled template
templatizer["includes"]["embeds"] = function tmpl_includes_embeds(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    if (locals.type === "photo") {
        buf.push('<section class="embed active"><a' + jade.attr("href", locals.original, true, false) + ' target="_blank" class="photo"><img' + jade.attr("width", locals.width, true, false) + jade.attr("height", locals.height, true, false) + jade.attr("src", locals.url, true, false) + jade.attr("alt", locals.title, true, false) + ' class="embedded"/>');
        if (locals.title || locals.description) {
            buf.push('<div class="description">');
            if (locals.title) {
                buf.push("<h3>" + jade.escape(null == (jade_interp = locals.title) ? "" : jade_interp) + "</h3>");
            }
            if (locals.description) {
                buf.push("<p>" + jade.escape(null == (jade_interp = locals.description) ? "" : jade_interp) + "</p>");
            }
            buf.push("</div>");
        }
        buf.push("</a></section>");
    } else if (locals.type === "video" && locals.thumbnail_url) {
        buf.push('<section class="embed active"><a' + jade.attr("href", locals.original, true, false) + ' target="_blank" class="preview"><img' + jade.attr("width", locals.width, true, false) + jade.attr("height", locals.height, true, false) + jade.attr("src", locals.thumbnail_url, true, false) + jade.attr("alt", locals.title, true, false) + ' class="embedded"/>');
        if (locals.title || locals.description) {
            buf.push('<div class="description">');
            if (locals.title) {
                buf.push("<h3>" + jade.escape(null == (jade_interp = locals.title) ? "" : jade_interp) + "</h3>");
            }
            if (locals.description) {
                buf.push("<p>" + jade.escape(null == (jade_interp = locals.description) ? "" : jade_interp) + "</p>");
            }
            buf.push("</div>");
        }
        buf.push("</a></section>");
    }
    return buf.join("");
};

// includes\message.jade compiled template
templatizer["includes"]["message"] = function tmpl_includes_message(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(message) {
        buf.push('<li><div class="message"><span class="timestamp">' + jade.escape(null == (jade_interp = message.timestamp) ? "" : jade_interp) + '</span><p class="body">' + jade.escape(null == (jade_interp = message.body) ? "" : jade_interp) + "</p></div></li>");
    }).call(this, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined);
    return buf.join("");
};

// includes\ldapUserItem.jade compiled template
templatizer["includes"]["ldapUserItem"] = function tmpl_includes_ldapUserItem() {
    return '<li class="ldapUser"><span class="name"></span><span class="delete fa fa-trash"></span><span class="fa fa-plus"></span><div class="wrap"><span class="inputLabel">Display Name</span><input type="text" class="displayName"/><span class="inputLabel">First Name</span><input type="text" class="givenName"/><span class="inputLabel">Last Name</span><input type="text" class="sn"/><span class="inputLabel">Email</span><input type="text" class="mail"/><button class="primary small changePassword">Change Password</button></div></li>';
};

// includes\messageGroup.jade compiled template
templatizer["includes"]["messageGroup"] = function tmpl_includes_messageGroup() {
    return "<li></li>";
};

// includes\mucListItem.jade compiled template
templatizer["includes"]["mucListItem"] = function tmpl_includes_mucListItem(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(contact) {
        buf.push('<li class="contact"><div class="wrap"><i class="remove fa fa-times-circle"></i><i class="join fa fa-sign-in"></i><div class="unread">' + jade.escape(null == (jade_interp = contact.unreadCount) ? "" : jade_interp) + '</div><span class="name">' + jade.escape(null == (jade_interp = contact.displayName) ? "" : jade_interp) + "</span></div></li>");
    }).call(this, "contact" in locals_for_with ? locals_for_with.contact : typeof contact !== "undefined" ? contact : undefined);
    return buf.join("");
};

// includes\mucBareMessage.jade compiled template
templatizer["includes"]["mucBareMessage"] = function tmpl_includes_mucBareMessage(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(firstEl, message, messageDate, undefined) {
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attr("id", "chat" + message.cid, true, false) + jade.cls([ "message", messageClasses ], [ null, true ]) + "><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + '</div><p class="body">' + ((jade_interp = message.processedBody) == null ? "" : jade_interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            }
        }).call(this);
        buf.push("</section></div>");
    }).call(this, "firstEl" in locals_for_with ? locals_for_with.firstEl : typeof firstEl !== "undefined" ? firstEl : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined, "messageDate" in locals_for_with ? locals_for_with.messageDate : typeof messageDate !== "undefined" ? messageDate : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
    return buf.join("");
};

// includes\mucWrappedMessage.jade compiled template
templatizer["includes"]["mucWrappedMessage"] = function tmpl_includes_mucWrappedMessage(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(firstEl, message, messageDate, undefined) {
        buf.push('<li><div class="sender"><a href="#" class="messageAvatar"><img' + jade.attr("src", message.sender.getAvatar(message.from.full), true, false) + jade.attr("alt", message.from.resource, true, false) + ' data-placement="below"/></a></div><div class="messageWrapper"><div class="message_header"><div class="name">' + jade.escape((jade_interp = message.sender.getName(message.from.full)) == null ? "" : jade_interp) + '</div><div class="nickname">' + jade.escape((jade_interp = message.sender.getNickname(message.from.full)) == null ? "" : jade_interp) + "</div><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + "</div></div>");
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attr("id", "chat" + message.cid, true, false) + jade.cls([ "message", messageClasses ], [ null, true ]) + "><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + '</div><p class="body">' + ((jade_interp = message.processedBody) == null ? "" : jade_interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            }
        }).call(this);
        buf.push("</section></div></div></li>");
    }).call(this, "firstEl" in locals_for_with ? locals_for_with.firstEl : typeof firstEl !== "undefined" ? firstEl : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined, "messageDate" in locals_for_with ? locals_for_with.messageDate : typeof messageDate !== "undefined" ? messageDate : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
    return buf.join("");
};

// includes\mucRosterItem.jade compiled template
templatizer["includes"]["mucRosterItem"] = function tmpl_includes_mucRosterItem() {
    return '<li class="online"><div class="name"></div></li>';
};

// includes\wrappedMessage.jade compiled template
templatizer["includes"]["wrappedMessage"] = function tmpl_includes_wrappedMessage(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(firstEl, message, messageDate, undefined) {
        buf.push('<li><div class="sender"><a href="#" class="messageAvatar"><img' + jade.attr("src", message.sender.avatar, true, false) + jade.attr("alt", message.sender.displayName, true, false) + ' data-placement="below"/></a></div><div class="messageWrapper"><div class="message_header"><div class="name">' + jade.escape((jade_interp = message.sender.displayName) == null ? "" : jade_interp) + "</div><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + "</div></div>");
        var messageClasses = message.classList;
        if (firstEl) {
            messageClasses += " first";
        }
        buf.push("<div" + jade.attr("id", "chat" + message.cid, true, false) + jade.cls([ "message", messageClasses ], [ null, true ]) + "><div" + jade.attr("title", messageDate.format("{Dow}, {MM}/{dd}/{yyyy} - {h}:{mm} {Tt}"), true, false) + ' class="date">' + jade.escape((jade_interp = messageDate.format("{h}:{mm} {tt}")) == null ? "" : jade_interp) + '</div><p class="body">' + ((jade_interp = message.processedBody) == null ? "" : jade_interp) + "</p>");
        var urls = message.urls;
        buf.push('<section class="embeds">');
        (function() {
            var $$obj = urls;
            if ("number" == typeof $$obj.length) {
                for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            } else {
                var $$l = 0;
                for (var $index in $$obj) {
                    $$l++;
                    var item = $$obj[$index];
                    if (item.source == "body") {
                        buf.push('<section class="embed hidden"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    } else {
                        buf.push('<section class="embed"><a' + jade.attr("href", item.href, true, false) + ' class="source">' + jade.escape(null == (jade_interp = item.desc) ? "" : jade_interp) + "</a></section>");
                    }
                }
            }
        }).call(this);
        buf.push("</section></div></div></li>");
    }).call(this, "firstEl" in locals_for_with ? locals_for_with.firstEl : typeof firstEl !== "undefined" ? firstEl : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined, "messageDate" in locals_for_with ? locals_for_with.messageDate : typeof messageDate !== "undefined" ? messageDate : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
    return buf.join("");
};

// misc\growlMessage.jade compiled template
templatizer["misc"]["growlMessage"] = function tmpl_misc_growlMessage(locals) {
    var buf = [];
    var jade_mixins = {};
    var jade_interp;
    var locals_for_with = locals || {};
    (function(description, icon, title) {
        buf.push('<div class="growlMessage">');
        if (icon) {
            buf.push("<img" + jade.attr("src", icon, true, false) + ' height="30" width="30"/>');
        }
        if (title) {
            buf.push("<h1>" + jade.escape(null == (jade_interp = title) ? "" : jade_interp) + "</h1>");
        }
        if (description) {
            buf.push("<p>" + jade.escape(null == (jade_interp = description) ? "" : jade_interp) + "</p>");
        }
        buf.push("</div>");
    }).call(this, "description" in locals_for_with ? locals_for_with.description : typeof description !== "undefined" ? description : undefined, "icon" in locals_for_with ? locals_for_with.icon : typeof icon !== "undefined" ? icon : undefined, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined);
    return buf.join("");
};

// pages\chat.jade compiled template
templatizer["pages"]["chat"] = function tmpl_pages_chat() {
    return '<section class="page chat"><section class="conversation"><header><div class="title"><span class="name"></span><i class="user_presence fa fa-circle"></i><span class="status"></span></div><div class="tzo"></div></header><ul class="messages scroll-container"></ul><div class="activeCall"><div class="container"><video autoplay="autoplay" class="remote"></video><video autoplay="autoplay" muted="muted" class="local"></video><aside class="button-wrap"><button class="accept primary">Accept</button><button class="end secondary">End</button><div class="button-group outlined"><button class="mute">Mute</button><button class="unmute">Unmute</button></div></aside></div></div><div class="chatBox"><div class="contactState"></div><form class="formwrap"><textarea name="chatInput" type="text" placeholder="Send a message..." autocomplete="off"></textarea></form><button class="primary small call">Call</button></div></section></section>';
};

// pages\groupchat.jade compiled template
templatizer["pages"]["groupchat"] = function tmpl_pages_groupchat() {
    return '<section class="page chat"><section class="group conversation"><header class="online"><div class="title"><span class="name"></span><i class="channel_actions fa fa-comments-o"></i><span contenteditable="true" spellcheck="false" class="status"></span></div></header><ul class="messages"></ul><a id="members_toggle"><i class="fa fa-user"></i><span id="members_toggle_count"></span></a><ul class="groupRoster"></ul><div class="chatBox"><ul class="autoComplete"></ul><form class="formwrap"><textarea name="chatInput" type="text" placeholder="Send a message..." autocomplete="off"></textarea></form></div></section></section>';
};

// pages\settings.jade compiled template
templatizer["pages"]["settings"] = function tmpl_pages_settings() {
    return '<section class="page main"><h1 id="title">Settings</h1><div id="avatarChanger"><h4>Change Avatar</h4><div class="uploadRegion"><p>Drag and drop a new avatar here</p><img/><form><input id="uploader" type="file"/></form></div></div><div><h4>Desktop Integration</h4><button class="enableAlerts">Enable alerts</button><button class="primary installFirefox">Install app</button><button class="soundNotifs">sound notifications</button></div><div id="ldapSettings"><h4>LDAP settings</h4><ul id="ldapUsers"></ul><input type="text" placeholder="add a ldap user" id="newLdapUser"/></div><div><button class="disconnect">Disconnect</button><button class="primary logout">Logout</button></div></section>';
};

// pages\signin.jade compiled template
templatizer["pages"]["signin"] = function tmpl_pages_signin() {
    return '<section class="page signin"><div id="loginForm"><form><label>JID:<input type="text" id="jid" placeholder="you@aweso.me"/></label><label>Password:<input type="password" id="password"/></label><label>WebSocket URL:<input type="text" id="wsURL" placeholder="wss://aweso.me:5281/xmpp-websocket"/></label><input type="submit" value="Connect" class="button primary"/></form></div></section>';
};


module.exports = templatizer;
