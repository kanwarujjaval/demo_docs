/**
 * @api {get} o/export Export Config
 * @apiVersion 20.11.3
 * @apiName ExportConfig
 * @apiGroup Config Transfer
 * @apiPermission user
 *
 * @apiDescription Export configuration state for selected plugins and all their dependent plugin configurations
 *
 * @apiParam    {String}   app_id              The AppId
 * @apiParam    {Object[]} exportData          List of Exported Plugins.
 * @apiParam    {String}   exportData.id           Plugin Id.
 * @apiParam    {String}   exportData.name         Plugin Name.
 * @apiParam    {Object[]} exportData.children     List Of Children of the plugin.
 * @apiParam    {String}   exportData.children.id          Id of the selection.
 * @apiParam    {String}   exportData.children.name        Name of the selection.
 * @apiParam    {Boolean}  exportData.children.selected    Boolean representing selected.
 * @apiHeader   {String}  Content-Type         application/json.
 * 
 * 
 * @apiExample {node.js} node.js
 * const axios = require('axios');
 * try {
 *    const response = await axios({
 *      method: 'GET',
 *      url: '/o/export/',
 *      params: {
 *        'app_id': '600930ee7382d5f70c959d20',
 *        'exportData': [
 *          {
 *            "id": "populator",
 *            "name": "Populator Templates",
 *            "children": [
 *              {
 *                "id": "600931167382d5f70c959d22",
 *                "name": "cool populator template",
 *                "selected": true
 *              }
 *            ]
 *          }
 *        ]
 *      }
 *   });
 * } catch (error) {
 *   console.error(error);
 * }
 * 
 * @apiExample {curl} curl
 * curl -i 'HOST/o/export?app_id=600930ee7382d5f70c959d20'
 *
 * @apiSuccess {Object[]} exportData    Export Data.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */