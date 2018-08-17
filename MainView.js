var arr;
var flag 					= false;
var Observable				= require("FuseJS/Observable");
var LocalNotify 			= require("FuseJS/LocalNotifications");
var Storage 				= require("FuseJS/Storage");
var data 					= Observable();
var notify 					= Observable();

var asuCalcValidation		= Observable(true);
var vmCalcValidation 		= Observable(true);
var cdeCalcValidation 		= Observable(true);
var sdgCalcValidation 		= Observable(true);
var sloCalcValidation 		= Observable(true);
var km4CalcValidation 		= Observable(true);
var encCalcValidation 		= Observable(true);

/* ASUNCION */
var asuOptionSel			= Observable('compra');
var asuMonedaSel 			= Observable('guarani');
var asuGuarani 				= Observable();
var asuDolar 				= Observable();
var asuEuro 				= Observable();
var asuPeso 				= Observable();
var asuReal 				= Observable();

/* VillaMorra */
var vmOptionSel 			= Observable('compra');
var vmMonedaSel 			= Observable('guarani');
var vmGuarani 				= Observable();
var vmDolar 				= Observable();
var vmEuro 					= Observable();
var vmPeso 					= Observable();
var vmReal 					= Observable();

/* Ciudad del Este */
var cdeOptionSel 			= Observable('compra');
var cdeMonedaSel 			= Observable('guarani');
var cdeGuarani 				= Observable();
var cdeDolar 				= Observable();
var cdeEuro 				= Observable();
var cdePeso 				= Observable();
var cdeReal 				= Observable();

/* Salto del Guaira */
var sdgOptionSel 			= Observable('compra');
var sdgMonedaSel 			= Observable('guarani');
var sdgGuarani 				= Observable();
var sdgDolar 				= Observable();
var sdgEuro 				= Observable();
var sdgPeso 				= Observable();
var sdgReal 				= Observable();

/* San Lorenzo */
var sloOptionSel 			= Observable('compra');
var sloMonedaSel 			= Observable('guarani');
var sloGuarani 				= Observable();
var sloDolar 				= Observable();
var sloEuro 				= Observable();
var sloPeso 				= Observable();
var sloReal 				= Observable();

/* Agencia Km4 CDE */
var km4OptionSel 			= Observable('compra');
var km4MonedaSel 			= Observable('guarani');
var km4Guarani 				= Observable();
var km4Dolar 				= Observable();
var km4Euro 				= Observable();
var km4Peso 				= Observable();
var km4Real 				= Observable();

/* Encarnación */
var encOptionSel 			= Observable('compra');
var encMonedaSel 			= Observable('guarani');
var encGuarani 				= Observable();
var encDolar 				= Observable();
var encEuro 				= Observable();
var encPeso 				= Observable();
var encReal 				= Observable();

