'use strict';

define(function () {
    var core = core || {};
    core.data = {};
    core.dom = {};
    core.url = {};
    core.data.local = {};
    core.data.session = {};

    core.data.local.set = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    core.data.local.get = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    core.data.local.clear = function () {
        window.localStorage.clear();
    }

    core.data.session.set = function (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    core.data.session.get = function (key) {
        return JSON.parse(window.sessionStorage.getItem(key));
    }

    core.data.session.clear = function () {
        window.sessionStorage.clear();
    }

    core.dom.get = function (element) {
        return document.querySelector(element);
    }

    core.dom.getAll = function (element) {
        return document.querySelectorAll(element);
    }

    core.dom.on = function (element, eventName, callback) {
        var target = core.dom.get(element);

        if (target != null) {

            target.addEventListener(eventName, callback);
        }

    }

    core.dom.off = function (element, eventName) {
        var target = core.dom.get(element);
        if (target != null) {
            core.dom.get(element).removeEventListener(eventName);
        }
    }

    core.url.navTo = function (targetUrl) {
        window.location = targetUrl;
    }

    core.url.getPageName = function () {
        var href = window.location.href;
        return href.substr(href.lastIndexOf("/"));
    }

    return core;
});


