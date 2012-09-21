$('#index').on('pageinit', function(){
	//code needed for home page goes here
});	

$( '#course1' ).live( "pageshow", function() {
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ) {
            //console.log(data);
            $( '#c1List' ).empty();
            $( '<li>' ).attr( "data-role", "list-divider" )
                        .text( "Game Date - Name" ).appendTo('#c1List');
           $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options       = times.value.Options;
                    if ( Options[1] === "Course 1" ) {
                        var date      = times.value.date;
                        var reservist = times.value.reservist;
                            
                        $( '<li>' ).append(
                            $( '<a>' )
                                .attr( "href", "time.html?reservist=" + 
                                        reservist[1] )
                                .text( date[1] + " - " + reservist[1] )
                        ).appendTo( '#c1List' );
                    }
            });
            $( '#c1List' ).listview( 'refresh' );
        }
    });
});

$( '#course2' ).live( "pageshow", function() {
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ) {
            //console.log(data);
            $( '#c2List' ).empty();
            $( '<li>' ).attr( "data-role", "list-divider" )
                        .text( "Game Date - Name" ).appendTo('#c2List');
           $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options       = times.value.Options;
                    if ( Options[1] === "Course 2" ) {
                        var date      = times.value.date;
                        var reservist = times.value.reservist;
                            
                        $( '<li>' ).append(
                            $( '<a>' )
                                .attr( "href", "time.html?reservist=" + 
                                        reservist[1] )
                                .text( date[1] + " - " + reservist[1] )
                        ).appendTo( '#c2List' );
                    }
            });
            $( '#c2List' ).listview( 'refresh' );
        }
    });
});

$( '#course3' ).live( "pageshow", function() {
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ) {
            //console.log(data);
            $( '#c3List' ).empty();
            $( '<li>' ).attr( "data-role", "list-divider" )
                        .text( "Game Date - Name" ).appendTo('#c3List');
           $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options       = times.value.Options;
                    if ( Options[1] === "Course 3" ) {
                        var date      = times.value.date;
                        var reservist = times.value.reservist;
                            
                        $( '<li>' ).append(
                            $( '<a>' )
                                .attr( "href", "time.html?reservist=" + 
                                        reservist[1] )
                                .text( date[1] + " - " + reservist[1] )
                        ).appendTo( '#c3List' );
                    }
            });
            $( '#c3List' ).listview( 'refresh' );
        }
    });
});

$( '#course4' ).live( "pageshow", function() {
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ) {
            //console.log(data);
            $( '#c4List' ).empty();
            $( '<li>' ).attr( "data-role", "list-divider" )
                        .text( "Game Date - Name" ).appendTo('#c4List');
           $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options       = times.value.Options;
                    if ( Options[1] === "Course 4" ) {
                        var date      = times.value.date;
                        var reservist = times.value.reservist;
                            
                        $( '<li>' ).append(
                            $( '<a>' )
                                .attr( "href", "time.html?reservist=" + 
                                        reservist[1] )
                                .text( date[1] + " - " + reservist[1] )
                        ).appendTo( '#c4List' );
                    }
            });
            $( '#c4List' ).listview( 'refresh' );
        }
    });
});

$( '#course5' ).live( "pageshow", function() {
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ) {
            //console.log(data);
            $( '#c5List' ).empty();
            $( '<li>' ).attr( "data-role", "list-divider" )
                        .text( "Game Date - Name" ).appendTo('#c5List');
           $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options       = times.value.Options;
                    if ( Options[1] === "Course 5" ) {
                        var date      = times.value.date;
                        var reservist = times.value.reservist;
                            
                        $( '<li>' ).append(
                            $( '<a>' )
                                .attr( "href", "time.html?reservist=" + 
                                        reservist[1] )
                                .text( date[1] + " - " + reservist[1] )
                        ).appendTo( '#c5List' );
                    }
            });
            $( '#c5List' ).listview( 'refresh' );
        }
    });
});

