const nav = $('nav')
const labels = $('input[type=text]')

function setDark() {
    nav.addClass('bg-dark')
    labels.each(function () {
        this.style.backgroundColor = '#9e9e9e'
    })
    $('body').addClass('dark')
    localStorage.setItem('mode', 'dark')
}

function setLight() {
    nav.removeClass('bg-dark')
    labels.each(function () {
        this.style.backgroundColor = 'white'
    })
    $('body').removeClass('dark')
    localStorage.setItem('mode', 'light')
}

$('document').ready(function () {
    if (localStorage.getItem('mode') === 'light') {
        setLight()
    } else {
        $('#mode').prop('checked', true)
        setDark()
    }

    $('#cookie').on('click', function () {
        document.cookie = 'user=Nurmy; expires=Wed, 15 Jun 2022 23:59:59 GMT'
    })

    $('#mode').on('change', function () {
        if ($('nav').hasClass('bg-dark')) {
            setLight()
        } else {
            setDark()
        }
    })

    $('#info').on('submit', function (e) {
        e.preventDefault()
        $('#story').removeClass('hidden')
        $('#story').addClass('d-flex justify-content-center align-items-center')
        $('#reset').removeClass('hidden')
        $('#reset').addClass('btn')
        var persName = $('#persName').val()
        var charName = $('#charName').val()
        var adverb = $('#adverb').val()
        var adjective = $('#adjective').val()
        $('#story')
            .children()
            .first()
            .html(
                `Roses are red,<br>Violets are blue,
                <br><span>${charName}</span> is <span style="text-transform: lowercase">${adjective}</span>,
                <br><span>${persName}</span> <span style="text-transform: lowercase">${adverb}</span> wrote this`
            )
    })

    $('#reset').on('click', function (e) {
        e.preventDefault()
        $('#story').addClass('hidden')
        $('#story').removeClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').addClass('hidden')
        $('#reset').removeClass('btn')
        var persName = $('#persName').val('')
        var charName = $('#charName').val('')
        var adverb = $('#adverb').val('')
        var adjective = $('#adjective').val('')
    })
})
