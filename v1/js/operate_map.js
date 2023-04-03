 function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }else {
      	y = google.maps.event.addListener(map, 'zoom_changed', function(event){
			google.maps.event.removeListener(y);
			self.smoothZoom(map, max, cnt + 1);
		  });
      	setTimeout(function(){map.setZoom(cnt)}, 80);
    }
  }
   
  var page_lang_elmt = document.getElementsByClassName('page_lang_vals_elmt');
   
  function operate_custom_map(datas,flag,linkid) {
     var h=0;
     for (k = 0; k < datas.length; k++) { 
       
      var ftr_map =  datas[k][10];
      if(ftr_map==1){
        h = 1;   
        var lat_0 =  datas[k][1];
        var lng_0 =  datas[k][2]; 
        var map = new google.maps.Map(document.getElementsByClassName('map_elmt')[0], {
          zoom: 13,
          center: new google.maps.LatLng(lat_0, lng_0),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }); 
      } 
    }
    
    if(h==0){ 
      var lat_0 =  29.3403839; //datas[3][1];
      var lng_0 =  47.9505992; // datas[3][2];   

      //add map, the type of map
      var map = new google.maps.Map(document.getElementsByClassName('map_elmt')[0], {
        zoom: 12, /* lat_0, lng_0 29.378586, 47.990341 */
        center: new google.maps.LatLng(lat_0, lng_0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    }
    
    //add locations 
    var locations0 = '';
    
    var _len = datas.length; 
    //var locations = datas;
    var locations = datas; //new Array();
     
    var post;
    var i; 
      
    //declare marker call it 'i'
    var marker, i;
  
    //declare infowindow
    var infowindow = new google.maps.InfoWindow();
     
    //add marker to each locations
    for (i = 0; i < locations.length; i++) { 
       
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0],
        icon: locations[i][3]
      });
      
      if(locations[i][10]==1){  
		if(page_lang_elmt[0].value =="arabic"){
			/*var pop_up_txt = "<h3>"+ locations[i][0] + "</h3>";
			pop_up_txt += "<p>"+ locations[i][5] + "</p>";
			pop_up_txt += "<h6> ساعات العمل </h6>";
			pop_up_txt += "<p class='mb-0'>"+ locations[i][6] + "</p>";
			pop_up_txt += "<p>"+ locations[i][7] + "</p>";
			pop_up_txt += "<h6> بيانات المتصل </h6>";
			pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
			
			if(locations[i][12] != ''){
				  pop_up_txt += "<span class='direction_spn'><img src='img/footer/location-icon.svg' class='direction_img' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>احصل على اتجاه</a></span>"; 
			}*/ 
			
			
			
			var pop_up_txt = "<ul class='map-search-section-location-list'> <li>";
			pop_up_txt += "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> "+ locations[i][0] +" </div>";
			pop_up_txt += "<div class='row'> <div class='col-md-6 sprt-col-line'>";
			pop_up_txt += "<h4> "+ locations[i][5] +" </h4> </div>";
			pop_up_txt += "<div class='col-md-6'> <p> "+ locations[i][6] +" ("+ locations[i][7] +") </p> </div> </div>";
			pop_up_txt += '</li></ul>';
			
		 }else{
			/*var pop_up_txt = "<h3>"+ locations[i][0] + "</h3>";
			pop_up_txt += "<p>"+ locations[i][5] + "</p>";
			pop_up_txt += "<h6> Working Hours </h6>";
			pop_up_txt += "<p class='mb-0'>"+ locations[i][6] + "</p>";
			pop_up_txt += "<p>"+ locations[i][7] + "</p>";
			pop_up_txt += "<h6> Contact Details </h6>";
			pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
			
			if(locations[i][12] != ''){
				  pop_up_txt += "<span class='direction_spn'><img src='img/footer/location-icon.svg' class='direction_img' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>Get Direction</a></span>"; 
			} */ 
			
			var pop_up_txt = "<ul class='map-search-section-location-list'> <li>";
			pop_up_txt += "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> "+ locations[i][0] +" </div>";
			pop_up_txt += "<div class='row'> <div class='col-md-6 sprt-col-line'>";
			pop_up_txt += "<h4> "+ locations[i][5] +" </h4> </div>";
			pop_up_txt += "<div class='col-md-6'> <p> "+ locations[i][6] +" ("+ locations[i][7] +") </p> </div> </div>";
			pop_up_txt += '</li></ul>';
		 }
		
       // infowindow.setContent( pop_up_txt );
        var latLng = marker.getPosition();
        map.setCenter(latLng);
        //map.setZoom(16);
        //infowindow.open(map, marker);
		
		document.getElementById('fetch_branches_detail_data').innerHTML = pop_up_txt;
      }
      if(flag == 2)
      { 
        //map.setZoom(12);
      } 
      
      //click function to marker, pops up infowindow
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() { 
			if(page_lang_elmt[0].value =="arabic"){
				 /* var pop_up_txt = "<h3>"+ locations[i][0] + "</h3>";
				  pop_up_txt += "<p>"+ locations[i][5] + "</p>";
				  pop_up_txt += "<h6> ساعات العمل </h6>";
				  pop_up_txt += "<p class='mb-0'>"+ locations[i][6] + "</p>";
				  pop_up_txt += "<p>"+ locations[i][7] + "</p>";
				  pop_up_txt += "<h6> بيانات المتصل </h6>";
				  pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
				 
				  if(locations[i][12] != ''){
					  pop_up_txt += "<span class='direction_spn'><img src='img/footer/location-icon.svg' class='direction_img' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>احصل على اتجاه</a></span>"; 
				  }*/ 
				  
				var pop_up_txt = "<ul class='map-search-section-location-list'> <li>";
				pop_up_txt += "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> "+ locations[i][0] +" </div>";
				pop_up_txt += "<div class='row'> <div class='col-md-6 sprt-col-line'>";
				pop_up_txt += "<h4> "+ locations[i][5] +" </h4> </div>";
				pop_up_txt += "<div class='col-md-6'> <p> "+ locations[i][6] +" ("+ locations[i][7] +") </p> </div> </div>";
				pop_up_txt += '</li></ul>';
				
			}else{
				/*var pop_up_txt = "<h3>"+ locations[i][0] + "</h3>";
				pop_up_txt += "<p>"+ locations[i][5] + "</p>";
				pop_up_txt += "<h6> Working Hours </h6>";
				pop_up_txt += "<p class='mb-0'>"+ locations[i][6] + "</p>";
				pop_up_txt += "<p>"+ locations[i][7] + "</p>";
				pop_up_txt += "<h6> Contact Details </h6>";
				pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
				
				if(locations[i][12] != ''){
					pop_up_txt += "<span class='direction_spn'><img src='img/footer/location-icon.svg' class='direction_img' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>Get Direction</a></span>"; 
				}*/	
				  
				var pop_up_txt = "<ul class='map-search-section-location-list'> <li>";
				pop_up_txt += "<div class='map-list-counter'> 25 </div> <div class='map-searched-name'> "+ locations[i][0] +" </div>";
				pop_up_txt += "<div class='row'> <div class='col-md-6 sprt-col-line'>";
				pop_up_txt += "<h4> "+ locations[i][5] +" </h4> </div>";
				pop_up_txt += "<div class='col-md-6'> <p> "+ locations[i][6] +" ("+ locations[i][7] +") </p> </div> </div>";
				pop_up_txt += '</li></ul>';
			}
          //infowindow.setContent( pop_up_txt ); 
          //infowindow.open(map, marker);
			
		  document.getElementById('fetch_branches_detail_data').innerHTML = pop_up_txt;
			
          operate_branches_li_item(locations[i][4]);
           
        }
      })(marker, i));
    }
  }
  
    
  function operate_blank_map() {       
    var lat_0 =  29.085371;
    var lng_0 =  48.065127; 
    //add map, the type of map
    var map = new google.maps.Map(document.getElementsByClassName('map_elmt')[0], { 
      zoom: 10, /* lat_0, lng_0 */
      center: new google.maps.LatLng(lat_0, lng_0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }); 
  }