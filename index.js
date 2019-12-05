function incrementValue()
		{
			var value = parseFloat(document.getElementById('number').value, 10);
			value = isNaN(value) ? 0 : value;
			if(value<10){
				value++;
				 var a= value * 40.99;
					document.getElementById('number').value = value;
					document.getElementById('number1').value = a;
					
			}
			

		}
		function decrementValue()
		{
			var value = parseFloat(document.getElementById('number').value, 10);
			value = isNaN(value) ? 0 : value;
			if(value>0){
				value--;
				var a= value * 40.99;
					document.getElementById('number').value = value;
					document.getElementById('number1').value = a;
			}
			
			

		}
		
		function incrementValue2()
		{
			var value = parseFloat(document.getElementById('number2').value, 10);
			value = isNaN(value) ? 0 : value;
			if(value<10){
				value++;
				var b =value * 10.99;
					document.getElementById('number2').value = value;
					document.getElementById('number3').value = b;
					
			}
			

		}
		function decrementValue2()
		{
			var value = parseFloat(document.getElementById('number2').value, 10);
			value = isNaN(value) ? 0 : value;
			if(value>0){
				value--;
				var b =value * 10.99;
					document.getElementById('number2').value = value;
					document.getElementById('number3').value = b;
			}
			
			

		}
		function calculate()
		{
			var field1=document.getElementById('number1').value;	
			var field2=document.getElementById('number3').value;
			var field3=document.getElementById('number4').value;
			
			
			var result=parseFloat(field1)+parseFloat(field2);
			
			var tax=result*parseFloat(field3)/100;
			
			var alltotal=result+tax;
			
			if(!isNaN(result))
			{
				document.getElementById('answer').innerHTML ="$"+ result;
				document.getElementById('taxanswer').innerHTML ="$"+ tax;
				document.getElementById('total').innerHTML ="$"+ alltotal;
			}
		}
		function enter()
		{
			document.getElementById('demo').innerHTML ="<input type='text' id='not' name='not'>";
		}
		function nott()
		{
			var field11=document.getElementById('number1').value;	
			var field12=document.getElementById('number3').value;
			
			
			
			var result1=parseFloat(field11)+parseFloat(field12);
			
			
			
			if(!isNaN(result1))
			{
				document.getElementById('answer1').innerHTML ="<H4>TOTAL AMOUNT $"+ result1+"</H4> ";
				
			}
		}