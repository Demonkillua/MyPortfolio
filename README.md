# MyPortfolio

<div align="center" style="margin: 30px;">
    <a href="https://edwardgreczkowski.netlify.app/">
    <img alt="refine logo" src="https://cdn.sanity.io/images/u9rtq4p8/production/e672552457fdbfb644c8269c70093d89d91006ec-3806x2160.png?w=2000&fit=max&auto=format&dpr=2">
    </a>
</div>
<br/>

This portfolio project was created [React](https://react.dev/) and [Sanity](https://www.sanity.io/) following the online YouTube tutorial created by [Adrian Hajdin](https://github.com/adrianhajdin), which can be found [here](https://www.youtube.com/watch?v=XxXyfkrP298)

# Getting Started

After downloading the repository you will need to add a .env file containing your own ```REACT_APP_SANITY_TOKEN``` and ```REACT_APP_SANITY_PROJECT_ID``` which can be found through your own Sanity Dashboard. You will need to manually adjust your projectId and dataset in your `sanity.cli.js` and `sanity.config.js`.

### Make sure to install npm packages.

```bash
    npm install
```
You will need to do this within the sanity_backend directory as well.

### Running the development sever.

```bash
    npm start
```

*sanity_backend directory*
```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

*sanity_backend directory*
```bash
    npx sanity build
```

### Running the production server. 

```bash
    npm run start
```

## License

MIT
