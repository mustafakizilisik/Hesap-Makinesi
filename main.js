function create() {
    document.getElementsByTagName('body')[0].innerHTML = '\
    <div id="divAna">\
    <input type="text" id="hesapAlani"/>\
    <div>\
    <div id="div1">\
    <div onclick="C()">ON/C</div>\
    <div id="rakamlar" onclick="sayiYaz(7)">7</div>\
    <div id="rakamlar" onclick="sayiYaz(4)">4</div>\
    <div id="rakamlar" onclick="sayiYaz(1)">1</div>\
    <div id="fonksiyonlar" onclick="artiVeyaEksi()">+/-</div>\
    </div>\
    <div id="div2">\
    <div onclick="CE()">CE</div>\
    <div id="rakamlar" onclick="sayiYaz(8)">8</div>\
    <div id="rakamlar" onclick="sayiYaz(5)">5</div>\
    <div id="rakamlar" onclick="sayiYaz(2)">2</div>\
    <div id="rakamlar" onclick="sayiYaz(0)">0</div>\
    </div>\
    <div id="div3">\
    <div onclick="hafizaAlma()">MRC</div>\
    <div id="rakamlar" onclick="sayiYaz(9)">9</div>\
    <div id="rakamlar" onclick="sayiYaz(6)">6</div>\
    <div id="rakamlar" onclick="sayiYaz(3)">3</div>\
    <div onclick="virgul()">,</div>\
    </div>\
    <div id="div4">\
    <div onclick="hafizaCikar()">M-</div>\
    <div id="fonksiyonlar" onclick="yuzde()">%</div>\
    <div id="fonksiyonlar" onclick="carpma()"">x</div>\
    <div id="divTopla" onclick="toplama()">+</div>\
    </div>\
    <div id="div5">\
    <div onclick="hafizaTopla()">M+</div>\
    <div id="fonksiyonlar" onclick="karekokAlma()">√</div>\
    <div id="fonksiyonlar" onclick="bolme()">÷</div>\
    <div id="fonksiyonlar" onclick="cikarma()">-</div>\
    <div id="fonksiyonlar" onclick="esittir()">=</div>\
    </div>\
    </div>\
    </div>\
    </div>\
    '
}

function sayiYaz(deger) {

    document.getElementById('hesapAlani').value = document.getElementById('hesapAlani').value + deger;
}

var geciciDeger;
var hafizaDeger;
var karekok;
var islem;
var virgulsayisi = 0;
var sonuc;

function toplama() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {
        islem = toplama;
        if (geciciDeger != undefined) {

            document.getElementById('hesapAlani').value = geciciDeger + parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }
        else {

            geciciDeger = parseFloat(document.getElementById('hesapAlani').value);
            document.getElementById('hesapAlani').value = '';
        }
    }
}

function cikarma() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {
        islem = cikarma;
        if (geciciDeger != undefined) {

            document.getElementById('hesapAlani').value = geciciDeger - parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }
        else {

            geciciDeger = parseFloat(document.getElementById('hesapAlani').value);
            document.getElementById('hesapAlani').value = '';
        }
    }
}

function carpma() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {
        islem = carpma;
        if (geciciDeger != undefined) {

            document.getElementById('hesapAlani').value = geciciDeger * parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }
        else {

            geciciDeger = parseFloat(document.getElementById('hesapAlani').value);
            document.getElementById('hesapAlani').value = '';
        }
    }
}

function bolme() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {
        islem = bolme;
        if (geciciDeger != undefined) {

            document.getElementById('hesapAlani').value = geciciDeger / parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }
        else {

            geciciDeger = parseFloat(document.getElementById('hesapAlani').value);
            document.getElementById('hesapAlani').value = '';
        }
    }
}

function C() {

    document.getElementById('hesapAlani').value = '';
    geciciDeger = undefined;
    hafizaDeger = undefined;
    virgulsayisi = 0;
}

function CE() {

    document.getElementById('hesapAlani').value = '';
    virgulsayisi = 0;
}

function artiVeyaEksi() {

    document.getElementById('hesapAlani').value *= -1;
    virgulsayisi = 0;
}

function virgul() {

    if (document.getElementById('hesapAlani').value != '') {

        if (virgulsayisi < 1) {
            document.getElementById('hesapAlani').value += ".";
            virgulsayisi++;
        }
    }
}

function yuzde() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {

        islem = yuzde
        if (geciciDeger != undefined) {

            document.getElementById('hesapAlani').value = (geciciDeger * parseFloat(document.getElementById('hesapAlani').value)) / 100;
            geciciDeger = undefined;
        }
        else {

            geciciDeger = parseFloat(document.getElementById('hesapAlani').value);
            document.getElementById('hesapAlani').value = '';
        }
    }
}

function hafizaAlma() {

    document.getElementById('hesapAlani').value = parseFloat(document.getElementById('hesapAlani').value);
    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {

        hafizaDeger = undefined;
        hafizaDeger = document.getElementById('hesapAlani').value;
        document.getElementById('hesapAlani').value = '';
    }
}

function hafizaTopla() {

    if (document.getElementById('hesapAlani').value != '') {
        if (hafizaDeger != undefined) {
            document.getElementById('hesapAlani').value = parseFloat(document.getElementById('hesapAlani').value) + parseFloat(hafizaDeger);
        }
    }
}

function hafizaCikar() {

    if (document.getElementById('hesapAlani').value != '') {
        if (hafizaDeger != undefined) {
            document.getElementById('hesapAlani').value = parseFloat(document.getElementById('hesapAlani').value) - parseFloat(hafizaDeger);
        }
    }
}

function karekokAlma() {

    virgulsayisi = 0;
    if (document.getElementById('hesapAlani').value != '') {

        karekok = Math.sqrt(document.getElementById('hesapAlani').value);
        document.getElementById('hesapAlani').value = karekok;
    }
}

function esittir() {

    if (geciciDeger != undefined) {

        virgulsayisi = 0;
        if (islem == toplama) {

            document.getElementById('hesapAlani').value = geciciDeger + parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }

        else if (islem == cikarma) {

            document.getElementById('hesapAlani').value = geciciDeger - parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }

        else if (islem == carpma) {

            document.getElementById('hesapAlani').value = geciciDeger * parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }

        else if (islem == bolme) {

            document.getElementById('hesapAlani').value = geciciDeger / parseFloat(document.getElementById('hesapAlani').value);
            geciciDeger = undefined;
        }

        else if (islem == yuzde) {

            document.getElementById('hesapAlani').value = (geciciDeger * parseFloat(document.getElementById('hesapAlani').value)) / 100;
            geciciDeger = undefined;
        }

    }
}

