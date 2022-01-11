function saveTextAsWord(filename = '') {
    let html = document.getElementById('stressArea').value
    let blob = new Blob(['html'], {
        type: 'application/msword'
    });
    let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
	
    filename = filename?filename+'.doc':'document.doc';

    let downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    document.body.removeChild(downloadLink);
}

	let lowest=1.00
	let highest=5.0
	let levelOfStress=''

   for(let stressLevel=lowest; stressLevel<=highest;stressLevel+=0.5){
	  levelOfStress+='<option>'+stressLevel+'</option>';

	   }
   let descriptionDiv=document.getElementById('secondParagraph')
	descriptionDiv.innerHTML='After You have written down your Problems, rate how stressed are you still?'

   let stressLevelDiv=document.getElementById('stressLevel')
	stressLevelDiv.innerHTML=levelOfStress

  
 
  let button = document.getElementById('save');
  button.addEventListener('click', saveTextAsFile);
