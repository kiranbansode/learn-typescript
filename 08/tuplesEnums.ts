// const stuff: (string | number)[] = [1, 'asd', 2];

// const color: number[] = [23, 45, 234, 234];
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'ok'];
// goodRes[0] = '200'; // This will give an Error
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();
// goodRes.pop();

const responses: HTTPResponse[] = [
	[404, 'Not Found'],
	[200, 'OK'],
];
