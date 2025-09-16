// Initialize Supabase
// const SUPABASE_URL = "https://pwjvisderoyqbbxifzrw.supabase.co";
// const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3anZpc2Rlcm95cWJieGlmenJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzM3MzksImV4cCI6MjA3MTYwOTczOX0.eesSF4krIK1HkNNwjoIsy6bOk2MS73CKCaUV__T4ewA";
// const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// First Column [categories] Elements
let bfrClkChatIcn  = document.getElementById("bfrClkChatIcn")
let aftrClkChatIcn = document.getElementById("aftrClkChatIcn")

let bfrClkStatsIcn  = document.getElementById("bfrClkStatsIcn")
let aftrClkStatsIcn = document.getElementById("aftrClkStatsIcn")

let bfrClkChanlIcn  = document.getElementById("bfrClkChanlIcn")
let aftrClkChanlIcn = document.getElementById("aftrClkChanlIcn")

let bfrClkCmuntesIcn  = document.getElementById("bfrClkCmuntesIcn")
let aftrClkCmuntesIcn = document.getElementById("aftrClkCmuntesIcn")

let bfrClkSettingIcn  = document.getElementById("bfrClkSettingIcn")
let aftrClkSettingIcn = document.getElementById("aftrClkSettingIcn")

let lastActive = null

function activateIcon(before , after) {

    if (lastActive) {
        lastActive.before.classList.remove("hidden")
        lastActive.after.classList.add("hidden")
    }

    // active current
    before.classList.add("hidden")
    after.classList.remove("hidden")

    // update lastActive
    lastActive = { before, after }
    
    // Get lastActive [.]
    // console.log(lastActive);
    // console.log("Before => " , lastActive.before);
    // console.log("After => " , lastActive.after);

}

// Chat
bfrClkChatIcn.onclick = () =>  {activateIcon(bfrClkChatIcn , aftrClkChatIcn)}
// Stats
bfrClkStatsIcn.onclick = () => {activateIcon(bfrClkStatsIcn , aftrClkStatsIcn)}
// Stats
bfrClkChanlIcn.onclick = () => {activateIcon(bfrClkChanlIcn , aftrClkChanlIcn)}
// Communities
bfrClkCmuntesIcn.onclick = () => {activateIcon(bfrClkCmuntesIcn , aftrClkCmuntesIcn)}
// Setting
bfrClkSettingIcn.onclick = () => {activateIcon(bfrClkSettingIcn , aftrClkSettingIcn)}