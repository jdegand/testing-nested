# Testing Nested

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #18 Nested Comp Testing

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
- [Testing Library Angular](https://testing-library.com/docs/angular-testing-library/intro)
- [Jest](https://jestjs.io)
- [Cypress](https://www.cypress.io)

## Directions

We have a small application that sends a title to a fake backend when you type inside a input. If the title is correctly typed, the request is sent otherwise you get a nice error and the request is not sent.

## Thoughts

- The ChildComponent is really the parent component of many other components.  To test nested components, you primarily the test the nested component's functionality in its' parent component.
- I looked at different ways of mocking the HttpService.  Check [useful resources](#useful-resources).
- My solution is basically matches this [Angular Testing Library Component Provider example](https://github.com/testing-library/angular-testing-library/blob/9f9e8c385142218b1cc4439b050f8603780bfe7d/src/app/examples/05-component-provider.spec.ts).
- Looking at the solution, it could possibly be outdated.  
- createMockWithValues seems to be a newer method - search results for it are limited.  
- Code coverage is not 100% when you just test that the method has been called.  
- I tested Thomas' solution and his code coverage matched mine.  
- Is it a bad practice to use toHaveBeenCalledTimes(0) ?

## How to Use

```bash 

git clone https://github.com/jdegand/testing-nested.git

# cd into the directory
npm install

# Jest 

npm test

# Jest with Coverage

npm run test:coverage

# Cypress

npm run cypress:open
```

## Useful Resources

- [Github](https://github.com/testing-library/angular-testing-library/blob/9f9e8c385142218b1cc4439b050f8603780bfe7d/src/app/examples/05-component-provider.spec.ts) - angular testing library example with component provider
- [snyk](https://snyk.io/advisor/npm-package/@testing-library/angular/functions/@testing-library%2Fangular%2Fjest-utils.createMock) - jest utils createMock
- [blog](https://openvalue.blog/posts/2022/11/28/angular_jest_testing_library/) - angular jest testing library
- [Github](https://github.com/RamzanTum/q-and-a) - source code of the blog example above
- [Stack Overflow](https://stackoverflow.com/questions/53898085/check-if-an-error-has-been-written-to-the-console) - check if an error has been written to the console
- [Cypress Docs](https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-spy-on-consolelog) - how do I spy on console.log?
- [YouTube](https://www.youtube.com/watch?v=ZslHKPtwIhA) - Spying On The Console Log Method