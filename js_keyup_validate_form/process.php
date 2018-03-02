<?php  
	if(isset($_REQUEST['sname'])){
		if($_REQUEST['sname'] == "Harry Potter" || $_REQUEST['sname'] == "Hermione Granger"){
			echo "Student name may be fictious";
		}else if(strpbrk($_REQUEST['sname'], '123456789') == TRUE){
			echo "Student name can not contain digits";
		} else if($_REQUEST['sname'] == ""){
			echo "Empty";
		}
	}

	if(isset($_REQUEST['sid'])){
		if($_REQUEST['sid'] == "000000000" || $_REQUEST['sid'] == "111111111" || $_REQUEST['sid'] == "222222222" || $_REQUEST['sid'] == "333333333" || $_REQUEST['sid'] == "444444444" || $_REQUEST['sid'] == "555555555" || $_REQUEST['sid'] == "666666666" || $_REQUEST['sid'] == "777777777" || $_REQUEST['sid'] == "888888888" || $_REQUEST['sid'] == "999999999"){
			echo "Student ID is suspicious";
		} else if(strpbrk($_REQUEST['sid'], 'abcdefghijklmnopqrstuvwxyz') == TRUE){
			echo "Student ID must contain only digits";
		} else if($_REQUEST['sid'] == ""){
			echo "Empty2";
		}
	}

	if(isset($_REQUEST['program'])){
		if($_REQUEST['program'] == "Basket Weaving" || $_REQUEST['program'] == "Beanstalk Climbing"){
			echo "Program may be fictious";
		} else if ($_REQUEST['program'] == "Geology" || $_REQUEST['program'] == "Microbiology") {
			echo "Program does not exist";
		} else if ($_REQUEST['program'] == "") {
			echo "Empty3";
		}
	} 
?>