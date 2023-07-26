/* 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.

JS has introduced the .at method for this purpose, but solve this algo w/o it.
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */

function nthLast(items, nthToLast) {
	var output = "";
	if (items.length > 0) {
		for (i = items.length - 1; i >= 0; i--) {
			if (items[items.length - nthToLast] === undefined) {
				output = null;
			} else {
				output = items[items.length - nthToLast];
			}
		}
	} else {
		output = null;
	}
	console.log(output);
}

// Tests
const result1 = nthLast(arr1, idx1);
console.log("should be", expected1);

const result2 = nthLast(arr2, idx2);
console.log("should be", expected2);

const result3 = nthLast(arr3, idx3);
console.log("should be", expected3);

const result4 = nthLast(arr4, idx4);
console.log("should be", expected4);

const result5 = nthLast(arr5, idx5);
console.log("should be", expected5);