//查询及展示相关内容
var showArticle = function (data) {
    var html = "";
    data.forEach(function (article) {
        html +=
            `
        <tr class="warning">
            <td>${article.articleName}</td>
            <td>${article.author}</td>
            <td>${timestampToTime(article.date)}</td>
            <td><a href="./detail.html?id=${article.id}" class="btn btn-primary">查看详情</button></td>
        </tr>
        `;

    })
    return html;
}
var articleList;
var getAllArticle = function () {
    $.get(requestUrl + "/article", function (data) {
        articleList = data;
        var allArticle = showArticle(data);
        $("#article_table").html(allArticle);
    });
}

var search = function () {
    var searchText = $("#search_text").val();
    if (articleList) {
        var filterArticle = articleList.filter(item => item.articleName.indexOf(searchText) != -1);
        var searchArticleResult = showArticle(filterArticle);
        $("#article_table").html(searchArticleResult);
    } else {
        alert("未找到相关内容！");
    }
}
$("#search").click(function(){
    search();
});