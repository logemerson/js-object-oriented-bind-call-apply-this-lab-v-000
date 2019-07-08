function justInvoke(fn) {
	return fn();
}

function setThisWithCall(fn, thisValue, arg) {
	return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, argArray) {
	return fn.apply(thisValue, argArray);
}

function returnNewFunctionOf(copiedFn, thisValue) {
	return copiedFn.bind(thisValue);
}