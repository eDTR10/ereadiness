export const json = {
    "title": "Digital Maturity eReadiness",
    "description": "The eGov PH, also known as the e-Government Philippines, is a mobile application that simplifies transactions between the government and citizens. With a vision to build a connected nation, this platform integrates the multi-sectoral government through a one-stop online system that will minimize economic costs for the citizens.\n",
    "logo": "https://mariaaurora.gov.ph/wp-content/uploads/2018/11/dict-logo.png",
    "logoWidth": "auto",
    "logoHeight": "150px",
    "logoFit": "cover",
    "pages": [
      {
        "name": "dataPrivacy",
        "title": "Data Privacy",
        "elements": [
          {
            "type": "checkbox",
            "name": "dataprivacy1.0",
            "title": "Data Privacy",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "I have read the Informed Consent Section and I agree to the terms and conditions"
              }
            ],
            "maxSelectedChoices": 4
          },
          {
            "type": "matrixdynamic",
            "name": "fullName",
            "visible": false,
            "visibleIf": "{dataprivacy1.0} allof ['Item 1']",
            "title": "Full Name",
            "isRequired": true,
            "requiredErrorText": "Only uppercase letters, spaces, and periods are allowed.",
            "columns": [
              {
                "name": "Column 1",
                "title": "Last Name",
                "cellType": "text"
              },
              {
                "name": "Column 2",
                "title": "First Name",
                "cellType": "text"
              },
              {
                "name": "Column 3",
                "title": "Middle Initial",
                "cellType": "text"
              },
              {
                "name": "Column 4",
                "title": "Suffix",
                "cellType": "dropdown",
                "choices": [
                  {
                    "value": 1,
                    "text": "Sr"
                  },
                  {
                    "value": 2,
                    "text": "Jr"
                  },
                  {
                    "value": 3,
                    "text": "II (The Second)"
                  },
                  {
                    "value": 4,
                    "text": "III (The Third)"
                  },
                  {
                    "value": 5,
                    "text": "IV (The Fourth)"
                  },
                  {
                    "value": 7,
                    "text": "None"
                  }
                ],
                "showOtherItem": true,
                "storeOthersAsComment": true
              }
            ],
            "choices": [
              1,
              2,
              3,
              4,
              5
            ],
            "cellType": "text",
            "allowAddRows": false,
            "rowCount": 1,
            "removeRowText": ""
          },
          {
            "type": "panel",
            "name": "contactDetails",
            "visible": false,
            "visibleIf": "{dataprivacy1.0} allof ['Item 1']",
            "title": "Contact Details:",
            "isRequired": true,
            "elements": [
              {
                "type": "text",
                "name": "email",
                "title": "Email:",
                "isRequired": true,
                "inputType": "email",
                "size": 0,
                "autocomplete": "email",
                "placeholder": "ryan@dict.gov.ph"
              },
              {
                "type": "text",
                "name": "contactNumber",
                "title": "Contact Number:",
                "isRequired": true,
                "inputType": "tel",
                "size": 0,
                "autocomplete": "tel-local",
                "placeholder": "09123211252"
              }
            ]
          }
        ]
      },
      {
        "name": "officeSelect",
        "title": "Offices",
        "elements": [
          {
            "type": "dropdown",
            "name": "lguName",
            "title": "LGU Name",
            "isRequired": true,
            "choices": [
              "OPOL",
              "MANTICAO",
              "JASAAN",
              "LAGONGLONG",
              "INITAO",
              "MAMBAJAO",
              "LAGUINDINGAN",
              "EL SALVADAOR CITY",
              "BINUANGAN",
              "MAGSAYSAY",
              "ALUBIJID",
              "LIBERTAD",
              "LUGAIT",
              "BALINGOAN",
              "TALISAYAN",
              "SUGBONGCOGON",
              "VILLANUEVA",
              "NAAWAN",
              "GINGOOG",
              "KINUGUITAN",
              "SALAY",
              "GITAGUM",
              "TAGOLOAN",
              "CLAVERIA",
              "SAGAY",
              "BALINGASAG"
            ]
          },
          {
            "type": "dropdown",
            "name": "officeselection",
            "title": "OFFICE SELECTION",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 2",
                "text": "MAYOR"
              }
            ]
          }
        ]
      },
      {
        "name": "mayorOffice",
        "visible": false,
        "visibleIf": "{officeselection} = 'Item 2'",
        "title": "Mayor's Office",
        "description": "LGU Profile",
        "elements": [
          {
            "type": "dropdown",
            "name": "incomeClass",
            "title": "Income Class",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Poor: Below a certain monthly income"
              },
              {
                "value": "Item 2",
                "text": "Low-income: Between a certain monthly income range"
              },
              {
                "value": "Item 3",
                "text": "Lower middle: Between a certain monthly income range"
              },
              {
                "value": "Item 4",
                "text": "Middle: Between a certain monthly income range"
              },
              {
                "value": "Item 5",
                "text": "Upper middle: Between a certain monthly income range"
              },
              {
                "value": "Item 6",
                "text": "Upper class: Between a certain monthly income range"
              },
              {
                "value": "Item 7",
                "text": "Rich: Above a certain monthly income"
              }
            ]
          },
          {
            "type": "text",
            "name": "numofPopulation",
            "title": "Approximate Number of Population",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "numBarangays",
            "startWithNewLine": false,
            "title": "Number of Barangays",
            "isRequired": true,
            "inputType": "number"
          },
          {
            "type": "matrixdynamic",
            "name": "mayorICTE",
            "title": "Information and Communications Technology Environment",
            "description": "List all the availability of computing devices (if any)",
            "isRequired": true,
            "columns": [
              {
                "name": "computingDevices",
                "title": "Computing Devices (i.e. Desktop/Laptop, Smartphones, Tablet)",
                "cellType": "dropdown",
                "choices": [
                  {
                    "value": 1,
                    "text": "Desktop"
                  },
                  {
                    "value": 3,
                    "text": "Laptop"
                  },
                  {
                    "value": 4,
                    "text": "Smartphones"
                  },
                  {
                    "value": 5,
                    "text": "Tablet"
                  },
                  {
                    "value": 6,
                    "text": "Others"
                  }
                ],
                "storeOthersAsComment": true
              },
              {
                "name": "internetAccess",
                "title": "Number of Device with Internet Access",
                "cellType": "text",
                "inputType": "number",
                "min": 0,
                "max": 100
              },
              {
                "name": "withoutinternetaccess",
                "title": "Number of Device without Internet Access",
                "cellType": "text",
                "inputType": "number",
                "min": 0,
                "max": 100
              }
            ],
            "choices": [
              1,
              2,
              3,
              4,
              5
            ],
            "cellType": "text"
          },
          {
            "type": "matrixdropdown",
            "name": "mayorquestions",
            "title": "Questions",
            "isRequired": true,
            "columns": [
              {
                "name": "mayorAnswer",
                "title": "Answer (Very Poor, Poor, Acceptable, Good and Very Good)",
                "cellType": "dropdown",
                "choices": [
                  {
                    "value": 1,
                    "text": "Very Poor"
                  },
                  {
                    "value": 2,
                    "text": "Poor"
                  },
                  {
                    "value": 3,
                    "text": "Acceptable"
                  },
                  {
                    "value": 4,
                    "text": "Good"
                  },
                  {
                    "value": 5,
                    "text": "Very Good"
                  }
                ],
                "storeOthersAsComment": true
              }
            ],
            "choices": [
              1,
              2,
              3,
              4,
              5
            ],
            "rows": [
              {
                "value": "Mayor_Basic computer skills (e.g., how to use a mouse and keyboard, printing)",
                "text": "Basic computer skills (e.g., how to use a mouse and keyboard, printing)"
              },
              {
                "value": "Mayor_Basic Internet searching (e.g., using Google, Yahoo or other search engines)",
                "text": "Basic Internet searching (e.g., using Google, Yahoo or other search engines)"
              },
              {
                "value": "Mayor_General computer or office productivity software use (e.g., word processing, spreadsheets, presentations)",
                "text": "General computer or office productivity software use (e.g., word processing, spreadsheets, presentations)"
              },
              {
                "value": "Mayor_Use of collaborative platforms (Google Drive, Microsoft Teams, WebEx, etc.)",
                "text": "Use of collaborative platforms (Google Drive, Microsoft Teams, WebEx, etc.)"
              },
              {
                "value": "Mayor_Use of communication apps (Google Meet, Skype, Zoom, Microsoft Teams, CISCO, etc.)",
                "text": "Use of communication apps (Google Meet, Skype, Zoom, Microsoft Teams, CISCO, etc.)"
              },
              {
                "value": "Mayor_Use of social media (Facebook, Twitter, Instagram, Youtube, LinkedIn)",
                "text": "Use of social media (Facebook, Twitter, Instagram, Youtube, LinkedIn)"
              },
              {
                "value": "Mayor_Content creation (i.e. blogs, vlogs, websites)",
                "text": "Content creation (i.e. blogs, vlogs, websites)"
              },
              {
                "value": "Mayor_Cybersecurity awareness (i.e awareness of copyright issues, identity theft, identify/avoid online fraud or identity theft situation)",
                "text": "Cybersecurity awareness (i.e awareness of copyright issues, identity theft, identify/avoid online fraud or identity theft situation)"
              },
              {
                "value": "Mayor_Programming, web, and app development",
                "text": "Programming, web, and app development"
              },
              {
                "value": "Mayor_Digital design and data visualization",
                "text": "Digital design and data visualization"
              }
            ]
          },
          {
            "type": "panel",
            "name": "mayorlguoffice",
            "title": "LGU Office Employee's Technology Readiness Index",
            "elements": [
              {
                "type": "rating",
                "name": "mayorOptimism1",
                "title": "Technology gives people more control over their daily lives.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism2",
                "title": "Products and services that use the newest technologies are much more convenient to use",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism3",
                "title": "Like the idea of doing business via new technologies.\n",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism4",
                "title": "Prefer to use the most advanced technology available.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism5",
                "title": "Like computer programs that allow me to tailor things to fit my own and the LGU’s needs.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism6",
                "title": "Technology makes me more efficient in my work in the LGU.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism7",
                "title": "I find new technologies to be mentally stimulating.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism8",
                "title": "Technology gives more freedom of mobility.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism9",
                "title": "Learning about technology can be as rewarding as the technology itself.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorOptimism10",
                "title": "I feel confident that new technologies, such as e-gov, will greatly help the LGU and its operations.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness1",
                "title": "Other people come to me for advice on new technologies",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Poor"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness2",
                "title": "It seems my friends are learning more about the newest technologies than I am.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness3",
                "title": "In general, I am among the first in my office to acquire and use new technology.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Poor"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness4",
                "title": "I can usually figure out new high-tech products and services without help from others.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness5",
                "title": "I can keep up with the latest technological developments in my areas of interest and work in the LGU Office.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness6",
                "title": "I enjoy the challenge of figuring out high-tech gadgets.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInnovativeness7",
                "title": "I find that I have fewer problems that other people in making technology work for me",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort1",
                "title": "Technical support lines are not helpful because they do not explain things in terms your understand",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort2",
                "title": "Sometimes, I think that technology systems are not designed for use by ordinary people.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort3",
                "title": "There is no such thing as a manual for a high-tech product or service that is written in the Filipino language.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort4",
                "title": "When I get technical support from a provider of a high-tech product or service, I sometimes feel as if I am being taken advantage of by someone who knows more than I do.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort5",
                "title": "If I buy a high-tech product or service, I prefer to have the basin model over one with a lot of extra features.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort6",
                "title": "It is embarrassing when I have trouble with a high-tech gadget while people are watching .",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort7",
                "title": "There should be caution in replacing important people-tasks with technology because new technology can breakdown or get disconnected.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort8",
                "title": "Many new technologies have health or safety risks that are not discovered until after people have used them.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort9",
                "title": "New technology makes it too easy for government and companies to spy on people.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorDiscomfort10",
                "title": "Technology always seems to fail at the worst possible time.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity1",
                "title": "I do not consider it safe giving out a credit card number or payment details over a computer or new technology.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity2",
                "title": "I do not consider it safe to do any kind of financial business online.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity3",
                "title": "I worry that information I send over the internet will be seen by other people.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity4",
                "title": "I do not feel confident doing business with a place that can only be reached online.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity5",
                "title": "Any business transaction I do electronically should be confirmed later with something in writing.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity6",
                "title": "Whenever something gets automated, I need to check carefully that the machine or computer is not making mistakes.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity7",
                "title": "The human touch is very important when doing business with a company.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity8",
                "title": "When I can a business, I prefer to talk to a person rather an automated call.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              },
              {
                "type": "rating",
                "name": "mayorInsecurity9",
                "title": "If I provide information to a computer or gadget over the internet, I can never be sure it really gets to right place.",
                "isRequired": true,
                "minRateDescription": "Very Poor",
                "maxRateDescription": "Very Good"
              }
            ]
          }
        ]
      }
    ]
  }