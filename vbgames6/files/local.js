var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("BLACK", "white", "#FFCC00");
	//#660066
	// Customize toolbar background color
	setToolbarBGColor("black");

	// display ICP Banner
	//setICPBanner("/visualj/art/vj_banner.jpg","/visualj/default.asp","Microsoft&#174; Visual J++&#174; Home");
	
	//***** Add ICP menus *****
	//Home
	addICPMenu("HomeMenu", "Home", "","http://www.vbgames6.homestead.com");
	addICPSubMenu("HomeMenu","Comments","http://www.homestead.com/visualbasiczone/comments.html");
	addICPSubMenu("HomeMenu","Awards","http://www.vbgames6.homestead.com/files/october.gif");
	addICPSubMenu("HomeMenu","Link To Us","http://www.visualbasiczone.homestead.com/linkus.html");
	addICPSubMenu("HomeMenu","About Us","http://www.visualbasiczone.homestead.com/about.html");

	//Code
	addICPMenu("EventsMenu", "Code", "","http://www.vbgames6.homestead.com/code.html");
	addICPSubMenu("EventsMenu","VB Code","http://www.vbgames6.homestead.com/code.html");
	addICPSubMenu("EventsMenu","Batch","http://www.vbgames6.homestead.com/Batch.html");
	addICPSubMenu("EventsMenu","ASM","http://www.vbgames6.homestead.com/asm.html");
	addICPSubMenu("EventsMenu","Java Script","http://www.visualbasiczone.homestead.com/java.html");
	addICPSubMenu("EventsMenu","Java","http://www.visualbasiczone.homestead.com/javacode.html");
	addICPSubMenu("EventsMenu","Asp","http://www.visualbasiczone.homestead.com/asp.html");
	addICPSubMenu("EventsMenu","C/C++","http://www.visualbasiczone.homestead.com/c.html");
	addICPSubMenu("EventsMenu","Cgi","http://www.visualbasiczone.homestead.com/cgi.html");
	addICPSubMenu("EventsMenu","Delphi","http://www.visualbasiczone.homestead.com/delphi.html");
	addICPSubMenu("EventsMenu","QBasic","http://www.visualbasiczone.homestead.com/Qbasic.html");
	addICPSubMenu("EventsMenu","Perl","http://www.visualbasiczone.homestead.com/perl.html");
	addICPSubMenu("EventsMenu","Xml","http://www.visualbasiczone.homestead.com/xml.html");
	addICPSubMenu("EventsMenu","Active X Controls","http://vbgames6.homestead.com/Activex.html");
	addICPSubMenu("EventsMenu","Free Courses","http://www.rpgprojects.homestead.com/courses.html");
	addICPSubMenu("EventsMenu","Add Code!!!","http://www.homestead.com/gifs4free/addcode.html");

	//Message Boards
	addICPMenu("SupportMenu", "Message Boards", "","http://visualbasiczone.community.everyone.net");
	addICPSubMenu("SupportMenu","Visual Basic","http://visualbasiczone.community.everyone.net");
	addICPSubMenu("SupportMenu","Java","http://pub21.ezboard.com/fprojectxonlinefrm6");
	addICPSubMenu("SupportMenu","Java Script","http://pub21.ezboard.com/fprojectxonlinefrm7");
	addICPSubMenu("SupportMenu","C/C++","http://pub21.ezboard.com/fprojectxonlinefrm8");
	addICPSubMenu("SupportMenu","Asp","http://pub21.ezboard.com/fprojectxonlinefrm9");
	addICPSubMenu("SupportMenu","Delphi","http://pub21.ezboard.com/fprojectxonlinefrm10");
	addICPSubMenu("SupportMenu","QBasic","http://pub21.ezboard.com/fprojectxonlinefrm11");
	addICPSubMenu("SupportMenu","Xml","http://www.coolboard.com/boardshow.cfm?mb=98142190235294");
	
	//Links
	addICPMenu("MSDNMenu", "Links", "","http://www.homestead.com/visualbasiczone/LINKS.HTML");
	addICPSubMenu("MSDNMenu","Visual Basic","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer45");
	addICPSubMenu("MSDNMenu","Java","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer48");
	addICPSubMenu("MSDNMenu","Java Script","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer47");
	addICPSubMenu("MSDNMenu","C/C++","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer50");
	addICPSubMenu("MSDNMenu","Asp","http://www.homestead.com/visualbasiczone/files/AspLinks.html");
	addICPSubMenu("MSDNMenu","Delphi","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer51");
	addICPSubMenu("MSDNMenu","Qbasic","http://www.wwwresources.com/free/ffal/ffa.cgi?id=vbgamer46");
	
	//Other Things
	addICPMenu("DeveloperMenu", "Other", "","http://www.homestead.com/vbgames6/java.html");
	addICPSubMenu("DeveloperMenu","Visual Basic Jobs","http://www.justvbjobs.com");
	addICPSubMenu("DeveloperMenu","Gifs","http://www.homestead.com/visualbasiczone/gifs.html");
	addICPSubMenu("DeveloperMenu","Java Games","http://www.homestead.com/vbgames6/java.html");
	addICPSubMenu("DeveloperMenu","Zelda 64","http://www.homestead.com/rpgprojects/zelda.html");
	addICPSubMenu("DeveloperMenu","Visual Basic Tips","http://www.homestead.com/vbgames6/tips.html");
	addICPSubMenu("DeveloperMenu","Submit Code","http://www.geocities.com/vbgamer46/submit.html");
	addICPSubMenu("DeveloperMenu","Project X","http://x.incyberspace.net");
	addICPSubMenu("DeveloperMenu","Graphics","http://www.geocities.com/vbgamer46/art.html");
	addICPSubMenu("DeveloperMenu","Cheats","http://www.homestead.com/vbgames6/files/cheats.htm");
	addICPSubMenu("DeveloperMenu","Site News","http://www.homestead.com/vbgames6/");
	addICPSubMenu("DeveloperMenu","Visual Basic Gaming News","http://www.rookscape.com/vbgaming");
	addICPSubMenu("DeveloperMenu","Tech News","http://www.homestead.com/vbgames6/files/news.htm");
	addICPSubMenu("DeveloperMenu","Dhtml Games","http://www.vbgames6.homestead.com/dHTML.html");
	addICPSubMenu("DeveloperMenu","Popup Menu Maker","http://www.vbgames6.homestead.com/PopupMaker.html");
	addICPSubMenu("DeveloperMenu","Popup ThumbNail Maker","http://www.vbgames6.homestead.com/ThumbNailMaker.html");
	addICPSubMenu("DeveloperMenu","Windows Shortcuts","http://www.vbgames6.homestead.com/shortcuts.html");
	addICPSubMenu("DeveloperMenu","Rpgwo Fan Site","http://www.projectxonline.net/rpgwo");

}
