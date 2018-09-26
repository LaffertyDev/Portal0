import { App } from "./app";


describe("Client App", () => {
	test("Should Not Be Null", () => {
		const app = new App();
		expect(app).not.toBeNull();
	});
});
