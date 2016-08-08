// -----------------------
// Headers
// -----------------------

/**
 * @apiDefine AuthorizationHeader
 *
 * @apiHeader {Object} Authorization header value must follow the pattern
 * "JWT [token sting]"
 *
 * @apiHeaderExample {json} Authorization Header Example:
 *    {
 *      "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ..."
 *    }
 *
 */

// -----------------------
// Error Responses
// -----------------------

/**
 * @apiDefine NotAuthorizedError
 *
 * @apiError Unauthorized The JWT is missing or not valid.
 *
 * @apiErrorExample Unauthorized Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *        "status": 401,
 *        "message": "No authorization token was found"
 *     }
 */

/**
 * @apiDefine InternalServerError
 *
 * @apiError InternalError There was an internal error when trying to serve the request
 *
 * @apiErrorExample InternalError Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": 500,
 *       "message": "There was an internal error when trying to serve the request"
 *     }
 */


// -----------------------
// Success Responses
// -----------------------

/**
 * @apiDefine NoContentResponse
 * @apiDescription Empty successful response
 *
 * @apiSuccessExample NoContent Response:
 *    HTTP/1.1 204 No Content
 */