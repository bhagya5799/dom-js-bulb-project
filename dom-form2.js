
function switchoff(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchstatus").textContent="Switch OFF"
    document.getElementById("btnswitchoff").style.backgroundColor="gray";
    document.getElementById("btnswitchon").style.backgroundColor="green"

}



function switchon(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchstatus").textContent="Switch ON"
    document.getElementById("btnswitchon").style.backgroundColor="gray"
    document.getElementById("btnswitchoff").style.backgroundColor="red"



}