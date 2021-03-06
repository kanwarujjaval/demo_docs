define({ "api": [
  {
    "type": "get",
    "url": "o/export",
    "title": "Export Config",
    "version": "20.11.3",
    "name": "ExportConfig",
    "group": "Config_Transfer",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Export configuration state for selected plugins and all their dependent plugin configurations</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>The AppId</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "exportData",
            "description": "<p>List of Exported Plugins.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exportData.id",
            "description": "<p>Plugin Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exportData.name",
            "description": "<p>Plugin Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "exportData.children",
            "description": "<p>List Of Children of the plugin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exportData.children.id",
            "description": "<p>Id of the selection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exportData.children.name",
            "description": "<p>Name of the selection.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "exportData.children.selected",
            "description": "<p>Boolean representing selected.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/o/export/',\n     params: {\n       'app_id': '600930ee7382d5f70c959d20',\n       'exportData': [\n         {\n           \"id\": \"populator\",\n           \"name\": \"Populator Templates\",\n           \"children\": [\n             {\n               \"id\": \"600931167382d5f70c959d22\",\n               \"name\": \"cool populator template\",\n               \"selected\": true\n             }\n           ]\n         }\n       ]\n     }\n  });\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      },
      {
        "title": "curl",
        "content": "curl -i 'HOST/o/export?app_id=600930ee7382d5f70c959d20'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "exportData",
            "description": "<p>Export Data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/config-transfer/api/api.js",
    "groupTitle": "Config_Transfer"
  },
  {
    "type": "get",
    "url": "o/export",
    "title": "Export Config",
    "version": "20.11.2",
    "name": "ExportConfig",
    "group": "Config_Transfer",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Export configuration state for selected plugins and all their dependent plugin configurations</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>The AppId</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'HOST/o/export?app_id=600930ee7382d5f70c959d20'",
        "type": "json"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/o/export/',\n     params: {\n       'app_id': '600930ee7382d5f70c959d20',\n       'exportData': [\n         {\n           \"id\": \"populator\",\n           \"name\": \"Populator Templates\",\n           \"children\": [\n             {\n               \"id\": \"600931167382d5f70c959d22\",\n               \"name\": \"cool populator template\",\n               \"selected\": true\n             }\n           ]\n         }\n       ]\n     }\n  });\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "exportData",
            "description": "<p>Export Data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/config-transfer/api/_apidoc.js",
    "groupTitle": "Config_Transfer"
  },
  {
    "type": "post",
    "url": "o/import",
    "title": "Import Config",
    "version": "20.11.3",
    "name": "ImportConfig",
    "group": "Config_Transfer",
    "permission": [
      {
        "name": "GlobalAdmin"
      }
    ],
    "description": "<p>Export configuration state for selected plugins and all their dependent plugin configurations</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>The AppId</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "importData",
            "description": "<p>Import Data.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'HOST/i/import?app_id=600930ee7382d5f70c959d20'",
        "type": "json"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/i/import',\n     params: {\n       'app_id': '600930ee7382d5f70c959d20'\n     }\n  });\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "exportData",
            "description": "<p>Export Data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/config-transfer/api/api.js",
    "groupTitle": "Config_Transfer"
  },
  {
    "type": "post",
    "url": "o/import",
    "title": "Import Config",
    "version": "20.11.2",
    "name": "ImportConfig",
    "group": "Config_Transfer",
    "permission": [
      {
        "name": "GlobalAdmin"
      }
    ],
    "description": "<p>Export configuration state for selected plugins and all their dependent plugin configurations</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_id",
            "description": "<p>The AppId</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'HOST/i/import?app_id=600930ee7382d5f70c959d20'",
        "type": "json"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/i/import',\n     params: {\n       'app_id': '600930ee7382d5f70c959d20'\n     }\n  });\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "exportData",
            "description": "<p>Export Data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "plugins/config-transfer/api/_apidoc.js",
    "groupTitle": "Config_Transfer"
  }
] });
