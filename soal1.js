function aldi (awal, akhir){
for (y = awal; y < akhir; y++) {
    for (x = awal; x < akhir; x++) {
        if (x == 9 - (y - 1)) {
            hasil=x*2-2
            document.write(hasil)
        } else {
            document.write ('_')
        }
    }
    document.write('<br/>')
}
}
aldi(1,10)