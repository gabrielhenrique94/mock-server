function try_request(view){
	let path = '/mock'+$(view).attr('path');		
	window.open(path, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
};