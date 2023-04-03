var gbtitle ='';
var i = 0;
var ret_txt ='';   
var page_lang_elmt = document.getElementsByClassName('page_lang_vals_elmt');
var xml_file_path = "xml/index.xml";
if(page_lang_elmt[0].value =="arabic"){
 xml_file_path = "xml/index-ar.xml";
}
	  
  $(document).ready(function(){     
	  var locationss = new Array(); 
	  
	  $.ajax({
		type: "GET",
		async: false,
		crossDomain: true,
		url: xml_file_path,
		dataType: "xml",
		success: function (xml) {
		  gbtitle = ''; 
		  var i = 0;
		  $(xml).find('BranchItem').each(function( index0, value0 ){ 
	
			var brnh_id = $(value0).find('id').text();
			var brnh_name = $(value0).find('name').text();
			var brnh_address = $(value0).find('address').text();
			var brnh_latitudes = $(value0).find('latitudes').text();
			var brnh_longitudes = $(value0).find('longitudes').text();
			var brnh_working_days = $(value0).find('working_days').text();
			var brnh_working_hours = $(value0).find('working_hours').text();
			var brnh_phone_no = $(value0).find('phone_no').text();
			var brnh_icons = $(value0).find('icons').text();
			var brnh_summarytxt = $(value0).find('summarytext').text();
			var brnh_url = $(value0).find('branchurl').text();
			var brnh_getdirection = $(value0).find('getdirection').text();
			var brnh_governate = $(value0).find('Governate').text();
			var brnh_governate_area = $(value0).find('GovernateArea').text();
			 
			var Serviceitem = $(value0).find('Serviceitem').text(); 
			locationss[i] = new Array();
			locationss[i][0] = brnh_id;
			locationss[i][1] = brnh_name;
			locationss[i][2] = brnh_latitudes;
			locationss[i][3] = brnh_longitudes;
			locationss[i][4] = (brnh_icons != '') ? brnh_icons : './images/map/map-pin.png';
			locationss[i][5] = brnh_address; 
			locationss[i][6] = brnh_working_days;
			locationss[i][7] = brnh_working_hours;
			locationss[i][8] = brnh_phone_no; 
			locationss[i][9] = brnh_getdirection;
			locationss[i][10] = brnh_summarytxt;
			locationss[i][11] = brnh_governate;
			locationss[i][12] = brnh_governate_area;
			locationss[i][13] = brnh_url;
			
			  
			var li_icn_img = "";
			/*var li_icn_img = "<img src='images/location5.svg' class='location-img' />";
			if(brnh_icons.length >1){
				li_icn_img = "<img src='"+brnh_icons+"' class='location-img' />";	
			}*/
			 /* filter-list-active */
			 var serv_icons = '';   
			 $(value0).find('Serviceitem').each(function( index4, value4 ) {
				var sstitle = $(value4).find('Stitle').text(); 
				var ssicon = $(value4).find('Sicon').text();  
				if(ssicon !=''){
					//serv_icons += "<a href='#' data-toggle='tooltip' data-placement='top' title='"+sstitle+"'><img src='"+ssicon+"' alt='' class='mx-1' /></a>"; 
				}
			 });  
			 //ret_txt += "<div class='row py-3 border-bottom'> <div class='col-8 align-self-center'> <a class=\"nav_"+brnh_id+" dark-cls\" href=\"javascript:operate_branches('"+brnh_id+"');\"><h5 class='pl-3 m-0 uppercase'>"+li_icn_img +" "+ brnh_name+" </h5> </a></div><div class='col-4'> "+serv_icons+" </div> </div>"; 
			
			if(page_lang_elmt[0].value =="arabic"){
				 ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> ساعات العمل : ' + brnh_working_hours + ' </p> <span>موقع : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> احجز زيارة</a> </div> </div> </div>'; 
				 
			}else{
				
				ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> Working Hours : ' + brnh_working_hours + ' </p> <span>Location : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> Book a visit</a> </div> </div> </div>'; 
				
			}
			
			 
			 
			 i++;  
			 
		  });  
			if(locationss.length >0){
			  document.getElementsByClassName("fetch_branches_data")[0].innerHTML = ret_txt; 
			  operate_custom_map(locationss,1,4); 
			}else{
				if(page_lang_elmt[0].value =="arabic"){
					document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "لا يوجد سجلات!";
					document.getElementsByClassName('map_elmt')[0].innerHTML = "لا يوجد سجلات!";
				}else{
					document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "No Record Found!";
					document.getElementsByClassName('map_elmt')[0].innerHTML = "No Record Found!";
				} 
			}   
		  },
		  error: function () {
			alert("An error occurred while processing XML file.");
		  }
		});
	});
		
	 function operate_branches_clone(sl_paras=''){
		var i = 0;
		var ret_txt ='';   
		var page_lang_elmt = document.getElementsByClassName('page_lang_vals_elmt');
		var xml_file_path = "xml/index.xml";
		if(page_lang_elmt[0].value =="arabic"){
			xml_file_path = "xml/index-ar.xml";
		} 

		$(document).ready(function(){
			
			var governateVal = $("#governate option:selected").val();
			var governorate_areasVal = $("#governorate_areas option:selected").val();  
			var service_items_arrs = new Array();
			$('input[type=checkbox].service_cls').each(function () { 
				if(this.checked){
					service_items_arrs.push($(this).val()); 
				}  
			});
			
			var locationss = new Array();
			$.ajax({
				type: "GET",
				async: false,
				crossDomain: true,
				url: xml_file_path,
				dataType: "xml",
				success: function (xml) {
				  var i = 0;
				  var cond_11 = 0;
				  
				  $(xml).find('BranchItem').each(function( index0, value0 ){
					
					var brnh_id = $(value0).find('id').text();
					var brnh_name = $(value0).find('name').text();
					var brnh_address = $(value0).find('address').text();
					var brnh_latitudes = $(value0).find('latitudes').text();
					var brnh_longitudes = $(value0).find('longitudes').text();
					var brnh_working_days = $(value0).find('working_days').text();
					var brnh_working_hours = $(value0).find('working_hours').text();
					var brnh_phone_no = $(value0).find('phone_no').text();
					var brnh_icons = $(value0).find('icons').text();
					var brnh_summarytxt = $(value0).find('summarytext').text();
					var brnh_url = $(value0).find('branchurl').text();
					var brnh_getdirection = $(value0).find('getdirection').text();
					var brnh_governate = $(value0).find('Governate').text();
					var brnh_governate_area = $(value0).find('GovernateArea').text();
					var Serviceitem = $(value0).find('Serviceitem').text(); 
					  
					var cond_4 = 0;
					if(service_items_arrs.length){   
						var serv_icons = '';
						$(value0).find('Serviceitem').each(function( index4, value4 ) {
							var sstitle = $(value4).find('Stitle').text(); 
							var ssicon = $(value4).find('Sicon').text();  
							if(service_items_arrs.indexOf(sstitle) !== -1){
								cond_4 = 1;  
							}
						 }); 
						 //console.log("cond_4 ===>> " + cond_4); 
					}
						 
					var cond_0 = 0;
					var cond_1 = 0;
					var cond_2 = 0;
					var cond_3 = 0;
					 
					if(governateVal == brnh_governate && governorate_areasVal == brnh_governate_area){
						cond_1 = 1; 
					}else if(governateVal == brnh_governate && governorate_areasVal == ''){
						cond_2 = 1;
					}else if(governateVal == '' && governorate_areasVal == brnh_governate_area){
						cond_3 = 1;
					}else if(governateVal == '' && governorate_areasVal == '' && service_items_arrs.length == 0){
						cond_0 = 1;
					}
					
					var filterable = 0;
					if(sl_paras != '' && sl_paras == brnh_id){						
						filterable = 1;
						locationss[i] = new Array();
						locationss[i][0] = brnh_id;
						locationss[i][1] = brnh_name;
						locationss[i][2] = brnh_latitudes;
						locationss[i][3] = brnh_longitudes;
						locationss[i][4] = (brnh_icons != '') ? brnh_icons : './images/map/map-pin.png';
						locationss[i][5] = brnh_address; 
						locationss[i][6] = brnh_working_days;
						locationss[i][7] = brnh_working_hours;
						locationss[i][8] = brnh_phone_no; 
						locationss[i][9] = brnh_getdirection;
						locationss[i][10] = brnh_summarytxt;
						locationss[i][11] = brnh_governate;
						locationss[i][12] = brnh_governate_area;
						locationss[i][13] = brnh_url; 
						
						setTimeout(() => {   
							var map_item_no_elmt = "#map_item_no_" + brnh_id;
							$('.fetch_branches_data .location-box').removeClass('active');
							$(map_item_no_elmt).addClass('active');   
							
						},600); 
						
						i++;
					}   
					
					
					var items_nos = 0; 
					if((cond_0 == 1 || cond_1 == 1 || cond_2 == 1 || cond_3 == 1) && sl_paras == ''){
						
						if(service_items_arrs.length>0 && cond_4 == 1){
							cond_11 = 1;
							items_nos = 1; 
							locationss[i] = new Array();
							locationss[i][0] = brnh_id;
							locationss[i][1] = brnh_name;
							locationss[i][2] = brnh_latitudes;
							locationss[i][3] = brnh_longitudes;
							locationss[i][4] = (brnh_icons != '') ? brnh_icons : './images/map/map-pin.png';
							locationss[i][5] = brnh_address; 
							locationss[i][6] = brnh_working_days;
							locationss[i][7] = brnh_working_hours;
							locationss[i][8] = brnh_phone_no; 
							locationss[i][9] = brnh_getdirection;
							locationss[i][10] = brnh_summarytxt;
							locationss[i][11] = brnh_governate;
							locationss[i][12] = brnh_governate_area;
							locationss[i][13] = brnh_url; 
							
							if(page_lang_elmt[0].value =="arabic"){
								
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> ساعات العمل : ' + brnh_working_hours + ' </p> <span>موقع : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> احجز زيارة</a> </div> </div> </div>'; 
							}else{
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> Working Hours : ' + brnh_working_hours + ' </p> <span>Location : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> Book a visit</a> </div> </div> </div>'; 
							}
							
							i++;   
						}else if(service_items_arrs.length == 0){
							cond_11 = 1;
							items_nos = 1; 
							locationss[i] = new Array();
							locationss[i][0] = brnh_id;
							locationss[i][1] = brnh_name;
							locationss[i][2] = brnh_latitudes;
							locationss[i][3] = brnh_longitudes;
							locationss[i][4] = (brnh_icons != '') ? brnh_icons : './images/map/map-pin.png';
							locationss[i][5] = brnh_address; 
							locationss[i][6] = brnh_working_days;
							locationss[i][7] = brnh_working_hours;
							locationss[i][8] = brnh_phone_no; 
							locationss[i][9] = brnh_getdirection;
							locationss[i][10] = brnh_summarytxt;
							locationss[i][11] = brnh_governate;
							locationss[i][12] = brnh_governate_area;
							locationss[i][13] = brnh_url; 
							 //'+brnh_url+'
							 
							if(page_lang_elmt[0].value =="arabic"){
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> ساعات العمل : ' + brnh_working_hours + ' </p> <span>موقع : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> احجز زيارة</a> </div> </div> </div>'; 
							 }else{
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> Working Hours : ' + brnh_working_hours + ' </p> <span>Location : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> Book a visit</a> </div> </div> </div>';  
							 }
							 
							i++;   
						} 
					}
					
					
					if(service_items_arrs.length>0 && cond_4 == 1 && governateVal == '' && governorate_areasVal == ''){
							cond_11 = 1;
							locationss[i] = new Array();
							locationss[i][0] = brnh_id;
							locationss[i][1] = brnh_name;
							locationss[i][2] = brnh_latitudes;
							locationss[i][3] = brnh_longitudes;
							locationss[i][4] = (brnh_icons != '') ? brnh_icons : './images/map/map-pin.png';
							locationss[i][5] = brnh_address; 
							locationss[i][6] = brnh_working_days;
							locationss[i][7] = brnh_working_hours;
							locationss[i][8] = brnh_phone_no; 
							locationss[i][9] = brnh_getdirection;
							locationss[i][10] = brnh_summarytxt;
							locationss[i][11] = brnh_governate;
							locationss[i][12] = brnh_governate_area;
							locationss[i][13] = brnh_url; 
							
							if(page_lang_elmt[0].value =="arabic"){
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> ساعات العمل : ' + brnh_working_hours + ' </p> <span>موقع : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> احجز زيارة</a> </div> </div> </div>'; 
							}else{
								ret_txt += '<div class="row location-box" id="map_item_no_' + brnh_id + '" onClick="operate_branches_clone(\''+brnh_id+'\');"><div class="col-md-1 text-right"> <img class="w-100" src="assets/img/placeholder.png"> </div><div class="col-md-10"> <h5 class="mt-1">' + brnh_name + '</h5> <p class="mb-0"> '+brnh_phone_no+' </p> <p class="mb-0"> ' + brnh_working_days + ' </p> <p class="mb-0"> Working Hours : ' + brnh_working_hours + ' </p> <span>Location : ' + brnh_address + ' </span><br /> <span class="mb-0"> '+ brnh_summarytxt +' </span> <div class="branch-locator-button"> <a class="secondary-button" href="#" data-branch-item-id="'+ brnh_id +'" data-branch-item-name="'+ brnh_name +'" data-branch-item-address="'+ brnh_address +'" data-branch-item-working-days="'+ brnh_working_days +'" data-branch-item-working-hours="'+ brnh_working_hours +'"><svg id="clock_1_" data-name="clock(1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a" /> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a" /> </svg> Book a visit</a> </div> </div> </div>'; 
							}
							
							i++;   
						} 
				  
					});  
				  
					if(locationss.length >0){
					  if(sl_paras == ''){ 
							document.getElementsByClassName("fetch_branches_data")[0].innerHTML = ret_txt;
					  }
					  
					  operate_custom_map(locationss,1,4); 
					}else{
						if(page_lang_elmt[0].value =="arabic"){
							document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "لا يوجد سجلات!";
							document.getElementsByClassName('map_elmt')[0].innerHTML = "لا يوجد سجلات!";
						}else{
							document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "No Record Found!";
							document.getElementsByClassName('map_elmt')[0].innerHTML = "No Record Found!";
						} 
					}  
					 
				  },
				  error: function () {
					alert("An error occurred while processing XML file.");
				  }
			});
			
			operate_booking_form_popup();
		});
	 }  
		  
	 function operate_branches_li_item(vals0){
		$(document).ready(function(){
			$(".fetch_branches_data a").removeClass( "activelocation" );
			$(".nav_"+vals0).addClass( "activelocation" );
		});
	 } 
	 
	 function proceed_place_request(){
		$(document).ready(function(){ //time2
			var appte_name_val = $("#appte_name").val();
			var appte_mobile_no_val = $("#appte_mobile_no").val();
			var appte_civil_id_val = $("#appte_civil_id").val();
			var appte_email_val = $("#appte_email").val(); 
			var appte_visiting_date_val = $("#appte_visiting_date").val(); 
			var appte_area1_val = $('#appte_area1 :selected').val();
			var appte_service1_val = $('#appte_service1 :selected').val(); 
			//var time_val = $(".time_cls :checked").val();
			var time_val = $("input[class='time_cls']:checked").val();
			
			if( appte_name_val == '' || 
				appte_mobile_no_val == '' || 
				appte_civil_id_val == '' || 
				appte_email_val == '' ||
				appte_visiting_date_val == '' ||
				appte_area1_val == '' ||
				appte_service1_val == '' ){
				
				/* ok */
				
			}else{  
			
				var page_lang_elmt = document.getElementsByClassName('page_lang_vals_elmt'); 
				if(page_lang_elmt[0].value =="arabic"){
					
					$('#fetch_appte_heading1_msg').html("شكرا لك"); 
					$('#fetch_appte_heading2_msg').html("لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي!"); 	 
				}else{
					$('#fetch_appte_heading1_msg').html("Thank you"); 
					$('#fetch_appte_heading2_msg').html("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!"); 	 
				} 
				//$('#fetch_appte_address_details').css("display","none");  
						
				$("#fetch_step1_content").css("display", "none");
				$("#fetch_step2_content").css("display", "block");
				
				$('#fetch_appte_name').html(appte_name_val);
				$('#fetch_appte_mobile_no').html(appte_mobile_no_val);
				$('#fetch_appte_civil_id').html(appte_civil_id_val);
				$('#fetch_appte_email').html(appte_email_val);
				$('#fetch_appte_area1').html(appte_area1_val);
				$('#fetch_appte_service1').html(appte_service1_val);
				$('#fetch_appte_visiting_date').html(appte_visiting_date_val); 
				$('#fetch_appte_visiting_time').html(time_val); 
				 
				//fetch_appte_name fetch_appte_mobile_no  fetch_appte_civil_id  
				//fetch_appte_email  fetch_appte_area1   fetch_appte_service1  fetch_appte_visiting_date  
			} 
		 });
	}