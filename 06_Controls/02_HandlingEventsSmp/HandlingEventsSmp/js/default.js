// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var rating;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

            } else {
            }
            // processAll - метод проходит по всем DOM элементам, ищет элементы с атрибутом data-win-control
            // и инициализирует все контролы.
            args.setPromise(WinJS.UI.processAll().then(function () {
                loaded();
            }));
        }
    };

    function loaded() {
        // winControl - объект представляющий WinJS элемент управления
        rating = RaitingControl.winControl;
        rating.addEventListener('change', change);
        SubmitButton.addEventListener('click', submit);
    }

    function change(e) {
        RaitingSpan.innerHTML = "Курсу " + CourseSelect.value + " поставлена оценка "
            + rating.userRating + " (" + NameTextBox.value + ")";
    }

    function submit() {
        var message = Windows.UI.Popups.MessageDialog('Спасибо за оценку курса!');
        message.commands.append(new Windows.UI.Popups.UICommand('Продолжить', function (comand) {
            clear();
        }));
        message.showAsync();
    }

    function clear() {
        RaitingSpan.innerHTML = "";
        NameTextBox.value = "";
        CourseSelect.value = "";
        rating.userRating = 0;
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
