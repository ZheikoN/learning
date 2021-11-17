// https://pastebin.com/raw/gGccfsV3
let movieListings = [];

$(function () {
    initJquery();
});

function initJquery() {

    SetupMovieLoader()

}

function SetupMovieLoader() {

    $('#messagePanel').hide();

    $('#btnLoadMovies').on('click', function () {

        const url = 'https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=3e6e7e1145a6fb001eec57a9e7e0422dbaf79ffa';

        $.getJSON(url, function (jsondata) {
            movieListings = jsondata;
           // RenderMovieData(jsondata);
            RenderMovieDataAsTable(jsondata);
        })

    })
}


function RenderMovieDataAsTable(movieListing) {

    //console.log(movieListing);
    htmlString = [];
 
    // start of a list
    for (const movie of movieListing) {
        htmlString.push("<tr>")
       
        const { number, contract_name, name, address, position, ...rest } = movie;

        const btnDetails= `<button class="btn btn-success" onclick="renderMovieDetail(${address})">Details</button>`;
        htmlString.push(`<td>${number}</td><td>${contract_name}</td><td>${name}</td><td>${address}</td><td><a href="https://www.google.com/search?q=${position.lat},${position.lng}" target="_blank">Click for location on map</a></td>`);
     

        htmlString.push('</tr>')
    }

    $('tbody#movieBody').append(htmlString.join(" "));
   // WriteToMessagePanel(htmlString.join(" "));

}
function RenderMovieData(movieListing) {

    //console.log(movieListing);
    htmlString = [];
    htmlString.push("<ol>")
    // start of a list
    for (const movie of movieListing) {

        // const title = movie.title;
        // const year = movie.year;
        // const director = movie.director;

        // Object destructuring

        const { number, contract_name, name, address, position, ...rest } = movie;

        htmlString.push(`<li>${number} : ${contract_name}`);
        htmlString.push('<ol>')


        for (const castMember of cast.split(',')) {
            htmlString.push(`<li>${castMember}</li>`);

        }
        htmlString.push('</ol>')

        htmlString.push('</li>')
    }

    htmlString.push("</ol>")
    WriteToMessagePanel(htmlString.join(" "));

}

function WriteToMessagePanel(msg) {
  
    $('#messagePanel').show().html(msg);
}

function renderMovieDetail (movieId) {

    const movieDetail = movieListings.find(x=> x.address === movieId);
    console.log(movieDetail);
    htmlString = [];
    htmlString.push("<tr>")
       
    const { number, contract_name, name, address, position, ...rest } = movieDetail;

    const btnDetails = `<button class="btn btn-success" onlick="renderMovieDetail(${address})">details</button>`
    
    htmlString.push(`<td>${number}</td><td>${contract_name}</td><td>${director}</td>`);
 

    htmlString.push('</tr>')


    $('tbody#movieDetailBody').html(htmlString.join(" "));
   console.log(`rendering detail for movie ${movieId}`) 
}

