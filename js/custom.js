$(document).ready(function () {
    $('#tolang-en').on('click touchend', function () {
        translang('en');
    })

    $('#tolang-cn').on('click touchend', function () {
        translang('cn');
    })
})

function translang(tolang) {
    var url = window.location.href
    console.log(url);
    if (tolang == 'en') {
        console.log(' to english')
        if (url.search("googtrans\/en\/zh-CN") != -1) {
            url = url.replace('\/cn\/','/en/');
            url = url.replace("googtrans\/en\/zh-CN", 'googtrans/en/en');
            console.log('to url  ' + url);
        }
    }

    if (tolang == 'cn') {
        console.log(' to chinese')
        if (url.search("googtrans\/en\/en") != -1) {
            url = url.replace('\/en\/','/cn/');
            url = url.replace("googtrans\/en\/en", 'googtrans/en/zh-CN')
            console.log('to url ' + url)
        }     
    }

    window.location.href = url;
            // location.reload(true);
}