/*global indexedDB*/
"use strict";

var AvatarStorage = require('./avatars');
var RosterStorage = require('./roster');
var DiscoStorage = require('./disco');
var ArchiveStorage = require('./archive');
var ProfileStorage = require('./profile');

function Storage() {
    this.db = null;
    this.init = [];

    this.avatars = new AvatarStorage(this);
    this.roster = new RosterStorage(this);
    this.disco = new DiscoStorage(this);
    this.archive = new ArchiveStorage(this);
    this.profiles = new ProfileStorage(this);
}

Storage.prototype = {
    constructor: {
        value: Storage
    },
    version: 3,
    open: function (cb) {
        cb = cb || function () {};

        var self = this;

        var initialize = function (indexedDB, cb) {
            var request = indexedDB.open('datastorage', self.version);

            request.onsuccess = function (e) {
                console.log('request.onsuccess');
                self.db = e.target.result;
                cb(true);
            };
            request.onupgradeneeded = function (e) {
                var db = e.target.result;

                if (!db.objectStoreNames.contains) {
                    // Patch fakeIndexedDB's implementation according to
                    // https://github.com/dumbmatter/fakeIndexedDB/issues/4
                    db.objectStoreNames.contains = function (obj) {
                        return this.indexOf(obj) !== -1;
                    }
                }

                self.avatars.setup(db);
                self.roster.setup(db);
                self.disco.setup(db);
                self.archive.setup(db);
                self.profiles.setup(db);
            };
            request.onerror = function () {
                console.log('request.onerror');
                cb(false);
            };
        };

        initialize(indexedDB, function (success) {
            if (success) {
                cb(true);
            } else {
                // Fallback to fakeIndexedDB:
                console.warn('indexedDB initialization failed, activating fallback');

                var async = require('async');
                window.setImmediate = async.setImmediate; // fix for fake-indexeddb dependency quirk
                var fakeIndexedDB = require('fake-indexeddb');
                initialize(fakeIndexedDB, cb);
            }
        });
    }
};

module.exports = Storage;
