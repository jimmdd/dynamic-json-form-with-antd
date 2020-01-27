export default (req, res) => {
    const {
        query: { schemaName },
    } = req
    console.log('schema name', schemaName);

    // fetch schema from db
    if (schemaName === 'job_app') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(job_app))
    } else {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'schema not found' }))
    }
}

const job_app = {
    "start": {},
    "email": {
        "subject": "Crum & Forster Paid Training and Tryout Program Application",
        "start": {
            "message": "Thank you for starting your application to Crum & Forster Paid Training and Tryout program. You can you click the button below to retrive your applicaiton anytime."
        },
        "submit": {
            "message": "Thank you for successfully submitting your application to Crum & Forster. Your application will remain active in next 24hrs. Please feel free to update your application by clicking the button below."
        },
        "share": {
            "message": ""
        },
        "bcc": {}
    },
    "sections": [
        {
            "name": "Applicant Info",
            "order": 0,
            "active": true,
            "required": true,
            "notes": "",
            "questions": [
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "additional",
                    "label": "Tell us something your resume doesn't show about your prior work experience?",
                    "type": "text",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "hope",
                    "label": "What do you hope to gain from being selected to this program?",
                    "type": "text",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "reason",
                    "label": "Tell us why your are a good choice for the program.",
                    "type": "text",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "gpa",
                    "label": "What is your GPA?(4 point scale)",
                    "type": "number",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "college_name",
                    "label": "Name of College/University",
                    "type": "text",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "major",
                    "label": "Major",
                    "type": "text",
                    "answered": null
                },
                {
                    "styles": {
                        "level": "primary",
                        "style": {}
                    },
                    "flag": false,
                    "highlight": false,
                    "error": false,
                    "key": "resume",
                    "label": "Please upload a current version of your resume",
                    "type": "fileUpload",
                    "answered": null
                }
            ]
        }
    ]
}