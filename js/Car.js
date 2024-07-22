

export class Car {
    //int fuelTank;
    //string brand = '';
    //getter ir setter
    constructor(marke, modelis, spalva) {
        this.brand = marke;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = 45;
        this.fuelbegin = 20
        this.fuel = 10;
        this.engineOn = false;
        this.speed = 0;
        this.highway = 0;
        this.highwaytohell = 0;
    }
    baisusVairavimas() {
        this.fuel = 15;
        this.fuelbegin = 30;
        return `KAs tave mokino vairuoti? Jūsų suvartojamo kuro normos bus įsibėgėjus - ${this.fuelbegin} l/100km ir važiuojant - ${this.fuel} l/100km.`
    }
    grazusVairavimas() {
        this.fuel = 8;
        this.fuelbegin = 16;
        return `Šaunu, jūsų suvartojamo kuro normos bus įsibėgėjus - ${this.fuelbegin} l/100km ir važiuojant - ${this.fuel} l/100km.`
    }
    isibegejimoAtstumas(km) {
        if (typeof km != 'number' && km != NaN) {
            return 'Kilometrus reikia įvesti skaičiaus formatu.'
        }
        if (this.fuelTank === 0) {
            return 'Jūs negalite važiuoti, nėra kuro.';
        }
        if (km === 0) {
            return 'Lipkite lauk, jei nenorite važiuoti';
        }
        if ((this.fuelTank / this.fuel * 100) < km) {
            return `Apgalestaujame. Jūsų įsibėgėjimui nepanaka kuro. Turite kuro tik ${this.fuelTank / this.fuel * 100} km.`
        }
        if ((this.fuelTank / this.fuel * 100) > km) {
            this.highway = km;
            const naujasBakas = this.fuelTank - (km / 100 * this.fuel);
            this.fuelTank = naujasBakas;
            return `Įsibėgėsite per ${km} km. Po kelionės Jums liks ${naujasBakas} litrų kuro.`;
        }
    }
    kelione(km) {
        if (typeof km != 'number' && km != NaN) {
            return 'Kilometrus reikia įvesti skaičiaus formatu.'
        }
        if (this.fuelTank === 0) {
            return 'Jūs negalite važiuoti, nėra kuro.';
        }
        if (km === 0) {
            return 'Lipkite lauk, jei nenorite važiuoti';
        }
        if ((this.fuelTank / this.fuel * 100) < km) {
            return `Apgalestaujame. Jūsų kelionei nepanaka kuro. Turite kuro tik ${this.fuelTank / this.fuel * 100} km.`
        }
        if ((this.fuelTank / this.fuel * 100) > km) {
            this.highwaytohell = km;
            const naujasBakas = this.fuelTank - (km / 100 * this.fuel);
            this.fuelTank = Math.round(naujasBakas);
            return `Smagios ${km} km atstumo kelionės. Po kelionės Jums liks ${naujasBakas} litrų kuro.`;
        }
    }

    ijungtiVarikli() {
        if (this.speed > 0) {
            return 'Tu jau vairuoji, negali įjungti variklio...'
        }

        if (this.engineOn === false) {
            this.engineOn = true;
            return 'Variklis sėkmingai įjungtas.';
        } else {
            return 'A, tu blondinė?  Įjungto variklio negalima įjungti.';
        }

    }
    isjungtiVarikli() {
        if (this.speed > 0) {
            return 'Tu vairuoji, pradžioje turi sustoti...'
        }
        if (this.engineOn === true) {
            this.engineOn = false;
            return 'Variklis išjungtas sėkmingai.'
        } else {
            return 'Ne, nu rimtai, nematai, kad išjungtas variklis?  Išjungto variklio negalima išjungti.'
        }
    }
    isibegeti() {

        if (this.engineOn === false) {
            return 'Variklį įsijungk....'
        }
        if (this.speed === 0) {
            this.speed = 20;
            this.fuel = this.fuelbegin;
            return `Sėkmingai įsibėgėjote, jūsų greitis pasiekė ${this.speed} km/h, o kuro suvartojimas 100 km yra ${this.fuel} l.`
        }
        if (this.highway < 0.000000001) {
            return 'Prašome nurodyti kelionėje kiek km Jums prireiks įsibėgėti...'
        } else {
            return 'Jau pradėjai įsibėgėti... Į kelią žiūrėk.';
        }

    }
    vaziuoti() {

        if (this.engineOn === false) {
            return 'Variklį įsijungk... Įsibėgėk... Tada galėsi važiuoti.';
        }
        if (this.speed === 0) {
            return 'Pradžioje turi įsibėgėti...';
        }

        if (this.highwaytohell < 0.000000001) {
            this.highway = 0;
            return 'Prašome nurodyti kelionėje kiek kilometrų važiuosite...'
        }
        if (this.speed === 20) {
            this.speed = 50;
            this.fuel = 10;
            return `Sėkmingai pradėjote važiuoti, jūsų greitis pasiekė ${this.speed} km/h.`;

        }
        else {
            return 'Vairuok, žioplį.';
        }
    }
    sustoti() {
        if (this.speed > 0) {
            this.speed = 0;
            this.highwaytohell = 0;
            this.highway = 0;
            return 'Sėkmingai sustojote.'
        } else {
            return 'Negali, žiopliuk, sustoti, kai jau stovi...'
        }
    }
    kiekkuro() {
        if (this.fuelTank >= 0) {
            const kiekis = 45 - this.fuelTank;
            return `Gali įpilti : ${kiekis} l, jūsų bake yra ${this.fuelTank} l.`;
        }

    }
    uzpilimas(litrai) {
        if (typeof litrai != 'number' && litrai != NaN) {
            return 'Litrus reikia įvesti skaičiaus formatu.'
        }
        if (this.speed > 0) {
            return 'Tu juokauji? Negali pilti kuro kai važiuoji... Sustok... Išjunk variklį...'
        }
        if (this.engineOn === true) {
            return 'Išjunk variklį prieš pilant kurą...'
        }
        if (litrai < 0) {
            return 'Iš bako ištraukti kuro negalima... '
        }
        if (litrai === 0) {
            return 'Jei nenorite pilti, keliaukite.'
        }
        if (this.fuelTank === 45) {
            return 'Kuro bakas pilnas, daugiau neįpilsi..';
        }
        if (litrai > 45 - this.fuelTank) {
            const likutis = 45 - this.fuelTank
            this.fuelTank = 45;
            return `Jūsų norimas kiekis - ${litrai} yra daugiau nei telpa, tad Jums bus užpiltas pilnas bakas - likę trūkstami  ${likutis} l. `
        } else {
            const buvo = this.fuelTank
            this.fuelTank = buvo + litrai
            return `Jūsų bake dabar yra: ${buvo} l.`
        }
    }
}
