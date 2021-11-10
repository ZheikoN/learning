$(function () {

    initJqueryFunctions();

});

function initJqueryFunctions() {

    isLoaded();
    applyStriped();
    $('#btnToggle').on('click', toggle)

    $('#btnShowDate').on('click', function () {

        console.log('#btnShowDate clicked');

        const currentDate = new Date();
        const shortDate = currentDate.toDateString();

        $('p')[0].innerHTML = `<em>Hello there! ${shortDate}</em>`;
    })
    $('#btnHideFirst').on('click', function () {

        console.log('#btnHideFirst clicked');
        $('p:first').hide();
    })

    $('#btnShowFirst').on('click', function () {

        console.log('#btnShowFirst Clicked');
        $('p:first').show();
    })

    $('#btnAppend').on('click', function () {

        $("<p>this is new item 1</p>").insertAfter('p:last');
        $("<p>this is new item 2</p>").insertAfter('p:last');
        $("<p>this is new item 3</p>").insertAfter('p:last');
    })
    
    $('#btnStyle').on('click', function () {

        $('p:last').css('font-style','italic');
    })

}

function toggle() {

    $('body div p').toggleClass('striped');
}

function applyStriped() {

    // $(target).dostuff(with options)
    $('p.second').addClass('striped');

}



function isLoaded() {

    console.log(`jquery goodness is loaded`);

}