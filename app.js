// Initialize Supabase
// const SUPABASE_URL = "https://pwjvisderoyqbbxifzrw.supabase.co";
// const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3anZpc2Rlcm95cWJieGlmenJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMzM3MzksImV4cCI6MjA3MTYwOTczOX0.eesSF4krIK1HkNNwjoIsy6bOk2MS73CKCaUV__T4ewA";
// const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===========<<< First Column [categories] >>>==================

// Elements
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

let lastActive = { before: bfrClkChatIcn, after: aftrClkChatIcn }

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

bfrClkChatIcn.onclick = () =>  activateIcon(bfrClkChatIcn , aftrClkChatIcn)
bfrClkStatsIcn.onclick = () => activateIcon(bfrClkStatsIcn , aftrClkStatsIcn)
bfrClkChanlIcn.onclick = () => activateIcon(bfrClkChanlIcn , aftrClkChanlIcn)
bfrClkCmuntesIcn.onclick = () => activateIcon(bfrClkCmuntesIcn , aftrClkCmuntesIcn)
bfrClkSettingIcn.onclick = () => activateIcon(bfrClkSettingIcn , aftrClkSettingIcn)

// ===========<<< Second Column [Chats|Contacts] >>>==================

// Elements
let btnGrp_All = document.getElementById("btnGrp_All")
let btnGrp_Unread = document.getElementById("btnGrp_Unread")
let btnGrp_Favorites = document.getElementById("btnGrp_Favorites")
let btnGrp_Groups = document.getElementById("btnGrp_Groups")

let allBtns = [btnGrp_All , btnGrp_Unread , btnGrp_Favorites , btnGrp_Groups]

function showBtnClr(btn) {

    allBtns.forEach(b => {
        b.style.backgroundColor = "white"
        b.style.border = "1px rgb(209 213 219) solid"
        b.style.color = "rgb(75 85 99)"
    });
    btn.style.backgroundColor = "#D9FDD3"
    btn.style.border = "1px #1DAA61 solid"
    btn.style.color = "#15603E"

}

btnGrp_All.onclick = () => showBtnClr(btnGrp_All)
btnGrp_Unread.onclick = () => showBtnClr(btnGrp_Unread)
btnGrp_Favorites.onclick = () => showBtnClr(btnGrp_Favorites)
btnGrp_Groups.onclick = () => showBtnClr(btnGrp_Groups)