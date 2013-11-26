	// Once you've do that, try a second one;

	// 1. Have an input variable that will be a ticket description.

	// 2. Parse the description and when the description contains a searching string,
	//     assign a department using the following table;

	// a. If the description contains "RFS;", continue to next step, otherwise end.

	// b. search and assign based on the following;

	// Description                  Department
	// ===================          ===================================
	// /POD/                         (State Farm) Application Operations
	// /Request for Service/         (State Farm) Application Operations
	// /Postgres Database/              (State Farm) Database Platform Operations
	// /Firewall Rule/              (State Farm) Firewall
	// /DNS Updates/                 (State Farm) Network Platform Operations
	// /TM/                         (State Farm) Network Platform Operations
	// /VIP/                         (State Farm) Network Platform Operations
	// /QA searching/                  (State Farm) Quality Assurance
	// /Access Request/              (State Farm) Security Platform Operations
	// /LDAP Group Request/          (State Farm) Security Platform Operations
	// /OpenAM Agent/                (State Farm) Security Platform Operations
	// /OpenAM Policy/          		 (State Farm) Security Platform Operations
	// /Blueprint/Puppet Promotion/  (State Farm) Server Platform Operations
	// /NAS NFS Share Request/ 			 (State Farm) Storage Platform
	// /Report Generation/           (State Farm) Tool Support Operations
	// /Self Service Portal/         (State Farm) Tool Support Operations

	// 3. Send an email containing the description and the department value.

var ticketDescription = "some thing POD Blueprint/Puppet Promotion blah blah"; 
var setDepartment = "";

function emailer(x)
{
	// send email with this string.
	var emailMessage = ticketDescription + " " + x;
	alert(emailMessage);		
}


function checkDescription()
{
	if (ticketDescription.search(/POD/))
		{
			alert("Busta move");
			var setDepartment = "(State Farm) Application Operations";
		}
		else if (ticketDescription.search(/Request for Service/))
		{
			var setDepartment = "(State Farm) Application Operations" ;
		}
		else if (ticketDescription.search(/Postgres Database/))
		{
			var setDepartment = "(State Farm) Database Platform Operations" ;
		}
		else if (ticketDescription.search(/Firewall Rule/))
		{
			var setDepartment = "(State Farm) Firewall";
		}
		else if (ticketDescription.search(/DNS Updates/))
		{
			var setDepartment = "(State Farm) Network Platform Operations";
		}
		else if (ticketDescription.search(/TM/))
		{
			var setDepartment = "(State Farm) Network Platform Operations";
		}
		else if (ticketDescription.search(/VIP/))
		{
			var setDepartment = "(State Farm) Network Platform Operations";
		}
		else if (ticketDescription.search(/QA searching/))
		{
			var setDepartment = "(State Farm) Quality Assurance";
		}
		else if (ticketDescription.search(/Access Request/))
		{
			var setDepartment = "(State Farm) Security Platform Operations";
		}
		else if (ticketDescription.search(/LDAP Group Request/))
		{
			var setDepartment = "(State Farm) Security Platform Operations";
		}
		else if (ticketDescription.search(/OpenAM Agent/))
		{
			var setDepartment = "(State Farm) Security Platform Operations";
		}
		else if (ticketDescription.search(/OpenAM Policy/))
		{
			var setDepartment = "(State Farm) Security Platform Operations";
		}
		else if (ticketDescription.search(/Blueprint\/Puppet Promotion/))
		{
			var setDepartment = "(State Farm) Server Platform Operations";
		}
		else if (ticketDescription.search(/NAS NFS Share Request/))
		{
			var setDepartment = "(State Farm) Storage Platform";
		}
		else if (ticketDescription.search(/Report Generation/))
		{
			var setDepartment = "(State Farm) Tool Support Operations";
		}
		else if (ticketDescription.search(/Self Service Portal/))
		{
			var setDepartment = "(State Farm) Tool Support Operations";
		}
		else (ticketDescription.search(/RFS/))
		{
			alert("wait what");
		}
		alert("Heyo");
		emailer( setDepartment);
}
	

// checkDescription()
emailer()







