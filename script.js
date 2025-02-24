function stringChop(str, size) {
  // Handle edge cases
  // if (str.length === 0 || size <= 0) return [];

  // let ans = [];
  // let temp = "";
  // let x = 0;

  // for (let i = 0; i < str.length; i++) { // Corrected `int` to `let`
  //   temp += str[i]; // Add current character to temp
  //   x++;

  //   if (x === size) {
  //     ans.push(temp); // Push the completed chunk to ans
  //     x = 0; // Reset counter
  //     temp = ""; // Reset temp
  //   }
  // } 

  // // Add remaining characters as the last chunk
  // if (temp.length > 0) {
  //   ans.push(temp);
  // }

  // return ans;
	 if (!str) return [];
	let res=[];

	for(let i=0;i<str.length;i+=size){
		res.push(str.substring(i,i+size));
	}

	return res;
}

// Do not change the code below
const str = prompt("Enter String."); 
const size = parseInt(prompt("Enter Chunk Size."), 10); // Convert size to integer
alert(stringChop(str, size));
