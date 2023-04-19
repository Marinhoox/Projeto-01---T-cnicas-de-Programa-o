function geraArrayDeUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}
function validaArrayURL(arrayLinks){
    return geraArrayDeUrl(arrayLinks)
}
export default validaArrayURL;
