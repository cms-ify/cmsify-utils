const applyRelativePathPackages = ({ app, express, __dirname }) => {
    app.use('/cmsify', express.static(__dirname + '/node_modules/cmsify'))
    app.use('/cmsify-frontend', express.static(__dirname + '/node_modules/cmsify-frontend'))
    app.use('/cmsify-admin', express.static(__dirname + '/node_modules/cmsify-admin'))
    app.use('/cmsify-utils', express.static(__dirname + '/node_modules/cmsify-utils'))
}

export default applyRelativePathPackages