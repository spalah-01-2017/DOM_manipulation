(function(global) {
    'use strict';

    // Функция-конструктор принмает в качестве аргумента узел документа
    // Пример: 
    // var nc = new NodeCounter(document.querySelector('.counter'));
    function NodeCounter(node) {
        //ваша реализация
    }


    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#Определение_геттеров_и_сеттеров
    // Ознакомьтесь с геттерами и сеттерами по ссылке выше и реализуйте геттер и сеттер numValue, отображающий число из узла документа, переданного в функцию конструктор
    // Пример: 
    // nc.numValue; //0
    // nc.numValue = 5; //this.node.textContent === '5'
    Object.defineProperty(/*ваша реализация*/);

    // принимает в качестве аргумента число и добавляет его к числу из узла
    // Пример:
    // nc.plus(3); //this.node.textContent === '8'
    NodeCounter.prototype.plus = function(n) {
        //ваша реализация
    };

    // принимает в качестве аргумента число и вычитает его из числа в узле
    // Пример:
    // nc.minus(2); //this.node.textContent === '6'
    NodeCounter.prototype.minus = function(n) {
        //ваша реализация
    };

    // увеличивет значение в узле на 1
    // Пример:
    // nc.inc(); //this.node.textContent === '7'
    NodeCounter.prototype.inc = function() {
        //ваша реализация
    };

    // уменьшает значение в узле на 1
    // Пример:
    // nc.dec(); //this.node.textContent === '6'
    NodeCounter.prototype.dec = function() {
        //ваша реализация
    };

    // устанавливает переданное значение в качестве значения узла
    // Пример:
    // nc.set(9999); //this.node.textContent === '9999'
    NodeCounter.prototype.set = function(n) {
        //ваша реализация
    };

    // выполняется при создании инстанса; инициализирует узел значением
    // Пример:
    // var countNode = document.querySelector('.counter');
    // countNode.textContent = '';
    // var nc2 = new NodeCounter(countNode);
    // countNode.textContent === '0'; //true
    NodeCounter.prototype.init = function() {
        //ваша реализация
    };

    global.NodeCounter = NodeCounter;
})(this);