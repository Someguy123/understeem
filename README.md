UnderSteem
========

UnderSteem is a fork of Steemit. Unlike Steemit, we will do our best to avoid censorship within the 
website, including NSFW content visible by default.

## Installation

#### Install dependencies

```bash
# Install at least Node v6.3 if you don't already have it (NVM recommended)
nvm install v6

npm install
npm install -g babel-cli
```

#### Create config file

```bash
cd config
cp steem-example.json steem-dev.json
```

(note: it's steem.json in production)

#### Install mysql server
 
OS X :

```bash
brew update
brew doctor
brew upgrade
brew install mysql
mysql.server restart
```

Debian based Linux:

```bash
sudo apt-get update
sudo apt-get install mysql-server
```

Now launch mysql client and create steemit_dev database:
```bash
mysql -u root
> create database steemit_dev;
```
 
Install `sequelize-cli` globally:

```bash
npm install -g sequelize sequelize-cli pm2 mysql
```

Run `sequelize db:migrate` in `db/` directory.


### Development

```bash
npm start
```

You now have your development front end running at localhost:3002, connected to the main public steem blockchain. You don't need 
to run ```steemd``` locally, by default you will connect to ```ws://node.steem.ws```.  Use your regular account name and 
credentials to login -- there is no separate dev login.

#### Style Guides

##### File naming and location

- Prefer CamelCase js and jsx file names
- Prefer lower case one word directory names
- Keep stylesheet files close to components
- Component's stylesheet file name should match component name

##### Js & Jsx
We are using _Airbnb JavaScript Style Guide_ with some modifications (see .eslintrc).
Please run _eslint_ in the working directory before committing your changes and make sure you didn't introduce any new styling issues.

##### CSS & SCSS
If component requires a css rule, please use its uppercase name for the class, e.g. "Header" class for the header's root div.
We adhere to BEM methodology with exception for Foundation classes, here is an example for the Header component:

```html
<!-- Block -->
<ul class="Header">
  ...
  <!-- Element -->
  <li class="Header__menu-item">Menu Item 1</li>
  <!-- Element with modifier -->
  <li class="Header__menu-item--selected">Element with modifier</li>
</ul>
```

### Production

If you want to test it locally in production mode, just run the following commands:

```bash
npm run build
npm run prod
```

or via pm2:

```bash
npm run build
npm -i -g pm2 # one time
pm2 start config/process.json
```


## Issues

To report a non-critical issue, please file an issue on this GitHub project.

If you find a security issue please report details to: secure[at]steemit[dot]com

We will evaluate the risk and make a patch available before filing the issue.
