let browser = "Chrome"

function checkBrowserversion(callback)
{    console.log("Identifying the version........")
    setTimeout(()=>{version(callback)},5000)
}

function version(callback)
{
    console.log("The version is :")
    callback()
}
function browse()
{
    console.log(browser)
}

checkBrowserversion(browse)

