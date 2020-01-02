'use strict';

module.exports = {
  "primaryEmail": "email",
  "fullName"    : "data.user.name",
  "firstName"   : "data.profile.name.givenName",
  "lastName"    : "data.profile.name.familyName",
  "gender"      : "data.profile.gender",
    "links"       : {
        "values" : [{
            "output": {},
            "innerDocument": "!",
            "key": "@generateId(data.profile.profileUrl)",
            "required": ["value"],
            "mappings"     : {
                "id"      : "@generateId(data.profile.profileUrl)",
                "type"    : ">>social",
                "value"   : "data.profile.profileUrl",
                "service" : ">>facebook",
                "username": "data.user.name",
                "userId"  : "data.profile.id"
            }
        },{
            "output": {},
            "key": "@generateId(>>ahmad.a.assaf)",
            "innerDocument": "!",
            "required": ["value"],
            "mappings"     : {
                "id"      : "@generateId(>>ahmad.a.assaf)",
                "type"    : ">>messaging",
                "value"   : ">>ahmad.a.assaf",
                "service" : ">>skype",
                "username": ">>ahmad.a.assaf"
            }
        },{
            "output": {},
            "key": "@generateId(>>http://beamery.com)",
            "innerDocument": "!",
            "required": ["value"],
            "mappings"     : {
                "id"      : "@generateId(>>http://beamery.com)",
                "type"    : ">>website",
                "value"   : ">>http://beamery.com",
                "service" : ">>website"
            }
        }],
        "keys" : {
            "output": [],
            "innerDocument": "!links.values",
            "value": "id"
        }
    },
    "emails"       : {
        "values" : {
            "output": {},
            "innerDocument": "data.profile.emails",
            "key": "@generateId(value)",
            "required": ["value"],
            "mappings"     : {
                "id"   : "@generateId(value)",
                "value": "value",
                "type" : ">>facebook"
            }
        },
        "keys" : {
            "output": [],
            "innerDocument": "!emails.values",
            "value": "id"
        }
    },
    "photos"       : {
        "values" : {
            "output": {},
            "innerDocument": "!",
            "required": ["value"],
            "key": "@generateId(!links.values[0].id)",
            "mappings"     : {
                "id"       : "@generateId(!links.values[0].id)",
                "type"     : ">>facebook",
                "typeId"   : ">>facebook",
                "typeName" : ">>Facebook",
                "value"    : "@generateFacebookImageLink(!links.values[0].id)",
                "isPrimary": ">>%true"
            }
        },
        "keys" : {
            "output": [],
            "innerDocument": "!photos.values",
            "value": "id"
        }
    },
    "experience"       : {
        "values" : {
            "output": {},
            "innerDocument": "data.profile._json.work",
            "key": "@generateId(employer.name|position.name)",
            "mappings"     : {
                "id"              : "@generateId(employer.name|position.name)",
                "startDate"       : "@parseDate(start_date)",
                "endDate"         : "@parseDate(end_date)",
                "location"        : "location.name",
                "organisationName": "employer.name",
                "role"            : "position.name"
            }
        },
        "keys" : {
            "output": [],
            "innerDocument": "!experience.values",
            "value": "id"
        }
    },
    "education"       : {
        "values" : {
            "output": {},
            "innerDocument": "data.profile._json.education",
            "key": "@generateId(school.name|year.name)",
            "mappings"     : {
                "id"             : "@generateId(school.name|year.name)",
                "endDate"        : "@parseDate(year.name)",
                "level"          : "type",
                "organisationName": "school.name"
            }
        },
        "keys" : {
            "output": [],
            "innerDocument": "!education.values",
            "value": "id"
        }
    },
    "createdAt": "@!new Date()",
    "source": {
        "value": ">>manual"
    },
    "uniqueKeys" : {
        "output": [],
        "innerDocument": "!",
        "value": "@assignUniqueIds(!links.values|!emails.values)"
    },
    "identifierKeys" : {
        "output"       : [],
        "innerDocument": "!",
        "value"        : "@assignIds(!education.values|!experience.values)"
    }
}
