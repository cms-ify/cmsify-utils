const applyRoutes = (app, routes) => {
    for(let route of routes) {
        if(route.method === 'GET') {
            app.get(route.path, route.handler)
        }
        if(route.method === 'POST') {
            app.post(route.path, route.handler)
        }
        if(route.method === 'PUT') {
            app.put(route.path, route.handler)
        }
        if(route.method === 'DELETE') {
            app.delete(route.path, route.handler)
        }
    }
}

class Route {
    constructor({ method, path, handler }) {
        this.method = method
        this.path = path
        this.handler = handler
    }
}

export { applyRoutes, Route }
export default { applyRoutes, Route }