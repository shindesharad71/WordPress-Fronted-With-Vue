# WordPress Frontend With Vue & WordPress REST API

A Frontend For WordPress Made with Vue JS & WordPress REST API.

* WordPress Blog URL - http://sharadshinde.in/client
* Frontend With Vue - http://sharadshinde.in/vue

## Demo

![Demo](https://github.com/shindesharad71/WordPress-Fronted-With-Vue/blob/master/demo.gif?raw=true "Demo")

## To Do & Feature

- [x] Single page js app with **Vue js** framework.
- [x] A Blog should have one entry point in menu and others should be pages.
- [x] On selecting the blog, we should be able to navigate blog posts with pagination.
- [x] You must use wp-rest-api and custom field should be available in rest api for posts.
- [x] On single blog post, it should display author.
- [x] Tags - category should be displayed and should be clickable and click it should display all page/posts with that category/tag.
- [x] Add Commets On Posts.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Extra WordPess Customization

* Install Plugin - Better REST API Featured Images

* anonymous comment by default is disabled with the 4.7 API. However, there is a filter, you can use: 
Place it in themes sections under **functions.php**

```php 
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
```