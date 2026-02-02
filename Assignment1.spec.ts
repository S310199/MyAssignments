import test, { chromium, webkit } from'@playwright/test'

test("Launch Browsers", async() => {
    const edgebrowser = await chromium.launch({channel: 'msedge',headless:false})
    const edgeContext = await edgebrowser.newContext()
    const edgepage= await edgeContext.newPage()
    await edgepage.goto("https:\\www.Redbus.in")

    const edpagetitle = edgepage.title()
    const edurl = edgepage.url()

    console.log("The Loaded Page in Edge Browser is:" +edpagetitle)
    console.log("The URL is:" +edurl)


    const webkitbrowser = await webkit.launch({headless:false})
    const webkitContext = await webkitbrowser.newContext()
    const webkitpage= await webkitContext.newPage()
    await webkitpage.goto("https:\\www.flipkart.com")

    const webkittitle = webkitpage.title()
    const webkiturl = webkitpage.url()

    console.log("The Loaded Page in Edge Browser is:" +webkittitle)
    console.log("The URL is:" +webkiturl)
}
)