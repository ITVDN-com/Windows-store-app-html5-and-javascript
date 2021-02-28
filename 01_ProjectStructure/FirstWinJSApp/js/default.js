// Введение в тип проетка Blank template
// http://go.microsoft.com/fwlink/?LinkId=232509

// (function () { ... })(); - module pattern для того что бы не добавлять новые переменные в глобальную область видимости.
(function () {
    "use strict"; // Strict Mode - возможность ECMAScript 5, которая накладывает ряд ограничений на JavaScript отгораживая разработчика от опасных частей языка.
    
    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: Приложение только что запущено. Здесь необходимо произвести инициализацию приложения
            } else {
                // TODO: Приложение было восстановлено из состояния Suspended. Здесь необходимо востановить ранее сохраненное состояние.
            } 

            // WinJS.UI.processAll() - создание элементов управления, которые объявлены в HTML разметке и содержат атрибут data-win-control
            // args.setPromise() - указывает Windows что Splash Screen следует убрать только когда вернется метод переданный в качечтве аргумента.
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: Событие происходит когда данное приложение должно перейти в состояние 'suspended'.
        // В данном обработчике сохраняется вся информация, которая должна быть доступна при выходе из состояния 'suspended'
        // В данном методе можно использовать объект WinJS.Application.sessionState, который будет автоматически сериализоваться и
        // десириализоваться при смене состояния приложения.
        // Если необходимо завершить асинхронную операцию перед тем как приложение перейдет в 'suspended' состояние, нужно
        // вызвать метод args.setPromise()
    };

    // Запуск приложения.
    app.start();
})();

