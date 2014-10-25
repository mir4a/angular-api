exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',
//  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar', // FIXME Change it according your installation of selenium
  seleniumServerJar: '/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  specs: ['e2e/*Spec.js']
}