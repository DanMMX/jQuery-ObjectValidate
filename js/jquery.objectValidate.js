/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function($) {
	var methods = {
		init: function(){
			var validation;
			this.find("[data-objectValidate]").each(function(){
				
				var method = $(this).attr("data-objectValidate");
				if ( methods[method] ) {
					validation = methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
				} else {
					$.error( 'Method ' +  method + ' does not exist on jquery.objectValidate' );
				}
				
				if(validation.length == 2)
					return false;
			})
			return validation;
		},
		
		empty : function (){
			var el = this;
			
			if(el.value != "undefined")
				el = $(this);
			
			if(el.val()==""){
				
				var id = el.attr("id");
				var label = el.parent().find("[for='"+id+"']");
				var aux = el.parent();
				var count=0;
				
				while(label.length==0 && count < 5){
					aux = aux.parent();
					label = aux.find("[for='"+id+"']")
					count++;
				}
				
				return [el, (label.length!=0?label.text()+" ":"Elements ")+"shouldn't be empty."]
			}
			return true;
		},

		date : function (){
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			
			var re = /^(([0-9]){2}\/){2}([0-9]){4}$/;
			
			if(!re.test(this.value)){
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould be a valid date."]
			}
			
			return true;
		},

		text : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			var re = /^([a-zA-Z])+$/;
			if(!re.test(this.value)){
				
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould contain just letters."]
			}
			return true;
		},

		textEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("text")
		},
		
		phrase : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			var re = /^([a-zA-Z ])+$/;
			if(!re.test(this.value)){
				
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould contain just letters."]
			}
			return true;
		},

		phraseEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("phrase")
		},
		
		num : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			var re = /^([0-9])+$/;
			if(!re.test(this.value)){
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould contain just digits."]
			}
			return true;
		},

		numEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("num")
		},
		
		floatNum : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			var re = /^[0-9]+\.[0-9]*$/
			if(!re.test(this.value)){
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould be a valid decimal number. (e.g. 1.5)"]
			}
			return true;
		},

		floatNumEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("floatNum")
		},

		weight : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}
			
			var re = /^(([0-9]){0,3}(.[0-9]{1,3}){0,1}){1}$/;
			if(!re.test(this.value)){
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould be a valid weight (e.g. 68.700)."]
			}
			return true;
		},

		weightEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("weight")
		},

		email : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return empty;
			}

			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(!re.test(this.value)){
				var id = $(this).attr("id");
				var label = $(this).parent().find("[for='"+id+"']");
			
				return [$(this), (label?label.text()+" s":"S")+"hould be a valid email."]
			}
			return true;

			return re.test(this.value);
		},

		emailEmpty : function () {
			var empty = $(this).objectValidate("empty")
			if(empty != true){
				return true;
			}

			return $(this).objectValidate("email")
		}
	}
	
	$.fn.objectValidate = function(method, funct){
		var callback;
		var a;
		
		if(funct && typeof funct === 'function'){
			callback = funct;
		}else{
			callback = function(){}
		}
		
		if ( methods[method] ) {
			a = methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			callback();
			return a;
		} else if ( typeof method === 'object' || ! method ) {
			a = methods.init.apply( this, arguments );
			callback();
			return a;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.objectValidate' );
		}    

	};	
})(jQuery);
