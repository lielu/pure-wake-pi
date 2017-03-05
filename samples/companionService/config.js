/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.f48b14b2a6324ba484e4c9f6f3706f06",
    clientSecret: "a7fc30f19d100c00845b1359f99339976253030a0f6c37b1a8634e1b6c21eb20",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/pi/projects/alexa-avs-sample-app/samples/javaclient/certs/server/node.key",
    sslCert: "/home/pi/projects/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/pi/projects/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt",
    products: {
        "raspberry_pi_3": ["123456789"],
    },
};

module.exports = config;
