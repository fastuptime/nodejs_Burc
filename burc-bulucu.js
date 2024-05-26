const readline = require('readline');

const burclar = [
    { ad: "Koç",      baslangic: { ay: 3, gun: 21 }, bitis: { ay: 4, gun: 19 } },
    { ad: "Boğa",     baslangic: { ay: 4, gun: 20 }, bitis: { ay: 5, gun: 20 } },
    { ad: "İkizler",  baslangic: { ay: 5, gun: 21 }, bitis: { ay: 6, gun: 20 } },
    { ad: "Yengeç",   baslangic: { ay: 6, gun: 21 }, bitis: { ay: 7, gun: 22 } },
    { ad: "Aslan",    baslangic: { ay: 7, gun: 23 }, bitis: { ay: 8, gun: 22 } },
    { ad: "Başak",    baslangic: { ay: 8, gun: 23 }, bitis: { ay: 9, gun: 22 } },
    { ad: "Terazi",   baslangic: { ay: 9, gun: 23 }, bitis: { ay: 10, gun: 22 } },
    { ad: "Akrep",    baslangic: { ay: 10, gun: 23 }, bitis: { ay: 11, gun: 21 } },
    { ad: "Yay",      baslangic: { ay: 11, gun: 22 }, bitis: { ay: 12, gun: 21 } },
    { ad: "Oğlak",    baslangic: { ay: 12, gun: 22 }, bitis: { ay: 1, gun: 19 } },
    { ad: "Kova",     baslangic: { ay: 1, gun: 20 }, bitis: { ay: 2, gun: 18 } },
    { ad: "Balık",    baslangic: { ay: 2, gun: 19 }, bitis: { ay: 3, gun: 20 } }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function burcBul(gun, ay) {
    for (const burc of burclar) {
        if ((ay === burc.baslangic.ay && gun >= burc.baslangic.gun) || 
            (ay === burc.bitis.ay && gun <= burc.bitis.gun) ||
            (ay > burc.baslangic.ay && ay < burc.bitis.ay) || 
            (burc.baslangic.ay > burc.bitis.ay && (ay < burc.bitis.ay || ay > burc.baslangic.ay))) {
            return burc.ad;
        }
    }
    return "Bilinmiyor";
}

rl.question('Doğum gününüzü giriniz (GG): ', (gun) => {
    rl.question('Doğum ayınızı giriniz (AA): ', (ay) => {
        const burc = burcBul(parseInt(gun), parseInt(ay));
        console.log(`Burcunuz: ${burc}`);
        rl.close();
    });
});
