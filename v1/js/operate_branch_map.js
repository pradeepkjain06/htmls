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
	if(datas.length){ 
		h=1; 
		var lat_0 =  datas[0][2];
        var lng_0 =  datas[0][3]; 
        var map = new google.maps.Map(document.getElementsByClassName('map_elmt')[0], {
          zoom: 13,
          center: new google.maps.LatLng(lat_0, lng_0),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }); 
		
	}else if(h==0){ 
	
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
        position: new google.maps.LatLng(locations[i][2], locations[i][3]),
        map: map,
        title: locations[i][1],
        icon: locations[i][4]
      });
      
      //click function to marker, pops up infowindow
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() { 
			if(page_lang_elmt[0].value =="arabic"){
				
				var pop_up_txt = ''; /*"<div class='map-marker position-absolute' style='left:70%;top:80%'> <img src='images/location5.svg' alt='' class='img-fluid' /><div class='map-marker-popup p-4 position-absolute active' style='right:100%;bottom:100%'>";*/
				
				  pop_up_txt += "<h4 class='text-primary'>"+ locations[i][1] + "</h4>";
				  pop_up_txt += "<p>"+ locations[i][5] + "</p><hr>";
				  pop_up_txt += "<h5> ساعات العمل </h5>";
				  pop_up_txt += "<p>"+ locations[i][6] + "</p>";
				  pop_up_txt += "<p>"+ locations[i][7] + "</p><hr>";
				  pop_up_txt += "<h5> بيانات المتصل </h5>";
				  pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
				 
				  if(locations[i][12] != ''){
					  pop_up_txt += "<span class='direction_spn'><img class='small-icon-location mr-2 img-fluid' src='images/location5.svg' alt='' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>احصل على اتجاه</a></span>";
				  }
				  //pop_up_txt += "</div></div>";
				  
				  var pop_up_txt = '<div class="col-md-1 p-0 text-right"> <img class="w-100" src="assets/img/placeholder.png" /></div> <div class="col-md-11 p-0 pl-1"> <h5 class="mt-1">'+ locations[i][1] +'</h5> <p class="mb-0"> '+ locations[i][8] +' </p> <p class="mb-0"> '+ locations[i][6] +' </p> <p class="mb-0"> ساعات العمل: '+ locations[i][7] +' </p> <p class="mb-1"> '+ locations[i][5] +' </p>';
				   
				   if(locations[i][9] != ''){
				   		pop_up_txt += '<a class="mb-1 ctm_link_clr" href="'+locations[i][9]+'" target="_blank">احصل على اتجاه</a>'
				   }
				   
				  	pop_up_txt += '<p class="mb-2"></p> <p class="mb-0 mt-1 ctm_clr text-center">'+ locations[i][10] +'</p> <div class="branch-locator-button">';
				  
				 // if(locations[i][13] != ''){
				  	pop_up_txt += '<a class="secondary-button" href="#" data-branch-item-id="'+ locations[i][0] +'" data-branch-item-name="'+ locations[i][1] +'" data-branch-item-address="'+ locations[i][5] +'" data-branch-item-working-days="'+ locations[i][6] +'" data-branch-item-working-hours="'+ locations[i][7] +'"> <svg id="clock_1_" data-name="clock (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a"></path> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a"></path></svg> احجز زيارة</a>';
				  //}
				  
				  pop_up_txt += '</div> <div class="ctm_pointer"> </div> </div> '; //<div class="row location-box-map" style="left:46%; top:25%"> 
				  
			}else{
				 var pop_up_txt = ''; /*"<div class='map-marker position-absolute' style='left:70%;top:80%'> <img src='images/location5.svg' alt='' class='img-fluid' /><div class='map-marker-popup p-4 position-absolute active' style='right:100%;bottom:100%'>";*/
				 
				 // var pop_up_txt = '<div class="row location-box-map">';
				  pop_up_txt += "<h4 class='text-primary'>"+ locations[i][1] + "</h4>";
				  pop_up_txt += "<p>"+ locations[i][5] + "</p><hr>";
				  pop_up_txt += "<h5> Working Hours </h5>";
				  pop_up_txt += "<p class='mb-0'>"+ locations[i][6] + "</p><hr>";
				  pop_up_txt += "<p>"+ locations[i][7] + "</p>";
				  pop_up_txt += "<h5> Contact Details </h5>";
				  pop_up_txt += "<p>"+ locations[i][8] + "</p>"; 
				 
				  if(locations[i][12] != ''){
					  pop_up_txt += "<span class='direction_spn'><img class='small-icon-location mr-2 img-fluid' src='images/location5.svg' alt='' /> <a href='"+locations[i][12]+"' target='_blank' class='direction_cls'>Get Direction</a></span>"; 
				  }	
				  //pop_up_txt += "</div>";
				  //pop_up_txt += "</div></div>";
				  
				  // <div class="row location-box-map"> </div>
				  
				   var pop_up_txt = '<div class="col-md-1 p-0 text-right"> <img class="w-100" src="assets/img/placeholder.png" /></div> <div class="col-md-11 p-0 pl-1"> <h5 class="mt-1">'+ locations[i][1] +'</h5> <p class="mb-0"> '+ locations[i][8] +' </p> <p class="mb-0"> '+ locations[i][6] +' </p> <p class="mb-0"> Working Hours: '+ locations[i][7] +' </p> <p class="mb-1"> '+ locations[i][5] +' </p>';
				   
				   if(locations[i][9] != ''){
				   		pop_up_txt += '<a class="mb-1 ctm_link_clr" href="'+locations[i][9]+'" target="_blank">Get direction</a>'
				   }
				   
				  	pop_up_txt += '<p class="mb-2"></p> <p class="mb-0 mt-1 ctm_clr text-center">'+ locations[i][10] +'</p> <div class="branch-locator-button">';
				  
				 // if(locations[i][13] != ''){
				  	pop_up_txt += '<a class="secondary-button" href="#" data-branch-item-id="'+ locations[i][0] +'" data-branch-item-name="'+ locations[i][1] +'" data-branch-item-address="'+ locations[i][5] +'" data-branch-item-working-days="'+ locations[i][6] +'" data-branch-item-working-hours="'+ locations[i][7] +'"> <svg id="clock_1_" data-name="clock (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <path id="Path_1591" data-name="Path 1591" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.75A8.75,8.75,0,1,1,18.75,10,8.76,8.76,0,0,1,10,18.75Z" fill="#d12b8a"></path> <path id="Path_1592" data-name="Path 1592" d="M209.044,83.118h-1.25v6.509l3.933,3.933.884-.884-3.567-3.567Z" transform="translate(-198.419 -79.368)" fill="#d12b8a"></path></svg> Book a visit</a>';
				  //}
				  
				  pop_up_txt += '</div> <div class="ctm_pointer"> </div> </div> '; //<div class="row location-box-map" style="left:46%; top:25%"> 
		  
		  }
			
          infowindow.setContent( pop_up_txt );
           
          infowindow.open(map, marker);

          operate_branches_li_item(locations[i][4]);
           
        }
      })(marker, i));
    }
	
	
	//operate_booking_form_popup();
	
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