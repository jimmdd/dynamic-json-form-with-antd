export default (req, res) => {
    const {
        query: { schemaName },
    } = req
    console.log('schema name', schemaName);
    const data = {
        fields: [
            {
                "styles": {
                    "level": "primary",
                    "style": {}
                },
                "flag": false,
                "highlight": false,
                "error": false,
                "key": "start_email",
                "label": "Email",
                "type": "string",
                "answered": null,
                "rules": [
                    {
                        "type": "email",
                        "message": 'Please enter valid E-mail!',
                    },
                    {
                        "required": true,
                        "message": 'Please input your E-mail!',
                    }
                ]
            },
            {
                "styles": {
                    "level": "primary",
                    "style": {}
                },
                "flag": false,
                "highlight": false,
                "error": false,
                "key": "start_name",
                "label": "Applicant Name",
                "type": "string",
                "prefix": "user",
                "answered": null,
                "rules": [
                    {
                        "required": true,
                        "message": 'Please input your E-mail!',
                    }
                ]
            },
            {
                "styles": {
                    "level": "primary",
                    "style": {}
                },
                "flag": false,
                "highlight": false,
                "error": false,
                "key": "start_gpa",
                "label": "GPA",
                "type": "number",
                "answered": null,
                "min": 0,
                "max": 4,
                "rules": [
                    {
                        "required": true,
                        "message": 'Please input your E-mail!',
                    }
                ]
            }
        ]
    }
    // fetch schema from db
    if (schemaName === 'job_app') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
    } else {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'schema not found' }))
    }
}