var urlVars = function(){
    var urlData   = $( $.mobile.activePage).data( "url" );
    var urlParts  = urlData.split( '?' );
    var urlPairs  = urlParts[1].split( '&' );
    var urlValues = {};
    for ( var pair in urlPairs ) {
        var keyValue   = urlPairs[pair].split( '=' );
        var key        = decodeURIComponent( keyValue[0] );
        var value      = decodeURIComponent( keyValue[1] );
        urlValues[key] = value;
    }
    return urlValues;
};

$( '#time' ).live( "pageshow", function() {
    var key = urlVars()["reservist"];
    //console.log(key);
    $('#timeList').empty();
    $.couch.db( "asd_week4" ).view( "week4/times", {
        success: function( result ){   
            //console.log(result);
             
             $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var reservist       = times.value.reservist;
                    if ( reservist[1] === key ) {
                        var Options     = times.value.Options;
                        var numberGames = times.value.numberGames;
                        var location    = times.value.location;
                        var date        = times.value.date;
                        var notes       = times.value.notes;
                        var id  = times.id;
                        var rev = times.value.rev;
                        console.log(id);
                        console.log(rev);
                        
                        $( '#deleteTime' ).on( 'click', function(){
                        var ask = confirm( "Are you sure you want to delete this Tee Time?" );
                        if (ask){
                            var doc = {
                                _id: id,
                                _rev: rev
                            };
                            $.couch.db("asd_week4").removeDoc(doc, {
                                success: function(data) {
                                    console.log(data);
                                    $.mobile.changePage($('#index'));
                                    alert( "Tee Time Deleted!" );
                                },
                                error: function(status) {
                                    console.log(status);
                                }
                            });
                        }
                        else{
                            alert( "Tee Time not deleted!" );
                            }
                        });
                        
                        var time = {
                            _id:  id,
                            _rev: rev,
                            Options: Options,
                            reservist: reservist,
                            numberGames: numberGames,
                            location: location,
                            date: date,
                            notes: notes
                        }
                        $( '#editTime' ).on( 'click', function(){
                            editTime( time );
                        });
                        
                        $( ' ' + 
                            '<div class="times">' +
                            '<p>' + Options[0]      + " " + Options[1] +
                            '<br>' + reservist[0]   + " " + reservist[1] + 
                            '<br>' + numberGames[0] + " " + numberGames[1] + 
                            '<br>' + location[0]    + " " + location[1] +
                            '<br>' + date[0]        + " " + date[1] +
                            '<br>' + notes[0]       + " " + notes[1] + '</p>' +
                            '</div>'
                            ).appendTo( '#timeList' );
                    }
                });
            }
        });
});

$( '#couchData' ).on('pageinit', function(){
	 
	 $( '#couchJsonButton' ).on( 'click', function () {
		$('#viewCouchData').empty();
        $.ajax( {
            url: '_view/times',
            type: 'GET',
            dataType: 'json',
            success:function ( result ) {
				//console.log(result);
                $.each( result.rows, function( index, times ){
                	//console.log(times.value.Options);
                	var Options     = times.value.Options;
                	var reservist   = times.value.reservist;
                	var numberGames = times.value.numberGames;
                	var location    = times.value.location;
                	var date        = times.value.date;
                	var notes       = times.value.notes;
                   
					//console.log(Options);
                    $( ' ' + 
					'<div class="times">' +
					'<p>' + Options[0]      + " " + Options[1] +
					'<br>' + reservist[0]   + " " + reservist[1] + 
					'<br>' + numberGames[0] + " " + numberGames[1] + 
					'<br>' + location[0]    + " " + location[1] +
					'<br>' + date[0]        + " " + date[1] +
					'<br>' + notes[0]       + " " + notes[1] + '</p>' +
					'</div>'
					).appendTo( '#viewCouchData' );
                
			
		});
			}
    });
});
});

