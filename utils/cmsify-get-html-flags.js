
/**
 * cmsifyMapper should be an object reference the flagName to a class.
 * @returns array of cmsifyFlags
 */
const cmsifyGetHtmlFlags = (cmsifyMapper) => {
    let cmsifyFlagNames = Object.keys(cmsifyMapper)
    let cmsifyFlags = []

    for(let flagName of cmsifyFlagNames) {
        let flagClass = cmsifyMapper[flagName]
        const htmlElements = document.querySelectorAll(`[${flagName}]`)
        for(let htmlElement of htmlElements) {
            let flagValue = htmlElement.getAttribute(flagName)
            cmsifyFlags.push(new flagClass({ flagName, flagValue, htmlElement }))
        }
    }

    return cmsifyFlags
}

export default cmsifyGetHtmlFlags