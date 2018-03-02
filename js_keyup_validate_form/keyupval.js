$(document).ready(function(){
	$("#sname").keyup(function(){
		$.post("process.php",{"sname": $("sname").val()},
			function(data){
				if(data == "Student name may be fictious"){
					$("#label-name-msg").html("Student name my be fictious");
					$("#std-name").removeClass().addClass('form-group has-warning has-feedback');
					$("#glyphicon-name").removeClass().addClass('glyphicon glyphicon-warning-sign form-control-feedback');
				}else if(data == "Student name cannot contain digits"){
					$("#label-name-msg").html("Student name cannot contain digits");
					$("#std-name").removeClass().addClass('form-group has-error has-feedback');
					$("#glyphicon-name").removeClass().addClass('glyphicon glyphicon-remove form-control-feedback');
				}else if(data == "Empty"){
					$("#label-name-msg").html("").removeClass();
					$("#std-name").removeClass();
					$("#glyphicon-name").removeClass();
				}else{
					$("#label-name-msg").html("").removeClass();
					$("#std-name").removeClass().addClass('form-group has-success has-feedback');
					$("#glyphicon-name").removeClass().addClass('glyphicon glyphicon-ok form-control-feedback');
				}
			});
	});

	$("#sid").keyup(function(){
		$.post("process.php",{"sid": $("#sid").val()},
			function(data2){
				if (data2 == "Student ID must contain only dogits"){
					$("#label-num-msg").html("Student ID must only contain digits");
					$("#std-num").removeClass().addClass('form-group has-error has-feedback');
					$("#glyphicon-num").removeClass().addClass('glyphicon glyphicon-remove-sign form-control-feedback');
				}else if(data2 == "Student ID is suspicious"){
					$("#label-num-msg").html("Student ID is suspicious");
					$("#std-num").removeClass().addClass('form-group has-warning has-feedback');
					$("#glyphicon-num").removeClass().addClass('glyphicon glyphicon-warning-sign form-control-feedback');
				}else if(data2 == "Empty2"){
					$("#label-num-msg").html("").removeClass();
					$("#std-num").removeClass();
					$("#glyphicon-num").removeClass();
				}else {
					$("#label-num-msg").html("").removeClass();
					$("#std-num").removeClass().addClass('form-group has-success has-feedback');
					$("#glyphicon-num").removeClass().addClass('glyphicon glyphicon-ok form-control-feedback');
				}
			});
	});

	$("#pro").keyup(function(){
		$.post("process.php",{"program": $("#program").val()},
			function (data3) {
				if(data3 == "Program may be fictious."){
					$("label-program").html("Program may be ficitious.");
					$("#std-program").addClass('form-group has-warning has-feedback');
					$("#glyphicon-program").addClass('glyphicon glyphicon-warning-sign form-control-feedback');
				}else if(data3 == "program does not exist"){
					$("label-program").html("Program does not exist.");
					$("#std-program").addClass('form-group has-error has-feedback');
					$("#glyphicon-program").addClass('glyphicon glyphicon-remove form-control-feedback');
				}else if(data3 == "Empty3"){
					$("label-program").html("").removeClass();
					$("#std-program").removeClass().addClass('form-group has-success has-feedback');
					$("#glyphicon-program").removeClass().addClass('glyphicon glyphicon-ok form-control-feedback');
				}
			});
	});

	$("#btn").click(function(){
		if(($("label-name-msg").text() == "Student name may be fictious") || ($("#label-num-msg").text() == "Student ID is suspicious") || ($("#label-program").text() == "Program may be ficitious.")){
			var tabel = "<tr>";
			tabel += "<td class='warning'>"+ $("#sname").val()+"</td>";
			tabel += "<td class='warning'>"+ $("#sid").val()+"</td>";
			tabel += "<td class='warning'>"+ $("#program").val()+"</td>";

			$("#tbl").append(tabel);
			document.getElementById('std-form').reset();

			$("#label-name-msg").html("").removeClass();
			$("#std-name").removeClass();
			$("#glyphicon-name").removeClass();

			$("#label-num-msg").html("").removeClass();
			$("#std-num").removeClass();
			$("#glyphicon-num").removeClass();

			$("#label-program").html("").removeClass();
			$("#std-program").removeClass();
			$("#glyphicon-program").removeClass();
			
			

	}else{
		var tabel = "<tr>";
		tabel += "<td>"+$("#sname").val()+"</td>";
		tabel += "<td>"+$("#sid").val()+"</td>";
		tabel += "<td>"+$("#program").val()+"</td>";
		tabel += "</tr>";

		$("#tbl").append(tabel);
		document.getElementById('std-form').reset();
		
			$("#label-name-msg").html("").removeClass();
			$("#std-name").removeClass();
			$("#glyphicon-name").removeClass();

			$("#label-num-msg").html("").removeClass();
			$("#std-num").removeClass();
			$("#glyphicon-num").removeClass();

			$("#label-program").html("").removeClass();
			$("#std-program").removeClass();
			$("#glyphicon-program").removeClass();
	}
	});

});
