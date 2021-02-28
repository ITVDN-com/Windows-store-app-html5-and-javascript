// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                loaded();
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    function loaded() {
        WinJS.Navigation.addEventListener('navigated', navigated);
        button1.addEventListener("click", function () { WinJS.Navigation.navigate("/html/page1/page1.html"); });
        button2.addEventListener("click", function () { WinJS.Navigation.navigate("/html/page2/page2.html"); });
    }

    function navigated(e) {
        contentHost.innerHTML = "";
        // render - создает PageControl по указанному URI и устанавливает в указанный элемент DOM
        WinJS.UI.Pages.render(e.detail.location, contentHost);
    }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
