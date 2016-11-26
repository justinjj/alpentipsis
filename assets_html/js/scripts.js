praxisTheme = {

    settings: {
        head : $('header'),        
    },

    init: function() {
        s =  this.settings;     
        this.tocuhDetection();
         
    },

    tocuhDetection: function() {
    	if(Modernizr.touch){
    		$('header nav > ul > li > a').click(function(){
    			return false;
    		});
    	}
    },

}

$(function(){
    praxisTheme.init();
});

$(window).load(function() {
    
})