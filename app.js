function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function reboot()
{
	correctOrder = ['m1', 'm2', 'm3', 'm4', 'm5']
	correctOrder.sort(() => .5 - Math.random())
	correctOrderAlt = [correctOrder[2], correctOrder[1], correctOrder[0], correctOrder[3], correctOrder[4]]

	console.log("Reboot!", correctOrder)
	
	val1 = getRandomInt(9)
	val2 = getRandomInt(6)

	document.querySelector("#" + correctOrder[0] + ">a-entity>a-box>a-text").setAttribute("value",val1)
	document.querySelector("#" + correctOrder[1] + ">a-entity>a-box>a-text").setAttribute("value","+")
	document.querySelector("#" + correctOrder[2] + ">a-entity>a-box>a-text").setAttribute("value",val2)
	document.querySelector("#" + correctOrder[3] + ">a-entity>a-box>a-text").setAttribute("value","=")
	document.querySelector("#" + correctOrder[4] + ">a-entity>a-box>a-text").setAttribute("value",(val1+val2))
}
