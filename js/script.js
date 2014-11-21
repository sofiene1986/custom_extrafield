(function($){
    $(document).ready(function(){
        editAreaLoader.init({
			id: "edit-data"	// id of the textarea to transform	
			,start_highlight: true	
			,font_size: "8"
			,font_family: "verdana, monospace"
			,allow_resize: "y"
			,allow_toggle: false
			,language: "fr"
			,syntax: "php"	
//			,toolbar: "new_document, save, load, |, charmap, |, search, go_to_line, |, undo, redo, |, select_font, |, change_smooth_selection, highlight, reset_highlight, |, help"
			,plugins: "charmap"
			,charmap_default: "arrows"
				
		});
    });
})(jQuery);
