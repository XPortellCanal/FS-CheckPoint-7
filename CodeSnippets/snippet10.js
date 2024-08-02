const lobo = {
	genero : 'Canis',
	especie : 'lupus',
	nombreBinomial : function () {
		return `${this.genero} ${this.especie}`	
	}
}

const coiote = {
	genero : 'Canis',
	especie : 'latrans',
	nombreBinomial : function () {
		return `${this.genero} ${this.especie}`	
	}
}

console.log(lobo.nombreBinomial())  
console.log(coiote.nombreBinomial())  
