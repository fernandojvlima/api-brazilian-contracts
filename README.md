# api-brazilian-contracts
Api para retornar compras e contratos feitos pelo Governo Brasileiro / Api to return purchases and contracts made for the Brazilian Government

Starting using just the ES fundamentals from the Rocketseat (Starter Course).

Preparing the enviroment:

ES6 Readme

-> Install node from nodes.org (its version is indicated)
To check the version : node  - - version

-> Install Yarn 

After these… in the root of the project:

Using terminal:

Yarn init -y
Obs: this process will create the package.json with information of dependencies of your application.

Add dependence CLI:
Yarn add @babel/cli
Obs: it will enable the command line to us with Babel.

Add dependence Preset Env
Yarn add @babel/preset-env

After these processes , note that has added in your file yarn.lock and node_modules ( use .gitignore on it).

Setting up Babel in your project:
-> Create a new file named (.babelrc)
In the file:
{
	“presets” : [“@babel/preset-env”]
}
Obs: Babel will check the environment you are using and make the bridge to the browse (ES6,ES7, ES8 in pure JS).

In the package.json open the “scripts”: 
{
	“dev”: “babel ./main.js -o ./bundle.js -w”
}

Add dependence Core
Yarn add @babel/core

In your index.html , in the script tag, add your src=“bundle.js”

Add dependence Rest, Spread
Yarn add @babel/plugin-proposal-object-rest-spread

-> In babelrc , insert “plugins” in the object:
“plugins” : [“@babel/plugin-proposal-object-rest-spread”]

*********
Configuring WEBPACK
It is a service that makes possible to work with many different sources of JS files (not only main.js for example), all the files will be sent to bundle normally.

To avoid uploading all the code, now go to package.json, and change the “dependencies” to “devDependencies”.
From this point, when you add a dependence, use -D at the final of the command line.

Add dependence Webpack
yarn add webpack webpack-cli -D

Now your package.json should be like this:
{
  "name": "es6-fundamentals",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/fernandojvlima/es6-fundamentals.git",
  "author": "Fernando Lima <fernandojvlima@gmail.com>",
  "license": "MIT",

  "devDependencies": {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    ”webpack": "^4.40.1",
    "webpack-cli": "^3.3.8”
  },
  "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
}


-> After this you added them, create a file with web pack configs, named as : webpack.config.js

module.exports = {
    entry: ‘./main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,  
              use: {
                  loader: 'babel-loader',
              }
            }
        ],
    },
};

-> Go to the terminal to install Babel Loader
Yarn add babel-loader -D

At this point, you can go to package.json  and change the “dev”: “webpack-dev-server —mode=development -w“

In the Chapter 2, Webpack dev server: let’s create a folder in the root called public, and src 
All code  js will transferred to this folder (src), 
To public folder we will transfer the files without tracking.

Changing the files to src, its necessary to change the input and output from  webpack-config:
 entry: './src/main.js',
    output: 
{
        path: __dirname + '/public',
        filename: 'bundle.js',
},

-> Add dependence Webpack-dev-server
Yarn add webpack-dev-server -D  

After installed, go to web pack.config to write down:

(After the entry above)
devServer: 
{
        contentBase: __dirname + '/public'
 },

-> In the package.json:
"scripts": 
{
    "dev": "webpack-dev-server --mode=development"
 }
Note: to work with the project offline

After this process a server will run (8080)…
 If you send the code to production, so you run :
“build”: “webpack —mode=production”
the cmd: yarn build 

With the server each update will be processed straight.

At this moment of the project, we are going to work with ES8, with the concepts of Async and Await.


Add the plugin:
Yarn add @babel/plugin-transform-async-to-generator -D

Add polyfill
Yarn add @babel/polyfill -D

In the babelrc;
  "@babel/plugin-transform-async-to-generator"

In the webpack.config.js:
entry: [ '@babel/polyfill','./src/main.js'],

After theses procedures, we are able to use async and await.

Now that we have Async and Await Working, so we will do requisition to API`s through this feature using Axios.

Add Axios
yarn add axios 

In the main.js, import it:
Import axios from ‘axios’ ;

