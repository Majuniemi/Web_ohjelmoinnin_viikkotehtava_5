document.querySelector('#dice').addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6) + 1
    const osoite = document.querySelector('img').src = '/Viikkotehtävä 5/img/' + randomNum + '.png'
    //alert("Heitetty, luku on " + randomNum)
    //console.log(osoite)
})
