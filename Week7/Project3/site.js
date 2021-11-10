// https://pastebin.com/raw/gGccfsV3

$(function () {

    initJquery();

});

function initJquery() {

    SetupMovieLoader()

}

function SetupMovieLoader() {

    $('#messagePanel').hide();

    $('#btnLoadMovies').on('click', function () {

        const url = 'movies.json';
        $.getJSON(url, function (data) {

            RenderMovieData(data);
        })
    })
}

function RenderMovieData(movieListing) {
    console.log(movieListing)

    htmlString = [];
    htmlString.push("<ol>");
    for (const movie of movieListing) {

        const { title, year, director, id, cast, ...rest } = movie;

        htmlString.push(`<li>${title} : ${year}`);
        htmlString.push('<ol>');

        for (const castMember of cast.split(',')) {

            htmlString.push(`<li>${castMember}</li>`);

        }
        htmlString.push('</ol>');
        htmlString.push('</li>');

    }

    WriteToMessagePanel(htmlString.join(" "));
    // htmlString.push("</ol>");
    // htmlString.push('</li>');
}


function WriteToMessagePanel(msg) {

    $('#messagePanel').show().html(msg);
}