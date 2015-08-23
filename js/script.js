var album ={}
function new_picture(file, title, description){
    return {'file': file, 'title': title, 'description': description};
}

function load_albums (){
    var album_2012 = [];
    album_2012.push(new_picture("images/1.jpg", "Title1", "Description1"));
    album_2012.push(new_picture("images/2.jpg", "Title2", "Description1"));
    album_2012.push(new_picture("images/3.jpg", "Title3", "Description1"));
    return album_2012;
}


$(document).ready(function(){$('.carousel').carousel({interval:false});

/* copy loaded thumbnails into carousel */
$('.panel .img-responsive').on('load', function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parent('a');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('#modalCarousel .carousel-inner'); 
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.panel-thumbnail>a').click(function(e){
  
    e.preventDefault();
    var idx = $(this).parents('.panel').parent().index();
  	var id = parseInt(idx);
  	
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	return false;
});


});