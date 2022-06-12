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
        $('#result').removeClass('hidden')
        $('#result').addClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').removeClass('hidden')
        $('#reset').addClass('btn')
        var width = $('#width').val()
        var height = $('#height').val()
        var colorsNum = Number($('#colorsNum').val())

        var bitDepth = Math.ceil(Math.log(colorsNum) / Math.log(2))
        $('#result')
            .children()
            .first()
            .html(
                `Image size: <span>${Math.round(
                    (colorsNum * 3 + (width * height * bitDepth) / 8) / 1024
                )}KB</span>`
            )
    })

    $('#reset').on('click', function (e) {
        e.preventDefault()
        $('#result').addClass('hidden')
        $('#result').removeClass(
            'd-flex justify-content-center align-items-center'
        )
        $('#reset').addClass('hidden')
        $('#reset').removeClass('btn')
        var persName = $('#width').val('')
        var charName = $('#height').val('')
        var adverb = $('#colorsNum').val('')
    })
})
