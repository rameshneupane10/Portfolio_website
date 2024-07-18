var tabs=document.getElementsByClassName("tab");
var tabcontents=document.getElementsByClassName("tab-contents");

function Opentab(tabname)
{
    for(tab of tabs)
    {
        tab.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}



