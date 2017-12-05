/**
 * Created by 16427 on 2017/12/4.
 */
window.fn = {};

window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
};

window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
        .then(menu.close.bind(menu));
};

ons.ready(function() {
    var pullHook = document.getElementById('pull-hook');

    pullHook.addEventListener('changestate',function(event) {
        var message = '';

        switch (event.state) {
            case 'initial':
                message = 'Pull to refresh';
                break;
            case 'preaction':
                message = 'Release';
                break;
            case 'action':
                message = 'Loading...';
                break;
        }

        pullHook.innerHTML = message;
    });

    pullHook.onAction = function(done) {
        setTimeout(done, 1000);
    };
});
//
// var mycars = [
//     {name:"j",price:109},
//     {name:"r",price:09},
//     {name:"q",price:19},
// ]
// console.log(mycars[0].name)
 document.getElementsByTagName('ons-list-item')[0].innerHTML='123'