/* ASUNCION */
asuOptionSel.onValueChanged(module, function() {asuCalcValues(0, asuOptionSel.value, asuMonedaSel.value)});
function asuChangeInput() {asuCalcValues(0, asuOptionSel.value, asuMonedaSel.value)}
function asuCalcValues(i, o, m) {
	if (asuCalcValidation.value) {
		if (m == 'guarani') {	
			if (isNumber(asuGuarani.value)) {
				asuDolar.value 		= (asuGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				asuReal.value 		= (asuGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				asuEuro.value 		= (asuGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				asuPeso.value 		= (asuGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				asuDolar.value 		= '';
				asuReal.value 		= '';
				asuEuro.value 		= '';
				asuPeso.value 		= '';
			}
		}

		if (m == 'dolar') {	
			if (isNumber(asuDolar.value)) {
				asuGuarani.value 	= (asuDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				asuReal.value 		= (asuDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				asuEuro.value 		= (asuDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				asuPeso.value 		= (asuDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				asuGuarani.value 	= '';
				asuReal.value 		= '';
				asuEuro.value 		= '';
				asuPeso.value 		= '';
			}
		}

		if (m == 'real') {	  
			if (isNumber(asuReal.value)) {
				asuGuarani.value 	= (asuReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				asuDolar.value 		= (asuReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				asuEuro.value 		= '';
				asuPeso.value 		= '';
			} else {
				asuGuarani.value 	= '';
				asuDolar.value 		= '';
				asuEuro.value 		= '';
				asuPeso.value 		= '';
			}
		}

		if (m == 'euro') {	
			if (isNumber(asuEuro.value)) {
				asuGuarani.value 	= (asuEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				asuDolar.value 		= (asuEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				asuReal.value 		= '';
				asuPeso.value 		= '';
			} else {
				asuGuarani.value 	= '';
				asuDolar.value 		= '';
				asuReal.value 		= '';
				asuPeso.value 		= '';
			}
		}

		if (m == 'peso') {	
			if (isNumber(asuPeso.value)) { 
				asuGuarani.value 	= (asuPeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				asuDolar.value 		= (asuPeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				asuReal.value 		= '';
				asuEuro.value 		= '';
			} else {
				asuGuarani.value 	= '';
				asuDolar.value 		= '';
				asuReal.value 		= '';
				asuEuro.value 		= '';
			}
		}
	}
}

/* VillaMorra */
vmOptionSel.onValueChanged(module, function() {vmCalcValues(1, vmOptionSel.value, vmMonedaSel.value)});
function vmChangeInput() {vmCalcValues(1, vmOptionSel.value, vmMonedaSel.value)}
function vmCalcValues(i, o, m) {
	if (vmCalcValidation.value) {
		if (m == 'guarani') {		    	
			if (isNumber(vmGuarani.value)) {
				vmDolar.value 		= (vmGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				vmReal.value 		= (vmGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				vmEuro.value 		= (vmGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				vmPeso.value 		= (vmGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				vmDolar.value 		= '';
				vmReal.value 		= '';
				vmEuro.value 		= '';
				vmPeso.value 		= '';
			}
		}

		if (m == 'dolar') {	  
			if (isNumber(vmDolar.value)) {
				vmGuarani.value 	= (vmDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				vmReal.value 		= (vmDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				vmEuro.value 		= (vmDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				vmPeso.value 		= (vmDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				vmGuarani.value 	= '';
				vmReal.value 		= '';
				vmEuro.value 		= '';
				vmPeso.value 		= '';
			}
		}

		if (m == 'real') {	
			if (isNumber(vmReal.value)) {
				vmGuarani.value 	= (vmReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				vmDolar.value 		= (vmReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				vmEuro.value 		= '';
				vmPeso.value 		= '';
			} else {
				vmGuarani.value 	= '';
				vmDolar.value 		= '';
				vmEuro.value 		= '';
				vmPeso.value 		= '';
			}
		}

		if (m == 'euro') {	
			if (isNumber(vmEuro.value)) {
				vmGuarani.value 	= (vmEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				vmDolar.value 		= (vmEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				vmReal.value 		= '';
				vmPeso.value 		= '';
			} else {
				vmGuarani.value 	= '';
				vmDolar.value 		= '';
				vmReal.value 		= '';
				vmPeso.value 		= '';
			}
		}

		if (m == 'peso') {	  
			if (isNumber(vmPeso.value)) {
				vmGuarani.value 	= (vmPeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				vmDolar.value 		= (vmPeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				vmReal.value 		= '';
				vmEuro.value 		= '';
			} else {
				vmGuarani.value 	= '';
				vmDolar.value 		= '';
				vmReal.value 		= '';
				vmEuro.value 		= '';
			}
		}
	}
}

/* Ciudad del Este */
cdeOptionSel.onValueChanged(module, function() {cdeCalcValues(2, cdeOptionSel.value, cdeMonedaSel.value)});
function cdeChangeInput() {cdeCalcValues(2, cdeOptionSel.value, cdeMonedaSel.value)}
function cdeCalcValues(i, o, m) {
	if (cdeCalcValidation.value) {
		if (m == 'guarani') {
			if (isNumber(cdeGuarani.value)) {
				cdeDolar.value 		= (cdeGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				cdeReal.value 		= (cdeGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				cdeEuro.value 		= (cdeGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				cdePeso.value 		= (cdeGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				cdeDolar.value 		= '';
				cdeReal.value 		= '';
				cdeEuro.value 		= '';
				cdePeso.value 		= '';
			}
		}

		if (m == 'dolar') {	
			if (isNumber(cdeDolar.value)) {
				cdeGuarani.value 	= (cdeDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				cdeReal.value 		= (cdeDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				cdeEuro.value 		= (cdeDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				cdePeso.value 		= (cdeDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				cdeGuarani.value 	= '';
				cdeReal.value 		= '';
				cdeEuro.value 		= '';
				cdePeso.value 		= '';
			}
		}

		if (m == 'real') {	 
			if (isNumber(cdeReal.value)) {
				cdeGuarani.value 	= (cdeReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				cdeDolar.value 		= (cdeReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				cdeEuro.value 		= '';
				cdePeso.value 		= '';
			} else {
				cdeGuarani.value 	= '';
				cdeDolar.value 		= '';
				cdeEuro.value 		= '';
				cdePeso.value 		=	'';
			}
		}

		if (m == 'euro') {	
			if (isNumber(cdeEuro.value)) {
				cdeGuarani.value 	= (cdeEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				cdeDolar.value 		= (cdeEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				cdeReal.value 		= '';
				cdePeso.value 		= '';
			} else {
				cdeGuarani.value 	= '';
				cdeDolar.value 		= '';
				cdeReal.value 		= '';
				cdePeso.value 		= '';
			}
		}

		if (m == 'peso') {	
			if (isNumber(cdePeso.value)) {
				cdeGuarani.value 	= (cdePeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				cdeDolar.value 		= (cdePeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				cdeReal.value 		= '';
				cdeEuro.value 		= '';
			} else {
				cdeGuarani.value 	= '';
				cdeDolar.value 		= '';
				cdeReal.value 		= '';
				cdeEuro.value 		= '';
			}
		}
	}
}

/* Salto del Guaira */
sdgOptionSel.onValueChanged(module, function() {sdgCalcValues(3, sdgOptionSel.value, sdgMonedaSel.value)});
function sdgChangeInput() {sdgCalcValues(3, sdgOptionSel.value, sdgMonedaSel.value)}
function sdgCalcValues(i, o, m) {
	if (sdgCalcValidation.value) {
		if (m == 'guarani') {
			if (isNumber(sdgGuarani.value)) {
				sdgDolar.value 		= (sdgGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				sdgReal.value 		= (sdgGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				sdgEuro.value 		= (sdgGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				sdgPeso.value 		= (sdgGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				sdgDolar.value 		= '';
				sdgReal.value 		= '';
				sdgEuro.value 		= '';
				sdgPeso.value 		= '';
			}
		}

		if (m == 'dolar') {
			if (isNumber(sdgDolar.value)) {
				sdgGuarani.value 	= (sdgDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				sdgReal.value 		= (sdgDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				sdgEuro.value 		= (sdgDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				sdgPeso.value 		= (sdgDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				sdgGuarani.value 	= '';
				sdgReal.value 		= '';
				sdgEuro.value 		= '';
				sdgPeso.value 		= '';
			}
		}

		if (m == 'real') {
			if (isNumber(sdgReal.value)) {
				sdgGuarani.value 	= (sdgReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				sdgDolar.value 		= (sdgReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				sdgEuro.value 		= '';
				sdgPeso.value 		= '';
			} else {
				sdgGuarani.value 	= '';
				sdgDolar.value 		= '';
				sdgEuro.value 		= '';
				sdgPeso.value 		= '';
			}
		}

		if (m == 'euro') {
			if (isNumber(sdgEuro.value)) {
				sdgGuarani.value 	= (sdgEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				sdgDolar.value 		= (sdgEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				sdgReal.value 		= '';
				sdgPeso.value 		= '';
			} else {
				sdgGuarani.value 	= '';
				sdgDolar.value 		= '';
				sdgReal.value 		= '';
				sdgPeso.value 		= '';
			}
		}

		if (m == 'peso') {	   
			if (isNumber(sdgPeso.value)) {
				sdgGuarani.value 	= (sdgPeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				sdgDolar.value 		= (sdgPeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				sdgReal.value 		= '';
				sdgEuro.value 		= '';
			} else {
				sdgGuarani.value 	= '';
				sdgDolar.value 		= '';
				sdgReal.value 		= '';
				sdgEuro.value 		= '';
			}
		}
	}
}

/* San Lorenzo */
sloOptionSel.onValueChanged(module, function() {sloCalcValues(4, sloOptionSel.value, sloMonedaSel.value)});
function sloChangeInput() {sloCalcValues(4, sloOptionSel.value, sloMonedaSel.value)}
function sloCalcValues(i, o, m) {
	if (sloCalcValidation.value) {
		if (m == 'guarani') {
			if (isNumber(sloGuarani.value)) {
				sloDolar.value 		= (sloGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				sloReal.value 		= (sloGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				sloEuro.value 		= (sloGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				sloPeso.value 		= (sloGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				sloDolar.value 		= '';
				sloReal.value 		= '';
				sloEuro.value 		= '';
				sloPeso.value 		= '';
			}
		}

		if (m == 'dolar') {
			if (isNumber(sloDolar.value)) {
				sloGuarani.value 	= (sloDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				sloReal.value 		= (sloDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				sloEuro.value 		= (sloDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				sloPeso.value 		= (sloDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				sloGuarani.value 	= '';
				sloReal.value 		= '';
				sloEuro.value 		= '';
				sloPeso.value 		= '';
			}
		}

		if (m == 'real') {
			if (isNumber(sloReal.value)) {
				sloGuarani.value 	= (sloReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				sloDolar.value 		= (sloReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				sloEuro.value 		= '';
				sloPeso.value 		= '';
			} else {
				sloGuarani.value 	= '';
				sloDolar.value 		= '';
				sloEuro.value 		= '';
				sloPeso.value 		= '';
			}
		}

		if (m == 'euro') {
			if (isNumber(sloEuro.value)) {
				sloGuarani.value 	= (sloEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				sloDolar.value 		= (sloEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				sloReal.value 		= '';
				sloPeso.value 		= '';
			} else {
				sloGuarani.value 	= '';
				sloDolar.value 		= '';
				sloReal.value 		= '';
				sloPeso.value 		= '';
			}
		}

		if (m == 'peso') {
			if (isNumber(sloPeso.value)) {
				sloGuarani.value 	= (sloPeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				sloDolar.value 		= (sloPeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				sloReal.value 		= '';
				sloEuro.value 		= '';
			} else {
				sloGuarani.value 	= '';
				sloDolar.value 		= '';
				sloReal.value 		= '';
				sloEuro.value 		= '';
			}
		}
	}
}

/* Agencia Km4 CDE */
km4OptionSel.onValueChanged(module, function() {km4CalcValues(4, km4OptionSel.value, km4MonedaSel.value)});
function km4ChangeInput() {km4CalcValues(4, km4OptionSel.value, km4MonedaSel.value)}
function km4CalcValues(i, o, m) {
	if (km4CalcValidation.value) {
		if (m == 'guarani') {
			if (isNumber(km4Guarani.value)) {
				km4Dolar.value 		= (km4Guarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				km4Real.value 		= (km4Guarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				km4Euro.value 		= (km4Guarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				km4Peso.value 		= (km4Guarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				km4Dolar.value 		= '';
				km4Real.value 		= '';
				km4Euro.value 		= '';
				km4Peso.value 		= '';
			}
		}

		if (m == 'dolar') {
			if (isNumber(km4Dolar.value)) {
				km4Guarani.value 	= (km4Dolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				km4Real.value 		= (km4Dolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				km4Euro.value 		= (km4Dolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				km4Peso.value 		= (km4Dolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				km4Guarani.value 	= '';
				km4Real.value 		= '';
				km4Euro.value 		= '';
				km4Peso.value 		= '';
			}
		}

		if (m == 'real') {
			if (isNumber(km4Real.value)) {
				km4Guarani.value 	= (km4Real.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				km4Dolar.value 		= (km4Real.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				km4Euro.value 		= '';
				km4Peso.value 		= '';
			} else {
				km4Guarani.value 	= '';
				km4Dolar.value 		= '';
				km4Euro.value 		= '';
				km4Peso.value 		= '';
			}
		}

		if (m == 'euro') {
			if (isNumber(km4Euro.value)) {
				km4Guarani.value 	= (km4Euro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				km4Dolar.value 		= (km4Euro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				km4Real.value 		= '';
				km4Peso.value 		= '';
			} else {
				km4Guarani.value 	= '';
				km4Dolar.value 		= '';
				km4Real.value 		= '';
				km4Peso.value 		= '';
			}
		}

		if (m == 'peso') {
			if (isNumber(km4Peso.value)) {
				km4Guarani.value 	= (km4Peso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				km4Dolar.value 		= (km4Peso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				km4Real.value 		= '';
				km4Euro.value 		= '';
			} else {
				km4Guarani.value 	= '';
				km4Dolar.value 		= '';
				km4Real.value 		= '';
				km4Euro.value 		= '';
			}
		}
	}	
}

/* Encarnación */
encOptionSel.onValueChanged(module, function() {encCalcValues(4, encOptionSel.value, encMonedaSel.value)});
function encChangeInput() {encCalcValues(4, encOptionSel.value, encMonedaSel.value)}
function encCalcValues(i, o, m) {
	if (encCalcValidation.value) {
		if (m == 'guarani') {
			if (isNumber(encGuarani.value)) {
				encDolar.value 		= (encGuarani.value/getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				encReal.value 		= (encGuarani.value/getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				encEuro.value 		= (encGuarani.value/getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				encPeso.value 		= (encGuarani.value/getReal(arr[i][3][o])).formatMoney(2, ',', '.');
			} else {
				encDolar.value 		= '';
				encReal.value 		= '';
				encEuro.value 		= '';
				encPeso.value 		= '';
			}
		}

		if (m == 'dolar') {
			if (isNumber(encDolar.value)) {
				encGuarani.value 	= (encDolar.value*getReal(arr[i][0][o])).formatMoney(2, ',', '.');
				encReal.value 		= (encDolar.value*getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				encEuro.value 		= (encDolar.value/getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				encPeso.value 		= (encDolar.value*getReal(arr[i][5][o])).formatMoney(2, ',', '.');
			} else {
				encGuarani.value 	= '';
				encReal.value 		= '';
				encEuro.value 		= '';
				encPeso.value 		= '';
			}
		}

		if (m == 'real') {
			if (isNumber(encReal.value)) {
				encGuarani.value 	= (encReal.value*getReal(arr[i][1][o])).formatMoney(2, ',', '.');
				encDolar.value 		= (encReal.value/getReal(arr[i][4][o])).formatMoney(2, ',', '.');
				encEuro.value 		= '';
				encPeso.value 		= '';
			} else {
				encGuarani.value 	= '';
				encDolar.value 		= '';
				encEuro.value 		= '';
				encPeso.value 		= '';
			}
		}

		if (m == 'euro') {
			if (isNumber(encEuro.value)) {
				encGuarani.value 	= (encEuro.value*getReal(arr[i][2][o])).formatMoney(2, ',', '.');
				encDolar.value 		= (encEuro.value*getReal(arr[i][6][o])).formatMoney(2, ',', '.');
				encReal.value 		= '';
				encPeso.value 		= '';
			} else {
				encGuarani.value 	= '';
				encDolar.value 		= '';
				encReal.value 		= '';
				encPeso.value 		= '';
			}
		}

		if (m == 'peso') {
			if (isNumber(encPeso.value)) {
				encGuarani.value 	= (encPeso.value*getReal(arr[i][3][o])).formatMoney(2, ',', '.');
				encDolar.value 		= (encPeso.value/getReal(arr[i][5][o])).formatMoney(2, ',', '.');
				encReal.value 		= '';
				encEuro.value 		= '';
			} else {
				encGuarani.value 	= '';
				encDolar.value 		= '';
				encReal.value 		= '';
				encEuro.value 		= '';
			}
		}
	}
}

LocalNotify.on("receivedMessage", function(payload) {
    LocalNotify.clearAllNotifications();
	LocalNotify.clearBadgeNumber();
});   

notify.onValueChanged(module, function() {
	Storage.write("setting.txt", notify.value);
});

Storage.read("setting.txt")
.then(function(content) {
	if (content == "true") {
		notify.value = true;
	} else {
		notify.value = false;
	}
}); 

var FETCH_TIMEOUT = 60000;
loadJSON();

function loadJSON() {
	var randNumber = Math.random();

	var myHeaders = new Headers();
	myHeaders.append('pragma', 'no-cache');
	myHeaders.append('cache-control', 'no-cache');
	myHeaders.append('if-modified-since', 'Sat, 1 Jan 2000 00:00:00 GMT');

	var myInit = {
	  method: 'GET',
	  headers: myHeaders,
	};

	fetch('http://cambiosalberdi.com/ws/getCotizaciones.json', myInit)
    .then(function(responsef) { 
    	return responsef.json(); 
    })
    .then(function(responseObject) { 
		initJSON(responseObject);
	});

	var timeout = setTimeout(function() {
	    loadJSON();
	}, FETCH_TIMEOUT); 
}

function initJSON(response) {
    if (response.asuncion) {
    	for(var i=0;i<response.asuncion.length;i++)
        	response.asuncion[i].img = 'Assets/'+response.asuncion[i].img;
    } else {
    	response.asuncion = []; asuCalcValidation.value = false;
    }

    if (response.villamorra) {
        for(var i=0;i<response.villamorra.length;i++)
            response.villamorra[i].img = 'Assets/'+response.villamorra[i].img;
    } else { 
    	response.villamorra = []; vmCalcValidation.value = false;
    }

    if (response.cde) {
        for(var i=0;i<response.cde.length;i++)
            response.cde[i].img = 'Assets/'+response.cde[i].img;
    } else {
    	response.cde = []; cdeCalcValidation.value = false;
    }

    if (response.salto) {
        for(var i=0;i<response.salto.length;i++)
           	response.salto[i].img = 'Assets/'+response.salto[i].img;
    } else {
    	response.salto = []; sdgCalcValidation.value = false;
    }

    if (response.sanlo) {           	
    	for(var i=0;i<response.sanlo.length;i++)
       		response.sanlo[i].img = 'Assets/'+response.sanlo[i].img;
   	} else {
   		response.sanlo = []; sloCalcValidation.value = false;
   	}

	if (response.cde2) {           	
    	for(var i=0;i<response.cde2.length;i++)
       		response.cde2[i].img = 'Assets/'+response.cde2[i].img;
	} else {
		response.cde2 = []; km4CalcValidation.value = false;
	}
	   
	if (response.enc) {           	
    	for(var i=0;i<response.enc.length;i++)
       		response.enc[i].img = 'Assets/'+response.enc[i].img;
	} else {
		response.enc = []; encCalcValidation.value = false;
	}

    data.value 	= response;
    arr 		= Object.keys(response).map(function(k) { return response[k] });

	if (flag && notify.value)
		LocalNotify.now("Cambios Alberdi S.A.", "Nuevos cambios en los tableros", "payload", true);
	flag = true;
}

module.exports = {
	data: 				data,
	notify: 			notify,

	/* Validation Calc */
	asuCalcValidation: 	asuCalcValidation,
	vmCalcValidation:  	vmCalcValidation,
	cdeCalcValidation: 	cdeCalcValidation,
	sdgCalcValidation: 	sdgCalcValidation,
	sloCalcValidation: 	sloCalcValidation,
	km4CalcValidation: 	km4CalcValidation,
	encCalcValidation: 	encCalcValidation,

	/* ASUNCION */
	asuChangeInput: 	asuChangeInput,
	asuOptionSel: 		asuOptionSel,
	asuMonedaSel: 		asuMonedaSel,
	asuGuarani: 		asuGuarani,
	asuDolar: 			asuDolar,
	asuEuro: 			asuEuro,
	asuPeso: 			asuPeso,
	asuReal: 			asuReal,

	/* VillaMorra */
	vmChangeInput: 		vmChangeInput,
	vmOptionSel: 		vmOptionSel,
	vmMonedaSel: 		vmMonedaSel,
	vmGuarani: 			vmGuarani,
	vmDolar: 			vmDolar,
	vmEuro: 			vmEuro,
	vmPeso: 			vmPeso,
	vmReal: 			vmReal,

	/* Ciudad del Este */
	cdeChangeInput: 	cdeChangeInput,
	cdeOptionSel: 		cdeOptionSel,
	cdeMonedaSel: 		cdeMonedaSel,
	cdeGuarani: 		cdeGuarani,
	cdeDolar: 			cdeDolar,
	cdeEuro: 			cdeEuro,
	cdePeso: 			cdePeso,
	cdeReal: 			cdeReal,

	/* Salto del Guaira */
	sdgChangeInput: 	sdgChangeInput,
	sdgOptionSel: 		sdgOptionSel,
	sdgMonedaSel: 		sdgMonedaSel,
	sdgGuarani: 		sdgGuarani,
	sdgDolar: 			sdgDolar,
	sdgEuro: 			sdgEuro,
	sdgPeso: 			sdgPeso,
	sdgReal: 			sdgReal,

	/* San Lorenzo */
	sloChangeInput: 	sloChangeInput,
	sloOptionSel: 		sloOptionSel,
	sloMonedaSel: 		sloMonedaSel,
	sloGuarani: 		sloGuarani,
	sloDolar: 			sloDolar,
	sloEuro: 			sloEuro,
	sloPeso: 			sloPeso,
	sloReal: 			sloReal,

	/* Agencia Km4 CDE */
	km4ChangeInput: 	km4ChangeInput,
	km4OptionSel: 		km4OptionSel,
	km4MonedaSel: 		km4MonedaSel,
	km4Guarani: 		km4Guarani,
	km4Dolar: 			km4Dolar,
	km4Euro: 			km4Euro,
	km4Peso: 			km4Peso,
	km4Real: 			km4Real,

	/* Encarnación */
	encChangeInput: 	encChangeInput,
	encOptionSel: 		encOptionSel,
	encMonedaSel: 		encMonedaSel,
	encGuarani: 		encGuarani,
	encDolar: 			encDolar,
	encEuro: 			encEuro,
	encPeso: 			encPeso,
	encReal: 			encReal,
};

function isNumber(n) {
  	return !isNaN(parseFloat(n)) && isFinite(n);
}

function getReal(value) {
    var res = value.replace('.', '');
    res 	= res.replace(',', '.');
    return parseFloat(res);
}

Number.prototype.formatMoney = function(c, d, t){
	var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};