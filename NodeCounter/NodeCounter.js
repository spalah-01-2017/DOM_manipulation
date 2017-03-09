(function(global) {
    'use strict';

    // Функция-конструктор принмает в качестве аргумента узел документа
    // Пример: 
    // var nc = new NodeCounter(document.querySelector('.counter'));
    function NodeCounter(node) {
        this.node=node;
        this.init();
    }


    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects#Определение_геттеров_и_сеттеров
    // Ознакомьтесь с геттерами и сеттерами по ссылке выше и реализуйте геттер и сеттер numValue, отображающий число из узла документа, переданного в функцию конструктор
    // Пример: 
    // nc.numValue; //0
    // nc.numValue = 5; //this.node.textContent === '5'
    Object.defineProperty(NodeCounter.prototype, 'numValue', {
        get: function () {
            return this.node.textContent;
        },
        set: function (arg) {
            this.node.textContent = arg;
        }
    });

    // принимает в качестве аргумента число и добавляет его к числу из узла
    // Пример:
    // nc.plus(3); //this.node.textContent === '8'
    NodeCounter.prototype.plus = function(n) {
        this.node.textContent = +this.node.textContent + n;
    };

    // принимает в качестве аргумента число и вычитает его из числа в узле
    // Пример:
    // nc.minus(2); //this.node.textContent === '6'
    NodeCounter.prototype.minus = function(n) {
        this.node.textContent = +this.node.textContent - n;
    };

    // увеличивет значение в узле на 1
    // Пример:
    // nc.inc(); //this.node.textContent === '7'
    NodeCounter.prototype.inc = function() {
        this.node.textContent++;
    };

    // уменьшает значение в узле на 1
    // Пример:
    // nc.dec(); //this.node.textContent === '6'
    NodeCounter.prototype.dec = function() {
        this.node.textContent--;
    };

    // устанавливает переданное значение в качестве значения узла
    // Пример:
    // nc.set(9999); //this.node.textContent === '9999'
    NodeCounter.prototype.set = function(n) {
        this.node.textContent = n;
    };

    // выполняется при создании инстанса; инициализирует узел значением
    // Пример:
    // var countNode = document.querySelector('.counter');
    // countNode.textContent = '';
    // var nc2 = new NodeCounter(countNode);
    // countNode.textContent === '0'; //true
    NodeCounter.prototype.init = function() {
        this.node.textContent = '0';
    };

    global.NodeCounter = NodeCounter;
})(this);
