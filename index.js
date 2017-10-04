const osmosis = require( 'osmosis' );

function test () {
	console.log( arguments )
}
osmosis
.get('www.wuxiaworld.com')
.find( '.stacked-list > li' )
.set( {
	'title'      : '.title',
	'updated_at' : '.ww_elapsed_time@data-releasetime'
} )
.data( novel => console.log( '-----' ) )
.then( (data, a, b ) => test( b ) )
.error(console.log)