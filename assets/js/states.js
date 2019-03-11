let states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',	
    'KY',
    'LA',	
    'ME',
    'MD',
    'MA',
    'MI',
    'MS',	
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'	
];

for (let i = 0; i < states.length; i++) {
    var statesHTML = '<option>'+states[i]+'</option>';
    $('.statesInput').append(statesHTML);
}




//<option selected>Choose...</option>

/*Commonwealth/Territory:	Abbreviation:
American Samoa	AS
District of Columbia	DC
Federated States of Micronesia	FM
Guam	GU
Marshall Islands	MH
Northern Mariana Islands	MP
Palau	PW
Puerto Rico	PR
Virgin Islands	VI
*/