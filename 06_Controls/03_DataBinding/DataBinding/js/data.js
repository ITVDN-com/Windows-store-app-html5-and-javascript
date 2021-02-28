(function () {
    'use strict';

    // Массив данных
    var coursesArray = [
        { course: 'ASP.NET MVC', image: '/images/aspnet-mvc.jpeg' },
        { course: 'Entity Framework', image: '/images/ef.jpeg' },
        { course: 'JavaScript', image: '/images/js.jpeg' },
        { course: 'SQL', image: '/images/sql.jpeg' },
        { course: 'C#', image: '/images/vs.jpeg' },
        { course: 'WPF', image: '/images/wpf.jpeg' }
    ];

    var dataList = new WinJS.Binding.List(coursesArray);

    // Создание пространства имен с именем DataExample и определение в нем объекта itemList
    WinJS.Namespace.define("DataExample", { itemList: dataList });

})();