$( '#remoteData' ).on('pageinit', function(){
	 
	 $( '#jsonButton' ).on( 'click', function () {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success:function ( result ) {
				//console.log(result);
                for ( var i = 0, len = result.teeTimes.length; i < len; i++ ) {
                    var item = result.teeTimes[i];
					//console.log(item);
                    $( ' ' + 
					'<div class="times">' +
					'<p>' + item.Options[0]      + " " + item.Options[1] +
					'<br>' + item.reservist[0]   + " " + item.reservist[1] + 
					'<br>' + item.numberGames[0] + " " + item.numberGames[1] + 
					'<br>' + item.location[0]    + " " + item.location[1] +
					'<br>' + item.date[0]        + " " + item.date[1] +
					'<br>' + item.notes[0]       + " " + item.notes[1] + '</p>' +
					'</div>'
					).appendTo( '#viewData' );
                }
            }
        });
    });
	
	$( '#xmlButton' ).on( 'click', function() {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.xml',
            type: 'GET',
            dataType: 'xml',
            success:function ( result ) {
				//console.log(result);
				$(result).find('item').each(function(){
					var course = $(this).find('Course').text();
					var reservist = $(this).find('Reservist').text();
					var numberGames = $(this).find('NumberofGames').text();
					var location = $(this).find('Location').text();
					var date = $(this).find('Date').text();
					var notes = $(this).find('Notes').text();
					$(''+
						'<div class="xmlData">'+
							'<p>'+ course +
							'<br>'+ reservist +
							'<br>'+ numberGames +
							'<br>'+ location +
							'<br>'+ date + 
							'<br>'+ notes +'</p>'+
						'</div>'
					).appendTo('#viewData');
				});
            }
        });
    });
		
	$( '#csvButton' ).on( 'click', function() {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.csv',
            type: 'GET',
            dataType: 'text',
            success:function ( result ) {
				//console.log(result);
				var lines = result.split("\n");
				//console.log(lines);
				var dataRow = lines[0];
				var dataCol = dataRow.split(",");
				for (var lineNum = 1; lineNum < lines.length; lineNum++) {
					var row = lines[lineNum];
					var columns = row.split(",");
					//console.log(columns);
					$(''+
							'<div class="csvData">'+
								'<p>' + dataCol[0] + " " + columns[0] +
								'<br>'+ dataCol[1] + " " + columns[1] +
								'<br>'+ dataCol[2] + " " + columns[2] +
								'<br>'+ dataCol[3] + " " + columns[3] +
								'<br>'+ dataCol[4] + " " + columns[4] +
								'<br>'+ dataCol[5] + " " + columns[5] + '</p>' +
							'</div>'
						).appendTo('#viewData');
				}
            }
        });
    });
		
});
		
