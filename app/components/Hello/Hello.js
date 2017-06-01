import './Hello.less'

module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world,today i am runing webpack';

    return element;
};
