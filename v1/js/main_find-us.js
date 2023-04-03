  var gbtitle ='';
  var i =0;
  var ret_txt ='';   
  var page_lang_elmt = document.getElementsByClassName('page_lang_vals_elmt');
  
  var xml_file_path = "xml/index.xml";
 
  if(page_lang_elmt[0].value =="arabic"){
     xml_file_path = "xml/index-ar.xml";
  } 
 
  $(document).ready(function(){   
  	/* slimScroll for offices name starts */
	 /*$('.fetch_branches_data').slimScroll({
		alwaysVisible: true,
		railVisible: true,
	 });*/ 
  	 /* slimScroll for offices name ends */
	 
   	/* auto suggest office name starts */  
	 if(page_lang_elmt[0].value =="arabic"){
		  var officesNames = [
		  "١ مكتب زين",
		  "٢ مكتب زين",
		  "٣ مكتب زين",
		  "٤ مكتب زين",
		  "٥ مكتب زين",
		  "٦ مكتب زين",
		  "٧ مكتب زين",
		  "١ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٢ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٣ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٤ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٥ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٦ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  "٧ كويت ماجيك مول شارع سالم صباح السالم الصباح الكويت",
		  ]; 
		 
	 }else{
		var officesNames = [
		  "Zain office 1",
		  "Zain office 2",
		  "Zain office 3",
		  "Zain office 4",
		  "Zain office 5",
		  "Zain office 6",
		  "Zain office 7", 
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 1",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 2",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 3",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 4",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 5",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 6",
		  "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait 7",
		  ];  
	 } 
	 
	//_renderItem = function (ul, item) {
		
	/*$( ".search-input" ).autocomplete({
	  source: officesNames
	});*/
	
	var brnh_id = 1;
	var brnh_name = "Zain office";
	var brnh_address = "Kuwait Magic Mall Salem Sabah Al Salem Al Sabah St, Kuwait";
	var brnh_working_days =  "Sunday - Thursday";
	var brnh_working_hours = "10:00 AM - 10:00 PM";
	
	 
	
	$(".search-input").autocomplete({
		source: [
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('1');\">"+ brnh_name +" 1</a></div> <h4> "+ brnh_address +" 1</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 1"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('2');\">"+ brnh_name +" 2</a></div> <h4> "+ brnh_address +" 2</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 2"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('3');\">"+ brnh_name +" 3</a></div> <h4> "+ brnh_address +" 3</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 3"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('4');\">"+ brnh_name +" 4</a></div> <h4> "+ brnh_address +" 4</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 4"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('5');\">"+ brnh_name +" 5</a></div> <h4> "+ brnh_address +" 5</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 5"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('6');\">"+ brnh_name +" 6</a></div> <h4> "+ brnh_address +" 6</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 6"
			},
			{
				label: "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('7');\">"+ brnh_name +" 7</a></div> <h4> "+ brnh_address +" 7</h4> <p> " + brnh_working_days +" ("+brnh_working_hours+")</p>",
				value: "Zain office 7"
			}
		],
		html: true
	});
	
	/* .data( ".search-input" )._renderItem = function( ul, item ) { */
	
	/*._renderItem = function (ul, item) { 	
		alert('111111');
        return $( "<li></li>" )
            .data( ".ui-menu-item.ui-menu-item-wrapper", item )
            .append( "<a class='myclass111' >" + item.label + "</a>" )
            .appendTo( ul );
		}; //customattribute='" + item.customattribute + "'*/
	/* auto suggest office name ends */ 
	
  	var locationss = new Array();
	$.ajax({
		type: "POST",
		async: false,
		crossDomain: true,
		url: xml_file_path,
		dataType: "xml",
		success: function (xml) {
		  gbtitle =''; 
		  var i = 0;
		  
		  ret_txt = "<ul class='map-search-section-location-list'>";
		  
		  $(xml).find('BranchItem').each(function( index0, value0 ) {
			
			var brnh_id = $(value0).find('id').text(); 
			var brnh_name = $(value0).find('name').text();
			var brnh_address = $(value0).find('address').text(); 
			var brnh_latitudes = $(value0).find('latitudes').text();
			var brnh_longitudes = $(value0).find('longitudes').text();
			
			var brnh_working_days = $(value0).find('working_days').text();
			var brnh_working_hours = $(value0).find('working_hours').text();
			var brnh_phone_no = $(value0).find('phone_no').text();
			var brnh_icons = $(value0).find('icons').text(); 
			var brnh_getdirection = $(value0).find('getdirection').text();  
			 
			locationss[i] = new Array();
			 
			locationss[i][0] = brnh_name;
			locationss[i][1] = brnh_latitudes;
			locationss[i][2] = brnh_longitudes;  
			locationss[i][3] = brnh_icons; //'img/pin.png';
			locationss[i][4] = brnh_id;
			locationss[i][5] = brnh_address; 
			locationss[i][6] = brnh_working_days;
			locationss[i][7] = brnh_working_hours;
			locationss[i][8] = brnh_phone_no;
			locationss[i][9] = brnh_icons; 
			locationss[i][10] = 0;
			locationss[i][11] = brnh_icons;
			locationss[i][12] = brnh_getdirection;
			
			i++;   
			
			/*var li_icn_img = "<img src='images/map/location-icon.svg' class='location-img' />";
			if(brnh_icons.length >1){
				li_icn_img = "<img src='"+brnh_icons+"' class='location-img' />";	
			}
			 
			ret_txt += "<a class=\"nav_"+brnh_id+"\" href=\"javascript:operate_branches('"+brnh_id+"');\"><h5>"+li_icn_img +" "+ brnh_name+" </h5> </a><hr />";*/
			 
			 
			ret_txt += "<li class=\"nav_"+brnh_id+"\"> <div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('"+brnh_id+"');\">"+ brnh_name +"</a></div>";
			
			ret_txt += '<h4> '+ brnh_address +'</h4>';
				
			ret_txt += '<p> ' + brnh_working_days +' ('+brnh_working_hours+')</p></li>';
			 
			 
		  }); 
		  
		  
		  ret_txt += "</ul>";
		  
			if(locationss.length >0){
			  //document.getElementsByClassName("fetch_branches_data")[0].innerHTML = ret_txt;
			  operate_custom_map(locationss,1,4); 
			}else{
				if(page_lang_elmt[0].value =="arabic"){
					//document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "لا يوجد سجلات!";
					document.getElementsByClassName('map_elmt')[0].innerHTML = "لا يوجد سجلات!";
				}else{
					//document.getElementsByClassName("fetch_branches_data")[0].innerHTML = "No Record Found!";
					document.getElementsByClassName('map_elmt')[0].innerHTML = "No Record Found!";
				} 
			}  
		  },
		  error: function () {
			alert("An error occurred while processing XML file.");
		  }
	});
  });
     
   
  function operate_branches(vals0){
    var blk_vals0 = 0; 
    var ret_txt =''; 
    var gbtitle ='';
    var i =0; 
        
    $(document).ready(function(){
        
      var locationss = new Array(); 
  
	  var s_elmt = document.getElementsByClassName('search-input'); 
	  var s_val =  s_elmt[0].value;   
		 
      $.ajax({
        type: "POST",
        async: false,
        crossDomain: true,
        url: xml_file_path,
        dataType: "xml",
        success: function (xml) {
          gbtitle =''; 
          var i =0;
          $(xml).find('BranchItem').each(function( index0, value0 ) {
			var brnh_id = $(value0).find('id').text(); 
			if(vals0== brnh_id){  
				blk_vals0 = brnh_id;
			}
			 
			var brnh_name = $(value0).find('name').text();
			var brnh_address = $(value0).find('address').text(); 
			var brnh_latitudes = $(value0).find('latitudes').text();
			var brnh_longitudes = $(value0).find('longitudes').text();
			
			var brnh_working_days = $(value0).find('working_days').text();
			var brnh_working_hours = $(value0).find('working_hours').text();
			var brnh_phone_no = $(value0).find('phone_no').text();
			var brnh_icons = $(value0).find('icons').text();
			var brnh_getdirection = $(value0).find('getdirection').text(); 
		   
            var _this = value0;
            
          var f6=0; 
          var srch_titles =0;
		  
		  ret_txt = "<ul class='map-search-section-location-list'>";
		  
          if(s_val==''){  
            var sel_featured = 0;
            if(vals0== brnh_id){ 
              sel_featured =1;
              blk_vals0 = brnh_id;
            }
            
            locationss[i] = new Array();
  
			locationss[i][0] = brnh_name;
			locationss[i][1] = brnh_latitudes;
			locationss[i][2] = brnh_longitudes;  
			locationss[i][3] = brnh_icons; //'images/map/pin.png';
			locationss[i][4] = brnh_id;
			locationss[i][5] = brnh_address; 
			locationss[i][6] = brnh_working_days;
			locationss[i][7] = brnh_working_hours;
			locationss[i][8] = brnh_phone_no;
			locationss[i][9] = brnh_icons; 
			locationss[i][10] = sel_featured; 
			locationss[i][11] = brnh_icons;
			locationss[i][12] = brnh_getdirection;
               
            i++;    
		  
			/*var li_icn_img = "<img src='images/map/location-icon.svg' class='location-img' />";
			if(brnh_icons.length >1){
				li_icn_img = "<img src='"+brnh_icons+"' class='location-img' />";	
			}
			
			ret_txt += "<a class=\"nav_"+brnh_id+"\" href=\"javascript:operate_branches('"+brnh_id+"');\"><h5>"+li_icn_img +" "+ brnh_name+" </h5> </a><hr />";*/
			
			
			
			ret_txt += "<li class=\"nav_"+brnh_id+"\"> <div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('"+brnh_id+"');\">"+ brnh_name +"</a></div>"; 
			ret_txt += '<h4> '+ brnh_address +'</h4>'; 
			ret_txt += '<p> ' + brnh_working_days +' ('+brnh_working_hours+')</p></li>';
			
             
         }else{ 
              
              var brnh_name1 = brnh_name.toLowerCase();
			  var brnh_address1 = brnh_address.toLowerCase();
              var s_valss =  s_val.toLowerCase();
              if(s_val==''){
                f6=1;
              }else if(s_valss==brnh_name1 || s_valss==brnh_address1){ 
                f6=1; 
                srch_titles =1;
              }
              
              if(f6==1){
                var sel_featured = 0;
                if(vals0 == brnh_id){ 
                  var sel_featured = 1; 
                  blk_vals0 = brnh_id;
                }else if(srch_titles==1){
                  var sel_featured = 1;
                  blk_vals0 = brnh_id;
                }
                locationss[i] = new Array();
             
				locationss[i][0] = brnh_name;
				locationss[i][1] = brnh_latitudes;
				locationss[i][2] = brnh_longitudes;  
				locationss[i][3] = brnh_icons; //'images/map/pin.png';
				locationss[i][4] = brnh_id;
				locationss[i][5] = brnh_address; 
				locationss[i][6] = brnh_working_days;
				locationss[i][7] = brnh_working_hours;
				locationss[i][8] = brnh_phone_no;
				locationss[i][9] = brnh_icons; 
				locationss[i][10] = sel_featured;
				locationss[i][11] = brnh_icons;
				locationss[i][12] = brnh_getdirection;
                   
                i++;
				/*var li_icn_img = "<img src='images/map/location-icon.svg' class='location-img' />";
				if(brnh_icons.length >1){
					li_icn_img = "<img src='"+brnh_icons+"' class='location-img' />";	
				} 
                ret_txt += "<a class=\"nav_"+brnh_id+"\" href=\"javascript:operate_branches('"+brnh_id+"');\"><h5>"+li_icn_img +" "+ brnh_name+" </h5> </a><hr />";*/
				
				
				ret_txt += "<li class=\"nav_"+brnh_id+"\"> <div class='map-list-counter'> 25 </div> <div class='map-searched-name'> <a href=\"javascript:operate_branches('"+brnh_id+"');\">"+ brnh_name +"</a></div>"; 
				ret_txt += '<h4> '+ brnh_address +'</h4>'; 
				ret_txt += '<p> ' + brnh_working_days +' ('+brnh_working_hours+')</p></li>';
				
              } 
            } 
			
			
			ret_txt += "</ul>";
			
          }); 
		  
          if(locationss.length >0){ 
          
            //document.getElementsByClassName("fetch_branches_data")[0].innerHTML = ret_txt;
            operate_custom_map(locationss,2,vals0);
            if(blk_vals0 >0){
              operate_branches_li_item(blk_vals0);
            }
          }else{
			  if(page_lang_elmt[0].value =="arabic"){
				  //document.getElementsByClassName("fetch_branches_data")[0].innerHTML="لا يوجد سجلات!";  
			  }else{
				 //document.getElementsByClassName("fetch_branches_data")[0].innerHTML="No Record Found!";    
			  }
            
            operate_blank_map();
          }
        },
        error: function () {
          alert("An error occurred while processing XML file.");
        }
      });
    });              
     
  }
     
  function operate_branches_li_item(vals0){
    $(document).ready(function(){
      //$(".fetch_branches_data li").removeClass( "active" );
      //$(".nav_"+vals0).addClass( "active" );
    });
    
  } 