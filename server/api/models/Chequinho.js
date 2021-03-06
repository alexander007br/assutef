/**
 * Chequinho.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
	connection: 'postgres',
	attributes: {		
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},
		associado: {
			model: 'associado',
			required: true			
		},
		data: {
			type : 'Date',
			required : true
		},
		valorLimite:{			
			type : 'float',
			required : true
		},
		valorUtilizado:{
			type : 'float',
			required : false
		},
		numero:{
			type: 'float',
			required: true
		},
		}
};

