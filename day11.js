process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function(data) {
	input_stdin += data;
});
process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

function main() {
	var arr = [];
	var arrTotal;
	for (arr_i = 0; arr_i < 6; arr_i++) {
		arr[arr_i] = readLine().split(' ');
		arr[arr_i] = arr[arr_i].map(Number);
	}
	for (i = 0; i < (arr.length - 2); i++) {
		for (y = 0; y < (arr.length - 2); y++) {
			var total = parseInt(arr[i][y]) + parseInt(arr[i][y + 1]) + parseInt(arr[i][y + 2]) + parseInt(arr[i + 1][y + 1]) + parseInt(arr[i + 2][y]) + parseInt(arr[i + 2][y + 1]) + parseInt(arr[i + 2][y + 2]);
			if (!arrTotal && arrTotal != 0) {
				arrTotal = total;
			}
			if (total > arrTotal) {
				arrTotal = total;
			}
		}
	}
	console.log(arrTotal);
}