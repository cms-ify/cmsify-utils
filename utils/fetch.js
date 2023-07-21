const $fetch = async (
    {
        method = 'GET',
        body
    }, 
    url
) => {
    let result = undefined
    try {
        result = await fetch(url)
            .then(res => res)
            .catch(err => err)
    } catch(err) {
        result = err
    }
    return result
}

export default $fetch