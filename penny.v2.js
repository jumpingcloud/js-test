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
  // /OpenAM Policy/               (State Farm) Security Platform Operations
  // /Blueprint/Puppet Promotion/  (State Farm) Server Platform Operations
  // /NAS NFS Share Request/       (State Farm) Storage Platform
  // /Report Generation/           (State Farm) Tool Support Operations
  // /Self Service Portal/         (State Farm) Tool Support Operations

  // 3. Send an email containing the description and the department value.




function emailer(ticketDescription, setDepartment) {
  // simulate send email with description and department.
  var emailMessage = ticketDescription + " " + setDepartment;
  alert(setDepartment);    
}

function getDescription() {
  // This will 'generate' a ticket description for testing the checker
  var ticketDescription = 'request for Service: firewall Rule Please adjust the thresholds for Backup check'
  checkDescription(ticketDescription)
}


function checkDescription(ticketDescription) {
  // Checks the ticket description for something that matches a key in the searchMap
  var searchMap = {
    'POD':                         '(State Farm) Application Operations',
    'Request for Service':         '(State Farm) Application Operations',
    'Postgres Database':           '(State Farm) Database Platform Operations',
    'Firewall Rule':               '(State Farm) Firewall',
    'DNS Updates':                 '(State Farm) Network Platform Operations',
    'TM':                          '(State Farm) Network Platform Operations',
    'VIP':                         '(State Farm) Network Platform Operations',
    'QA searching':                '(State Farm) Quality Assurance',
    'Access Request':              '(State Farm) Security Platform Operations',
    'LDAP Group Request':          '(State Farm) Security Platform Operations',
    'OpenAM Agent':                '(State Farm) Security Platform Operations',
    'OpenAM Policy':               '(State Farm) Security Platform Operations',
    'Blueprint\/Puppet Promotion': '(State Farm) Server Platform Operations',
    'NAS NFS Share Request':       '(State Farm) Storage Platform',
    'Report Generation':           '(State Farm) Tool Support Operations',
    'Self Service Portal':         '(State Farm) Tool Support Operations'
  };

  var setDepartment = "";
  var found = false;

  for (var regex in searchMap) {
    if (ticketDescription.search(new RegExp(regex, "i")) !== -1) {
      setDepartment = searchMap[regex];
      found = true;
      break; // Making the first term matched the
    }
    else if (ticketDescription.search(/RFS/) !== -1) {
      found = true;
    }
  }
  
  if (found == true) {
    emailer(ticketDescription, setDepartment);
  }
} 
  

getDescription()








