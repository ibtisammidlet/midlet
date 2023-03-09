function hideElementsWithoutKeywords(keywords,element) {
    $(element).each(function() {
        var containsKeyword = false;
        var divText = $(this).text().toLowerCase();
        $.each(keywords, function(index, keyword) {
            if (divText.indexOf(keyword.toLowerCase()) >= 0) {
                containsKeyword = true;
                return false; // exit the loop
            }
        });
        if (!containsKeyword) {
            $(this).hide();
        }
    });
}
