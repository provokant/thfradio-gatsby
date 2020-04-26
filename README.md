<div align="center">
  <h1>THF Radio - Landingpage v1</h1>
  <sup>GatsbyJS · iCal · Contentful · Mixcloud · YAML · Markdown</sup>
</div>

## Quick start

1.  **Clone the repository**

    Use the git CLI to clone the repository.

    ```shell
    git clone git@github.com:nextlevelshit/nls-gatsby-thfradio.git
    ```

1. **Download dependencies**

    ```shell
    yarn

    # OR

    npm install
    ```

1.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell

    yarn start

    ## OR

    gatsby develop

    ## OR

    ./node_modules/gatsby-cli/lib/index.js develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-uno` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Built time**

    If you want to serve our repository, you will have to build the repository and point your domain to the `/public` folder.
    
    ```shell
    yarn build

    ## OR

    rm -rf .cache && rm -rf public && gatsby build

    ## OR

    rm -rf .cache && rm -rf public && ./node_modules/gatsby-cli/lib/index.js build
    ```

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── data
        ├── markdown
        └── yaml
    ├── node_modules
    ├── public
    └── src
        ├── atoms
        ├── fonts
        ├── images
        ├── molecules
        ├── organisms
        ├── pages
        ├── styles
        ├── templates
        └── layout.js
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── yarn.lock

1.  **`/data`**: This directory contains all static content including your markdown files.

    3.1. **`/data/markdown`**: This directory includes all routable markdown files. Mind to add a `slug` parameter into the frontmatter of each file, otherwise it won't get a route.

    3.2. **`/data/yaml`**: All other static content can be provided through these YAML files. They are easily queryable with GraphQL.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for „source code”.

    3.1. **`/src/atoms`**: This directory contains reuasable components that you can implement on purpose. They run as stand-alone and do not have any dependencies to other modules, components or pages. Some are organized in directories, if you include some styling.

    3.2. **`/src/fonts`**: This directory contains all font family files, that are used on your webpage.

    3.3. **`/src/images`**: This direcotry contains (for now) all the images used for your website.

    3.4. **`/src/molecules`**: This directory contains reuasable components that you can implement on purpose. They are mostly built on top of some gathered components from the `src/atoms` folder.
    
    3.5. **`/src/organisms`**: This directory contains reuasable components that you can implement on purpose. They are mostly built on top of some gathered components from the `src/molecules` folder.

    3.6. **`/src/pages`**: This directory contains all `isCreatedByStatefulCreatePages` labeled files. If you want to add manually a specific route, add a file into this folder. Otherwise there is mostly the `404.js` and `index.js` files included.
 
    3.7. **`/src/styles`**: This directory contains the main part of your styles, defines CSS variables and imports the tailwind functionality. All global stylings that are not connected to a specific component (see above) come here.
 
    3.8. **`/src/templates`**: This directory contains templates which are helpful to generate routable pages inside of `gatsby-node.js`.

    3.9. **`/src/layout.js`**: This file holds the complete template of our website. All templates are based on top of this file.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9. **`README.md`**: A text file containing useful reference information about our project.

10. **`tailwind.config.js`**: A configuration file for changing the default styling parameters for Tailwind CSS. General styling adaptions should be done inside this file instead of overwriting everything in the SCSS files or component styles.

13. **`yarn.lock`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t and shouldn't change this file manually).**

## Who to ask?

This repository is maintained by [Michael Czechowski](mailto:mail@dailysh.it) in 2020. If you're having any questions, don't hesitate to write an email.

