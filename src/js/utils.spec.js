const Utils = require("./utils");
// To DO
//  Unit testing - Ideally I should separate the JS in main.handlebars in a separate JS file and that would mean I could test it. Using mock service worker and @testing-library. 
//  Utilizing "findByText" along with the "await" operator to verify comments are retrieved and rendered on the screen correctly. 
// I did manage to do manual testing through an HTML validator where you can grab the source of your page through Chrome and then paste it into the validator. 
describe( 'Utils', () => {
	describe( 'isHomePage', () => {
		it("should match if on homepage", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should match if on homepage and has query parameters", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/?foo=bar");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should match if on homepage and has hash navigation", () => {
			const utils = new Utils();
			window.history.pushState({}, "", "/#foo");
			expect(utils.isHomePage()).toBeTruthy();
		});

		it("should not match if on another page", () => {
			const utils = new Utils();
			window.history.pushState({}, '', '/news');
			expect(utils.isHomePage()).toBeFalsy();
		});

		it("should match with different homepage parameter", () => {
			const utils = new Utils({
				homePagePath: '/home'
			});
			window.history.pushState({}, "", "/home");
			expect(utils.isHomePage()).toBeTruthy();
		});
	});
});
 