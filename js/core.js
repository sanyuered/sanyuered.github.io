'use strict';

define(function(){
    var core = {};
    core.url = {};
    core.dom = {};

    core.url.navTo = function(targetUrl){
        window.location = targetUrl;
    }

    core.dom.on = function(element,eventName,callback){
        document.querySelector(element).addEventListener(eventName,callback);
    }

    core.dom.off = function(element,eventName){
        document.querySelector(element).removeEventListener(eventName);
    }

    return core;
});


