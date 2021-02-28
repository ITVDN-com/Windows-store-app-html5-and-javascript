// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var coursesList;
    var rating;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
            } else {
            }

            // processAll - метод проходит по всем DOM элементам, ищет элементы с атрибутом data-win-control
            // и инициализирует все контролы.
            args.setPromise(WinJS.UI.processAll().then(function () { loaded(); }));
        }
    };

    function loaded() {

        // winControl - объект представляющий WinJS элемент управления
        rating = RatingControl.winControl;
        coursesList = CoursesListView.winControl;

        rating.addEventListener('change', change);
        SubmitButton.addEventListener('click', submit);
        coursesList.addEventListener("iteminvoked", iteminvoked);
    }

    function iteminvoked(eventInfo) {
        var selected = DataExample.itemList.getAt(eventInfo.detail.itemIndex);
        RatingSpan.innerHTML = selected.course;
        CourseBoxImage.src = selected.image;
        CourseBoxImage.style.visibility = "visible";
    }

    function change(e) {
        var current = DataExample.itemList.getAt(coursesList.currentItem.index);
        RatingSpan.innerHTML = "Курсу " + current.course + " поставлена оценка "
            + rating.userRating + " (" + NameTextBox.value + ")";
    }

    function submit() {
        var message = Windows.UI.Popups.MessageDialog('Спасибо за оценку курса!');
        message.commands.append(new Windows.UI.Popups.UICommand('Продолжить', function (command) {
            clear();
        }));
        message.showAsync();
    }

    function clear() {
        RatingSpan.innerHTML = "";
        NameTextBox.value = "";
        rating.userRating = 0;
        CourseBoxImage.style.visibility = "hidden";
    }

    app.oncheckpoint = function (args) {
    };

    app.start();
})();
