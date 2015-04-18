var JSFtp = require("jsftp");
var http = require("http");

var Ftp = new JSFtp({
  host: "ftp2.bom.gov.au",
  port: 21
});

var ftpFunction = function() {
	Ftp.get('anon/gen/fwo/IDN11060.xml', 'weather.xml', function(hadErr) {
		if (hadErr) {
		  console.error('There was an error retrieving the file.');
		}

		else {
		  console.log('File copied successfully!');
		}
	});
};

ftpFunction();

