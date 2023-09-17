var countrySateCityinfo= {
    northern: {
        musanze: {
            Broome: ["6725", "6318", "6701"],
            Coolgardie: ["6429", "6432"],
        },
        gicumbi: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        burera: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        gakenke: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"]
        },
        rurindo: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        }

    },
    southern: {
        kamonyi: {
            Broome: ["6725", "6318", "6701"],
            Coolgardie: ["6429", "6432"],
        },
        muhanga: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        ruhango: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        nyanza: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        huye: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        gisagara: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        nyamagabe: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
    },
    western: {
       nyabihu: {
            Broome: ["6725", "6318", "6701"],
            Coolgardie: ["6429", "6432"],
        },
        rubavu: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        karongi: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        nyamasheke: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        }
    },
    earstern: {
        rwamagana: {
            Munich: ["80331", "80333", "80335"],
            Numemberg: ["90402", "90403", "90404"],
        },
        rustiro: {
            Frankfurt: ["60306", "60309", "60310"],
            Surat: ["55246", "55247", "55248", "55249"],
        },
        ngoma: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        kirehe: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        bugesera: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
        nyagatare: {
            Hobart: ["7000", "7520"],
            Launceston: ["7250", "7334"],
            Burnie: ["7320", "7315"],
        },
    }
    
}

window.onload = function(){
    const selectprovince= document.getElementById('province'),
        selectdistrict = document.getElementById('district'),
        selectgarage = document.getElementById('garage'),
    
        selects = document.querySelectorAll('select')

        selectdistrict.disabled = true
        selectgarage.disabled = true
       

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let province in countrySateCityinfo){
            // console.log(country);
            selectprovince.options[selectprovince.options.length] = new Option(province, province)
        }


        // country change
        selectprovince.onchange = (e) =>{
            
            selectdistrict.disabled = false
            selectgarage.disabled = true
            

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectdistrict.length = 1
            selectgarage.length = 1
            

            for(let district in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectdistrict.options[selectdistrict.options.length] = new Option(district, district)
            }
        }

        // state change
        selectdistrict.onchange = (e) =>{
            selectgarage.disabled = false
        

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectgarage.length = 1
            

            for(let garage in countrySateCityinfo[selectprovince.value][e.target.value]){
                // console.log(city);
                selectgarage.options[selectgarage.options.length] = new Option(garage, garage)
            }
        }

        
            
            selectgarage.length = 1

            let garage = countrySateCityinfo[selectprovince.value][selectdistrict.value][e.target.value]
            
            for(let i=0; i<garage.length; i++){
                selectgarage.options[selectgarage.options.length] = new Option(garage[i], garage[i])
            }
        }






