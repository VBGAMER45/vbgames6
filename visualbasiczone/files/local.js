var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// Customize menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("BLACK", "white", "#FFCC00");
	// Customize toolbar background color
	setToolbarBGColor("black");

	//Home
	addICPMenu("HomeMenu", "Home", "","http://www.vbgames6.homestead.com");
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

	//Message Boards
	addICPMenu("SupportMenu", "Message Boards", "","http://wwww.visualbasiczone.com/forums/");
	addICPSubMenu("SupportMenu","Visual Basic","http://www.visualbasiczone.com/forums/index.php?board=1");

	//Links
	addICPMenu("MSDNMenu", "Links", "","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Visual Basic","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Java","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Java Script","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","C/C++","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Asp/Asp.net","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Delphi","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","Qbasic","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu",".Net","http://www.visualbasiczone.com/links/index.php");
	addICPSubMenu("MSDNMenu","PHP","http://www.visualbasiczone.com/links/index.php");

	//Other Things
	addICPMenu("DeveloperMenu", "Other", "","http://www.visualbasiczone.com/products/");
	addICPSubMenu("DeveloperMenu","Products","http://www.visualbasiczone.com/products/");
	addICPSubMenu("DeveloperMenu","Gifs","http://www.homestead.com/visualbasiczone/gifs.html");
	addICPSubMenu("DeveloperMenu","Java Games","http://www.homestead.com/vbgames6/java.html");
	addICPSubMenu("DeveloperMenu","Zelda 64","http://www.homestead.com/rpgprojects/zelda.html");
	addICPSubMenu("DeveloperMenu","Visual Basic Tips","http://www.homestead.com/vbgames6/tips.html");
	addICPSubMenu("DeveloperMenu","Project X","http://www.projectxonline.net/downloads/");
	addICPSubMenu("DeveloperMenu","Cheats","http://www.homestead.com/vbgames6/files/cheats.htm");
	addICPSubMenu("DeveloperMenu","Visual Basic Gaming News","http://www.vbgamer.com");
	addICPSubMenu("DeveloperMenu","Dhtml Games","http://www.vbgames6.homestead.com/dHTML.html");
	addICPSubMenu("DeveloperMenu","Popup Menu Maker","http://www.vbgames6.homestead.com/PopupMaker.html");
	addICPSubMenu("DeveloperMenu","Popup ThumbNail Maker","http://www.vbgames6.homestead.com/ThumbNailMaker.html");
	addICPSubMenu("DeveloperMenu","Windows Shortcuts","http://www.vbgames6.homestead.com/shortcuts.html");
	addICPSubMenu("DeveloperMenu","Rpgwo Fan Site","http://www.projectxonline.net/rpgwo");
	addICPSubMenu("DeveloperMenu","RPG World Online","http://www.rpgwo.com");


}