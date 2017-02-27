var casual = require('casual');

casual.define('state_obj', function () {

  // Return a single state for now
  return {
    id: 1,
    code: 'FL',
    name: 'Florida'
  }

  //uncomment this code to generate states
  // return {
  //   id: casual.integer,
  //   code: casual.state_abbr,
  //   name: casual.state
  // };
});

casual.define('profession', function () {
  return {
    id: casual.integer(from = 1, to = 100),
    boardId: casual.integer(from = 1, to = 100),
    name: casual.title,
  };
});

casual.define('licensesStatus', function () {
  return {
    id: casual.integer(from = 1, to = 100),
    name: casual.title,
  };
});

casual.define('license', function () {
  return {
    id: casual.integer(from = 2, to = 100),
    owner: {
      firstName: casual.first_name,
      middleName: casual.first_name,
      lastName: casual.last_name,
      phone: casual.phone,
      email: casual.email,
      emailAlternative: casual.email
    },
    profession: {
      name: casual.title
    },
    number: casual.populate('{{letter}}{{letter}}{{integer}}'),
    issueDate: casual.date(format = 'MM-DD-YYYY'),
    expirationDate: casual.date(format = 'MM-DD-YYYY'),
    status: casual.word
  };
});

casual.define('transcript', function () {
  return {
    "completionDate": "1998-02-28T00:00:00",
    "daysRemaining": -6855,
    "licensePeriod": {
      "id": 6289044,
      "renewalStartDate": "0001-01-01T00:00:00",
      "renewalEndDate": "1998-02-28T00:00:00",
      "scenario": {
        "type": "CONDITIONAL",
        "description": null,
        "dueDate": "0001-01-01T00:00:00",
        "isIndefinite": false,
        "licensePeriod": null,
        "disciplinaryType": null,
        "renewalStartDate": null,
        "renewalEndDate": null,
        "isOnlyLive": false,
        "finalOrderNotes": null,
        "id": 0,
        "auditFields": {
          "addedById": 0,
          "updatedById": 0,
          "addedBy": null,
          "updatedBy": null,
          "dateAdded": null,
          "dateUpdated": null,
          "hasValue": false
        }
      },
      "complianceStatus": "IN_PROG",
      "license": {
        "id": 1206002,
        "code": "999",
        "number": "DN999",
        "renewedDate": "0001-01-01T00:00:00",
        "ownerId": 0,
        "professionId": 0,
        "profession": {
          "id": 14,
          "name": "Dentist",
          "code": "DN",
          "board": {
            "id": 14,
            "name": null,
            "boardFaqUrl": null,
            "isCustomProviderRequired": false,
            "minHoursIncrement": 0,
            "hoursPrecision": "UNKNOWN",
            "hasSubType": false,
            "maxProfessionHours": null,
            "stateId": 0,
            "isAppliedIncrementRule": false,
            "allowedSection": null,
            "isAllowedConcurrentSession": false,
            "hasCustomPayment": false,
            "hasSpecialFee": false,
            "isCheckPaymentDenied": false,
            "isCreditCardPaymentDenied": false,
            "state": {
              "id": 1,
              "name": null,
              "code": "FL",
              "countryCode": null,
              "professionalSubscriptionPrice": 0,
              "conciergeSubscriptionPrice": 0,
              "countryId": 0
            },
            "mailAddress": null,
            "businessAddress": null,
            "subTypes": null,
            "professions": null,
            "applicationsSettings": null,
            "routings": null
          },
          "boardId": 0,
          "isTemporary": false,
          "isAvailableInCourseSearch": false,
          "isAvailableForSubscription": false,
          "allowCEPackages": false,
          "routeTo": null,
          "minCourseHours": 0,
          "maxCourseHours": 0,
          "maxCreditsPerDay": 0,
          "allowDiscounts": false,
          "subjectAreas": null
        },
        "owner": null,
        "licensePeriods": null,
        "isDummy": false
      },
      "activityStatus": "UNKNOWN",
      "licenseStatus": "NULL AND VOID",
      "isCurrentCycle": false,
      "isEmployerScenario": false
    },
    "isDual": false,
    "isEmployer": false,
    "isRecommended": false,
    "isShowStateCode": false,
    "specialty": null,
    "totalHoursRequired": 30,
    "totalHoursPosted": 0,
    "totalHoursNeeded": 30,
    "totalHoursApplied": 0,
    "totalFlagsRequired": 1,
    "totalFlagsPosted": 0,
    "totalFlagsNeeded": 1,
    "status": "IN_PROG",
    "items": [
      {
        "children": [],
        "isFlag": false,
        "isDependent": false,
        "isDeliveryMethodRestricted": false,
        "hasDependentSubjects": false,
        "requiredHours": 2,
        "postedHours": 0,
        "outstandingHours": 2,
        "appliedHours": 0,
        "isRequired": true,
        "isPosted": false,
        "isNeeded": true,
        "isVisible": true,
        "excessHours": 0,
        "creditCourses": [
        {
          "courseId": 246244,
          "courseName": "Course test 05-27-2016",
          "employeeCESubmissionId": 0,
          "employerId": 0,
          "employerCEcreditId": 0,
          "disciplinaryPostCourseId": 0,
          "rosterAttendeeId": 8570060,
          "messages": "",
          "hours": 2,
          "excessHours": 0,
          "hoursToReact": 0,
          "isSeries": 0,
          "isModular": 0,
          "isConcurrent": 0,
          "creditType": "ROSTER",
          "dateEarned": "05/27/2009",
          "postCEcreditId": 993102,
          "appliedHours": 2,
          "isCreditDeliveryRes": 0,
          "courseType": "CD_ANYTIME",
          "courseHoursApplied": 2,
          "courseHoursEarned": 2,
          "messageAdded": 0,
          "isFullFillSpecial": 0,
          "isParentFullFillSpecial": 0,
          "courseTypeDescription": "Anytime",
          "isDiscCourseManipulation": 0
        },
        {
          "courseId": 0,
          "courseName": "MYYY COURRSE NAMMEEE",
          "employeeCESubmissionId": 0,
          "employerId": 0,
          "employerCEcreditId": 0,
          "disciplinaryPostCourseId": 0,
          "rosterAttendeeId": 8530729,
          "messages": "Each subject area must be at least 2 hour(s) for this Board/Council. Hours not meeting this requirement will not be applied.",
          "hours": 1,
          "excessHours": 1,
          "hoursToReact": 0,
          "isSeries": 0,
          "isModular": 0,
          "isConcurrent": 0,
          "creditType": "LICENSEE_POST",
          "dateEarned": "01/01/2010",
          "postCEcreditId": 338147,
          "appliedHours": 0,
          "isCreditDeliveryRes": 0,
          "courseType": "CD_LIVE",
          "courseHoursApplied": 0,
          "courseHoursEarned": 1,
          "messageAdded": 1,
          "isFullFillSpecial": 0,
          "isParentFullFillSpecial": 0,
          "courseTypeDescription": "Live",
          "isDiscCourseManipulation": 0
        },
        {
          "courseId": 0,
          "courseName": "Attend a Board Meeting - [ARNP, PN, RN, ANT,CNS]",
          "employeeCESubmissionId": 0,
          "employerId": 0,
          "employerCEcreditId": 0,
          "disciplinaryPostCourseId": 0,
          "rosterAttendeeId": 8539713,
          "messages": "Each subject area must be at least 2 hour(s) for this Board/Council. Hours not meeting this requirement will not be applied.",
          "hours": 1,
          "excessHours": 1,
          "hoursToReact": 0,
          "isSeries": 0,
          "isModular": 0,
          "isConcurrent": 0,
          "creditType": "BOARD_POST",
          "dateEarned": "01/01/2010",
          "postCEcreditId": 338380,
          "appliedHours": 0,
          "isCreditDeliveryRes": 0,
          "courseType": "",
          "courseHoursApplied": 0,
          "courseHoursEarned": 1,
          "messageAdded": 1,
          "isFullFillSpecial": 0,
          "isParentFullFillSpecial": 0,
          "courseTypeDescription": "",
          "isDiscCourseManipulation": 0
        }

      ],
        "id": 339,
        "name": "Medical Errors",
        "code": null,
        "subjectAreaProfessions": null
      },
      {
        "children": [
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": false,
            "excessHours": 0,
            "id": 1563,
            "name": "Anesthesia Related",
            "code": null,
            "subjectAreaProfessions": null
          },
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": false,
            "excessHours": 0,
            "id": 1562,
            "name": "Management of Medical Emergencies",
            "code": null,
            "subjectAreaProfessions": null
          },
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": false,
            "excessHours": 0,
            "id": 1680,
            "name": "Advanced Cardiac Life Support (ACLS)",
            "code": null,
            "subjectAreaProfessions": null
          },
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": false,
            "excessHours": 0,
            "id": 1681,
            "name": "Advanced Trauma Life Support (ATLS)",
            "code": null,
            "subjectAreaProfessions": null
          },
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": false,
            "excessHours": 0,
            "id": 1682,
            "name": "Pediatric Advanced Life Support (PALS)",
            "code": null,
            "subjectAreaProfessions": null
          }
        ],
        "isFlag": false,
        "isDependent": false,
        "isDeliveryMethodRestricted": false,
        "hasDependentSubjects": false,
        "requiredHours": 26,
        "postedHours": 0,
        "outstandingHours": 26,
        "appliedHours": 0,
        "isRequired": true,
        "isPosted": false,
        "isNeeded": true,
        "isVisible": true,
        "excessHours": 0,
        "id": 348,
        "name": "General",
        "code": null,
        "subjectAreaProfessions": null
      },
      {
        "children": [
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": true,
            "excessHours": 0,
            "id": 336,
            "name": "End-of-Life Care and Palliative Health Care",
            "code": null,
            "subjectAreaProfessions": null
          }
        ],
        "isFlag": false,
        "isDependent": false,
        "isDeliveryMethodRestricted": false,
        "hasDependentSubjects": true,
        "requiredHours": 1,
        "postedHours": 0,
        "outstandingHours": 1,
        "appliedHours": 0,
        "isRequired": true,
        "isPosted": false,
        "isNeeded": true,
        "isVisible": true,
        "excessHours": 0,
        "id": 333,
        "name": "HIV/AIDS",
        "code": null,
        "subjectAreaProfessions": null
      },
      {
        "children": [
          {
            "children": [],
            "isFlag": false,
            "isDependent": true,
            "isDeliveryMethodRestricted": false,
            "hasDependentSubjects": false,
            "requiredHours": 0,
            "postedHours": 0,
            "outstandingHours": 0,
            "appliedHours": 0,
            "isRequired": true,
            "isPosted": false,
            "isNeeded": true,
            "isVisible": true,
            "excessHours": 0,
            "id": 336,
            "name": "End-of-Life Care and Palliative Health Care",
            "code": null,
            "subjectAreaProfessions": null
          }
        ],
        "isFlag": false,
        "isDependent": false,
        "isDeliveryMethodRestricted": false,
        "hasDependentSubjects": true,
        "requiredHours": 1,
        "postedHours": 0,
        "outstandingHours": 1,
        "appliedHours": 0,
        "isRequired": true,
        "isPosted": false,
        "isNeeded": true,
        "isVisible": true,
        "excessHours": 0,
        "id": 342,
        "name": "Domestic Violence",
        "code": null,
        "subjectAreaProfessions": null
      },
      {
        "children": [],
        "isFlag": true,
        "isDependent": false,
        "isDeliveryMethodRestricted": false,
        "hasDependentSubjects": false,
        "requiredHours": 0,
        "postedHours": 0,
        "outstandingHours": 0,
        "appliedHours": 0,
        "isRequired": true,
        "isPosted": false,
        "isNeeded": true,
        "isVisible": true,
        "excessHours": 0,
        "id": 1320,
        "name": "Cardiopulmonary Resuscitation (CPR)",
        "code": null,
        "subjectAreaProfessions": null
      }
    ]
  };
});

module.exports = function () {
  var data = {
    licenses: [],
    professions: [],
    licensesStatuses: [],
    license: casual.license,
    transcript: casual.transcript
  };

  // Create 8 fake professions
  for (var i = 0; i < 8; i++) {
    data.professions.push(casual.profession);
  }

  // Create 8 fake statuses
  for (var i = 0; i < 8; i++) {
    data.licensesStatuses.push(casual.licensesStatus);
  }

  // Create 20 fake licenses
  for (var i = 0; i < 20; i++) {
    data.licenses.push(casual.license);
  }

  return data;
}
