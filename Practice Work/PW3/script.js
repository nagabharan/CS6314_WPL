function loadData() {

    $.ajax({

        url: "books.xml",
        dataType: "xml",
        success: function(data) {
            alert("file is loaded");
            $(data).find('book').each(
                function() {

                    var manyAuthors = "";
                    var title = $(this).find('title').text();
                    var year = $(this).find('year').text();
                    var price = $(this).find('price').text();
                    var category = $(this).attr('category');

                    $(this).find('author').each(function() {
                        manyAuthors = manyAuthors + $(this).text() + ", ";
                    });

                    var bookXMLData = "<tr><td>" + title + "</td><td>" + manyAuthors + "</td><td>" + year + "</td><td>" + price + "</td><td>" + category + "</td></tr>";

                    $("#myTable1").append(bookXMLData);
                });

        },
        error: function() {
            alert("error loading file");
        }
    });
}