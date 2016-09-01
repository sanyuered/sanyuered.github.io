'use strict';

require.config({ 
    urlArgs: "v=2060902"
});

require(['core'], function (core) {

    var pageName = core.url.getPageName();

    if (pageName == "/index.html" || pageName == "/") {

        var userInfo = core.data.session.get("userInfo");

        if (userInfo) {
            core.dom.get("#divWelcome").innerHTML = `Welcome ${userInfo.userName} !`;
        }
        else {
            core.url.navTo("login.html");
        }
    }
    else if (pageName == "/login.html") {

        core.dom.on("#btnSignIn", "click", function () {

            var txtUserName = core.dom.get("#txtUserName").value;

            if (txtUserName) {
                core.data.session.set("userInfo", {
                    "userName": txtUserName
                });

                core.url.navTo("index.html");
            }
            else {
                core.dom.get("#txtUserName").parentNode.parentNode.className = "row-form warning";
            }

        });
    }




});