$('#additem').on('pageinit', function(){

		var myForm = $( '#teeForm' );
		    myForm.validate({
			invalidHandler: function( form, validator ) {
			},
			submitHandler: function() {
			storeData();
		}
	});
	
	//any other code needed for addItem page goes here
	$( '#displayData' ).on( 'click', getData );
	$( '#clearData'   ).on( 'click', clearLocal );
	$( '#addNew'      ).on( 'click', windowReload );
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autoFillData = function (){
	 for ( var n in json )
		{
			var id = Math.floor( Math.random()*10001 );
			localStorage.setItem( id, JSON.stringify( json[n] ) );
		}
};

var getData = function(){
 toggleControls( "on" );
		if( localStorage.length === 0 )
		{
			alert( "You currently have no saved Tee Times. Auto add default Tee Times." );
			autoFillData();
		}
		//NEW
		/*$( '#showData' ).append( '<div id="items" /> ' );
		$( '#items' ).append( '<ul id="makeList" /> ' );
		for( var i = 0, len = localStorage.length; i < len; i++ )
		{
			$( '#makeList' ).append( '<li /> ' );
			var key         = localStorage.key( i );
			var value       = localStorage.getItem( key );
			var obj         = JSON.parse( value );
			$( '#makeList li' ).append( '<ul id="makeSubList" /> ' );
			for( var n in obj )
			{
				$( '#makeSubList' ).append( '<li />' );
				var optSubText      = obj[n][0] + " " + obj[n][1];
				$( '#makeSubList li' ).last().append( optSubText );
				$( '#li' ).last().append( '<li id="linksLi" /> ' );
			} 
			//makeItemLinks( localStorage.key( i ), $('linksLi') );
		}*/
		
		//OLD
		var makeDiv  = document.createElement( 'div' );
		makeDiv.setAttribute( "id", "items" );
		var makeList = document.createElement( 'ul' );
		makeDiv.appendChild( makeList );
		$( '#showData' ).append( makeDiv );
		//document.body.appendChild( makeDiv );
		//$( 'items' ).style.display = "block";
		for( var i = 0, len = localStorage.length; i < len; i++ )
		{
			var makeli      = document.createElement( 'li' );
			var linksLi     = document.createElement( 'li' );
			makeList.appendChild( makeli );
			var key         = localStorage.key( i );
			var value       = localStorage.getItem( key );
			var obj         = JSON.parse( value );
			var makeSubList = document.createElement( 'ul' );
			makeli.appendChild( makeSubList );
			//getImage( obj.group[1], makeSubList );
			for( var n in obj )
			{
				var makeSubli       = document.createElement( 'li' );
				makeSubList.appendChild( makeSubli );
				var optSubText      = obj[n][0] + " " + obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild( linksLi );
			} 
			makeItemLinks( localStorage.key( i ), linksLi );
		}
};

var storeData = function( key ){
	
		var id;
	
		if ( key ) 
		{
             console.log("key:" + key);
            $.couch.db("asd_week4").openDoc(key._id, {
                success: function(data) {
                    console.log(data);
                },
                error: function(status) {
                    console.log(status);
                }
            });
            $( '#submit' ).on( 'click', function(){
                doc = {
                    _id: key._id,
                    _rev: key._rev,
                    }
                    doc.Options      = ["Course:",           $( '#Options' ).val()];
                    doc.reservist    = ["Reservist:",        $( '#reservist' ).val()];
                    doc.numberGames  = ["Number of Games:",  $( '#numberGames' ).val()];
                    doc.location     = ["Location:",         $( 'input[name=location]:checked','#teeForm' ).val()];
                    doc.date         = ["Date:",        	  $( '#date' ).val()];
                    doc.notes        = ["Notes",             $( '#notes' ).val()];
                
                console.log(doc);
                $.couch.db("asd_week4").saveDoc(doc, {
                    success: function(data) {
                        console.log(data);
                        $.mobile.changePage($( '#index' ));
                        alert( "Time updated!" );
                    },
                    error: function(status) {
                        console.log(status);
                    }
                });
            });
			return false;
		}
		else
		{
			var id     = Math.floor( Math.random() * 10001 );
		
		
		var item       = {};
		
		item.Options      = ["Course:",           $( '#Options' ).val()];
		item.reservist    = ["Reservist:",        $( '#reservist' ).val()];
		item.numberGames  = ["Number of Games:",  $( '#numberGames' ).val()];
		item.location     = ["Location:",         $( 'input[name=location]:checked', '#teeForm' ).val()];
		item.date         = ["Date:",        	  $( '#date' ).val()];
		item.notes        = ["Notes",             $( '#notes' ).val()];
        //item._id          = [item.reservist[1]];
        
        var doc = {
                    _id: item.reservist[1]
                    };
        doc.Options      = ["Course:",           $( '#Options' ).val()];
		doc.reservist    = ["Reservist:",        $( '#reservist' ).val()];
		doc.numberGames  = ["Number of Games:",  $( '#numberGames' ).val()];
		doc.location     = ["Location:",         $( 'input[name=location]:checked', '#teeForm' ).val()];
		doc.date         = ["Date:",        	 $( '#date' ).val()];
		doc.notes        = ["Notes",             $( '#notes' ).val()];
        
        $.couch.db("asd_week4").saveDoc(doc, {
            success: function(data) {
            console.log(data);
        },
            error: function(status) {
            console.log(status);
        }
});
		
		localStorage.setItem( id, JSON.stringify( item ) );
		alert( "Tee Time Added!" );
        }
}; 

var	deleteItem = function (){
	var ask = confirm( "Are you sure you want to delete this Tee Time?" );
		if (ask)
		{
			localStorage.removeItem( this.key );
			window.location.reload();
			alert( "Tee Time deleted!" );
		}
		else
		{
			alert( "Tee Time not deleted." );
		}
};
					
var clearLocal = function(){
	if( localStorage.length === 0 ){
			alert( "You have no saved Tee Times." );
		}else{
			localStorage.clear();
			alert( "All Tee Times have been deleted!" );
			window.location.reload();
			return false;
		}
};

var windowReload = function(){
		$.mobile.changePage($('#index'),{transition:"fade"});
		return false;
}

function toggleControls( n )
	{
		switch( n )
		{
			case "on":
				$( '#teeForm' ).toggle( "hide" );
				//$( '#clearData' ).toggle( "show" );
				$( '#displayData' ).toggle( "hide" );
				$( '#addNew' ).removeClass( "ui-disabled" );
				break;
				
			case "off":
				$( '#teeForm' ).toggle( "show" );
				//$( '#clearData' ).toggle( "show" );
				$( '#displayData' ).toggle( "show" );
				$( '#addNew' ).addClass( "ui-disabled" );
				$( '#items' ).toggle( "hide" );
				break;
				
			default:
				return false;	
		}
	}

var editTime = function( time )
	{
		//var value = localStorage.getItem( this.key );
		//var item  = JSON.parse( value );
		
		//toggleControls( "off" );
        $.mobile.changePage($('#additem'));
        
        item = time;
        console.log(time);
		
		$( '#Options' ).val( item.Options[1] );
		$( '#reservist' ).val( item.reservist[1] );
		$( '#numberGames' ).val( item.numberGames[1] );
		$( '#location' ).val( item.location[1] );
		$( '#date' ).val( item.date[1] );
		$( '#notes' ).val( item.notes[1] );
        
        /*$( '#submit' ).on( 'click', function(){
            var doc = time;
            $.couch.db("asd_week4").saveDoc(doc, {
                success: function(data) {
                    console.log(data);
                    $.mobile.changePage($('#time'));
                    alert( "Time updated!" );
                },
                error: function(status) {
                    console.log(status);
                }
            });
		});*/
        
        
		//thiskey         = this.key;
		$( '#submit' ).on( 'click', storeData( item ) );
	}
	
function makeItemLinks( key, linksLi )
	{
		//NEW
		/*var editLink         = document.createElement( 'n' );
		editLink.href        = "#";
		editLink.key         = key;
		var editText         = "Edit Tee Times";
		$( '#editLink').on( "click", editItem );
		$( '#editLink' ).html( "editText" );
		$( '#linksLi' ).append( "editLink" );
		
		var breakTag         = document.createElement( 'br' );
		$( '#linksLi' ).append( "breakTag" );
		
		var deleteLink       = document.createElement( 'n' );
		deleteLink.href      = "#";
		deleteLink.key       = key;
		var deleteText       = "Delete Tee Time";
		$( '#deleteLink' ).on( "click", deleteItem );
		$( '#deleteLink' ).html( "deleteText" );
		$( '#linksLi' ).append( "deleteLink" );*/
		
		//OLD
		var editLink         = document.createElement( 'n' );
		editLink.href        = "#";
		editLink.key         = key;
		var editText         = "Edit Tee Time";
		editLink.addEventListener( "click", editItem );
		editLink.innerHTML   = editText;
		linksLi.appendChild( editLink );
		
		var breakTag         = document.createElement( 'br' );
		linksLi.appendChild( breakTag );
		
		var deleteLink       = document.createElement( 'n' );
		deleteLink.href      = "#";
		deleteLink.key       = key;
		var deleteText       = "Delete Tee Time";
		deleteLink.addEventListener( "click", deleteItem );
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild( deleteLink );
	}