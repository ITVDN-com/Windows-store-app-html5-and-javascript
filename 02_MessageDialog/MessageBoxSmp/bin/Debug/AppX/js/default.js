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

                // Получение кнопки и span по атрибуту id.
                var btn = document.getElementById('ShowDialogButton');
                var span = OutputSpan; //document.getElementById('OutputSpan');

                // Привязка обработчика на событие click.
                btn.addEventListener('click', function () {

                    // Создание диалогового окна с контентом и заголовком.
                    var message = Windows.UI.Popups.MessageDialog(
                        'Hello world from message box!',
                        'MessageBox Sample');

                    // Добавление кнопок на диалоговое окно.
                    message.commands.append(new Windows.UI.Popups.UICommand('Command 1', function (command) {
                        span.innerHTML = "Command 1 button pressed!"
                    }));

                    message.commands.append(new Windows.UI.Popups.UICommand('Command 2', function (command) {
                        span.innerHTML = "Command 2 button pressed!"
                    }));

                    // запуск диалогового окна.
                    message.showAsync();
                });
            } else {
                
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
    };

    app.start();
})();
