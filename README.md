# Test in node
A complete testing example from scratch in a node.js environment.

### Quick try it!!

##### Prerequisites
 * Node.js (>= 0.10)
 * MongoDb
 
###### Clone the repository
```
git clone https://github.com/codeflyer/testInNode.git .
```

###### Install the dependencies
```
npm install
```

###### Run the server (it run on port 3000)
```
npm start
```

###### In another terminal window run the test
```
make test
```

### How it works
This test suite start from an express skeleton. It show the steps to implements a testing environment. The steps are marked *git tags*. 

Show the tag list:

```
git tag
```

You can access each tag with the command:

```
git checkout < tag-name >
```

You can completely clean the current status of git with the command

```
git clean -df & git checkout .
```

After each switch remember to update the dependencies added in the package.json:
```
npm install
```

## Walkthrough
This walkthrough start from an express4 skeleton app and add a controller for the retrieving of a user information.

In each step it add some test and enance the application.


### 01-init-app

Prepare a clean environment:
```
rm -rf node_modules/
git checkout 01-init-app
git clean -df & git checkout .
npm install
```

This is a preparation step. It install the app to test. It's a simple express4 scheleton app. You can start it with

```
npm start
```

and check it in your browser
```
http://localhost:3000
```

### 02-install-mocha
Install mocha and add a dummy test.

**Mocha** is a javascript test framework that run in Node.js and directly in the browser.

http://visionmedia.github.io/mocha/

This step add:
 * Dependency on **mocha** in the *package.json* file.
 * A *Makefile* with the rules for run the test
 * A dummy test in the folder *tests*
 
After the checkout and the install of the new package try it with

```
make test
```

### 03-user-instance
Add a model class for the user management.

This step add:
 * A user model in the models folder
 * A test that simply tries to instance the model

### 04-should
Install **should** and enance the user model and the related test.

Should is an expressive, readable, test framework agnostic, assertion library.

https://github.com/visionmedia/should.js/

This step add:
 * Dependency on **should** in the *package.json* file.
 * Setters on **User** model.
 * Test for the setters using **should** assertions.

### 05-test-getter
Add getter on user model and tests it.

This step add:
 * Getters on **User** model.
 * Test for the getters using **should** assertions.

### 06-test-async
Add a service for the retrieving of the user, test an async method.

This step add:
 * A service class **UserManager** with an async method **getUserById**.
 * A test suite for the **UserManager** class with an async test method.

### 07-stub-sinon
Install *sinon* and add a UserDriver class.

Standalone test spies, stubs and mocks for JavaScript.
No dependencies, works with any unit testing framework.

http://sinonjs.org/

This step add:
 * Dependency on **sinon** in the *package.json* file.
 * Add an **UserDriver** class with an empty **getUserById method**.
 * Change the **UserManager** class adding the use of the driver for the retrieving of the data.
 * Add a stub method to the **UserManager** test that replace the calling to the driver.

### 08-sandbox-and-null
Show the use of Sandbox in sinon and the assetion on null object with should.

### 09-mongodb-conn

### 10-fixtures
### 11-add-controller
### 12-controller-test
### 13-rest-test
### 14-ready-to-test
### 15-coverage