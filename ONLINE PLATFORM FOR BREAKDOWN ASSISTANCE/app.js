

// window.onload = function(){
//     const selectclient= document.getElementById('client'),
//         selectmechanic= document.getElementById('mechanic'),
//         selectmember = document.getElementById('member'),
        

//         selectclient.disabled = true
//         selectmechanic.disabled = true
//         selectmember.disabled = true

//         selects.forEach(select => {
//             if(select.disabled == true){
//                 select.style.cursor = "auto"
//             }
//             else{
//                 select.style.cursor = "pointer"
//             }
//         })

//         for(let country in countrySateCityinfo){
//             // console.log(country);
//             selectCountry.options[selectCountry.options.length] = new Option(country, country)
//         }


//         // country change
//         selectCountry.onchange = (e) =>{
            
//             selectState.disabled = false
//             selectCity.disabled = true
//             selectZip.disabled = true

//             selects.forEach(select => {
//                 if(select.disabled == true){
//                     select.style.cursor = "auto"
//                 }
//                 else{
//                     select.style.cursor = "pointer"
//                 }
//             })

//             selectState.length = 1
//             selectCity.length = 1
//             selectZip.length = 1

//             for(let state in countrySateCityinfo[e.target.value]){
//                 // console.log(state);
//                 selectState.options[selectState.options.length] = new Option(state, state)
//             }
//         }

//         // state change
//         selectState.onchange = (e) =>{
//             selectCity.disabled = false
//             selectZip.disabled = true

//             selects.forEach(select => {
//                 if(select.disabled == true){
//                     select.style.cursor = "auto"
//                 }
//                 else{
//                     select.style.cursor = "pointer"
//                 }
//             })

//             selectCity.length = 1
//             selectZip.length = 1

//             for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
//                 // console.log(city);
//                 selectCity.options[selectCity.options.length] = new Option(city, city)
//             }
//         }

//         // change city
//         selectCity.onchange = (e) =>{
//             selectZip.disabled = false

//             selects.forEach(select => {
//                 if(select.disabled == true){
//                     select.style.cursor = "auto"
//                 }
//                 else{
//                     select.style.cursor = "pointer"
//                 }
//             })
            
//             selectZip.length = 1

//             let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
            
//             for(let i=0; i<zips.length; i++){
//                 selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
//             }
//         }
// }



const choose = document.getElementById("choose");
const clientdepent = document.getElementById("clientdepent");
const mechanicdepent = document.getElementById("mechanicdepent");

choose.addEventListener("change",function(){
    const selectvariable =choose.value;

    if(selectvariable ==="mechanic"){
        mechanicdepent.style.display ="block";
        clientdepent.style.display="none";


    }
    else{
        mechanicdepent.style.display ="none";
        clientdepent.style.display="block";

    }
})





