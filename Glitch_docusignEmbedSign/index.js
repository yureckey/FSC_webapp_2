/**
 * This is a quick start example of embedding the signing ceremony within your website.
 * Language: Node.js
 *
 * See the Readme and Setup files for more information.
 *
 * Copyright (c) DocuSign, Inc.
 * License: MIT Licence. See the LICENSE file.
 *
 * This example does not include authentication. Instead, an access token
 * must be supplied from the Token Generator tool on the DevCenter or from
 * elsewhere.
 *
 * This example also does not look up the DocuSign account id to be used.
 * Instead, the account id must be set.
 *
 * For a more production oriented example, see the
 * Authorization code grant authentication example. It includes an express web app:
 *      https://github.com/docusign/eg-03-node-auth-code-grant
 * @file index.js
 * @author DocuSign
 * @see <a href="https://developers.docusign.com">DocuSign Developer Center</a>
 */
const docusign = require("docusign-esign"),
  path = require("path"),
  fs = require("fs"),
  process = require("process"),
  { promisify } = require("util"), // http://2ality.com/2017/05/util-promisify.html
  basePath = "https://demo.docusign.net/restapi",
  express = require("express"),
  envir = process.env;
// baseUrl is the url of the application's web server. Eg http://localhost:3000
// In some cases, this example can determine the baseUrl automatically.
// See the baseUrl statements at the end of this example.
let baseUrl = envir.BASE_URL || "{base_url}";

async function openSigningCeremonyController(req, res) {
  const qp = req.query;
  // Fill in these constants or use query parameters of ACCESS_TOKEN, ACCOUNT_ID, USER_FULLNAME, USER_EMAIL
  // or environment variables.

  // Obtain an OAuth token from https://developers.hqtest.tst/oauth-token-generator
  const accessToken = envir.ACCESS_TOKEN || qp.ACCESS_TOKEN || "{access_token}";

  // Obtain your accountId from demo.docusign.com -- the account id is shown in the drop down on the
  // upper right corner of the screen by your picture or the default picture.
  const accountId = envir.ACCOUNT_ID || qp.ACCOUNT_ID || "{account_id}";

  // Signer and other settings:
  const signerName =
      envir.USER_FULLNAME || qp.USER_FULLNAME || "{user_fullname}",
    signerEmail = envir.USER_EMAIL || qp.USER_EMAIL || "{user_email}";

  const clientUserId = "123", // Used to indicate that the signer will use an embedded
    // Signing Ceremony. Represents the signer's userId within
    // your application.
    authenticationMethod = "None"; // How is this application authenticating
  // the signer? See the `authenticationMethod' definition
  // https://developers.docusign.com/esign-rest-api/reference/Envelopes/EnvelopeViews/createRecipient

  // The document to be signed. Path is relative to the root directory of this repo.
  //const fileName = 'demo_documents/World_Wide_Corp_lorem.pdf';
  const fileName = "documents/audit.pdf"; //this file is uploaded to glitch via terminal command wget. I don't see it in documents folder in glitch editor, but I see it with terminal

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /**
   *  Step 1. The envelope definition is created.
   *          One signHere tab is added.
   *          The document path supplied is relative to the working directory
   */
  const envDef = new docusign.EnvelopeDefinition();
  //Set the Email Subject line and email message
  envDef.emailSubject = "Please sign this document sent from FSC test app 2";
  envDef.emailBlurb = "Please sign this document sent from FSC test app 2";

  // Create a signer recipient for the signer role of the server template
  let signer1 = docusign.Signer.constructFromObject({
          name: signerName,
          email: signerEmail,
          roleName: "Signer1", // important - should match role defined in template!
          recipientId: "1",
          // Adding clientUserId transforms the template recipient
          // into an embedded recipient:
          clientUserId: clientUserId
      });
  // Recipients object:
  let recipientsServerTemplate = docusign.Recipients.constructFromObject({
      signers: [signer1], });
  
  // create a composite template for the Server Template
  let compTemplate1 = docusign.CompositeTemplate.constructFromObject({
    compositeTemplateId: "1",
    serverTemplates: [
      docusign.ServerTemplate.constructFromObject({
        sequence: "1",
        templateId: '0bff1c50-8aea-4b08-adb6-bf479324101c'
      })
    ],
    // Add the roles via an inlineTemplate
    inlineTemplates: [
      docusign.InlineTemplate.constructFromObject({
        sequence: "1",
        recipients: recipientsServerTemplate
      })
    ]
  });
  // Read the file from the document and convert it to a Base64String
  /* const pdfBytes = fs.readFileSync(path.resolve(__dirname, fileName))
      , pdfBase64 = pdfBytes.toString('base64');

  // Create the document request object
  const doc = docusign.Document.constructFromObject({documentBase64: pdfBase64,
        fileExtension: 'pdf',  // You can send other types of documents too.
        name: 'JUSTIFICATION FOR REMOTE AUDIT', documentId: '1'}); */

  //envDef.documents = [doc]; // Create a documents object array for the envelope definition and add the doc object
  envDef.compositeTemplates = [compTemplate1];

  // Create the signer object with the previously provided name / email address
  /* const signer = docusign.Signer.constructFromObject({
    name: signerName,
    email: signerEmail,
    routingOrder: "1",
    recipientId: "1",
    clientUserId: clientUserId
  });

  // Create the signHere tab to be placed on the envelope
  const signHere = docusign.SignHere.constructFromObject({
    documentId: "1",
    pageNumber: "1",
    recipientId: "1",
    tabLabel: "SignHereTab",
    xPosition: "121",
    yPosition: "616"
  });

  // Create the overall tabs object for the signer and add the signHere tabs array
  // Note that tabs are relative to receipients/signers.
  signer.tabs = docusign.Tabs.constructFromObject({ signHereTabs: [signHere] });

  // Add the recipients object to the envelope definition.
  // It includes an array of the signer objects.
  envDef.recipients = docusign.Recipients.constructFromObject({
    signers: [signer]
  }); */
  // Set the Envelope status. For drafts, use 'created' To send the envelope right away, use 'sent'
  envDef.status = "sent";

  /**
   *  Step 2. Create/send the envelope.
   *          We're using a promise version of the SDK's createEnvelope method.
   */
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(basePath);
  apiClient.addDefaultHeader("Authorization", "Bearer " + accessToken);
  // Set the DocuSign SDK components to use the apiClient object
  docusign.Configuration.default.setDefaultApiClient(apiClient);
  let envelopesApi = new docusign.EnvelopesApi(),
    // createEnvelopePromise returns a promise with the results:
    createEnvelopePromise = promisify(envelopesApi.createEnvelope).bind(
      envelopesApi
    ),
    results;

  try {
    results = await createEnvelopePromise(accountId, {
      envelopeDefinition: envDef
    });
    /**
     * Step 3. The envelope has been created.
     *         Request a Recipient View URL (the Signing Ceremony URL)
     */
    const envelopeId = results.envelopeId,
      recipientViewRequest = docusign.RecipientViewRequest.constructFromObject({
        authenticationMethod: authenticationMethod,
        clientUserId: clientUserId,
        recipientId: "1",
        returnUrl: baseUrl + "/dsreturn" + "?state=additionalCheck123",
        userName: signerName,
        email: signerEmail
      }),
      createRecipientViewPromise = promisify(
        envelopesApi.createRecipientView
      ).bind(envelopesApi);
    results = await createRecipientViewPromise(accountId, envelopeId, {
      recipientViewRequest: recipientViewRequest
    });
    /**
     * Step 4. The Recipient View URL (the Signing Ceremony URL) has been received.
     *         Redirect the user's browser to it.
     */
    res.redirect(results.url);
  } catch (e) {
    // Handle exceptions
    let body = e.response && e.response.body;
    //console.log('e.response: ', e.response);
    //console.log('body: ', body);
    if (body) {
      // DocuSign API exception
      /*Error message:
    {
        "errorCode": "AUTHORIZATION_INVALID_TOKEN",
        "message": "The access token provided is expired, revoked or malformed."
    }*/
      
      var out = `<html lang="en">
      <body>
        <h3>API problem</h3>
          <p>Status code ${e.response.status}</p>
          <p>Error message:</p>
          <p><pre><code>${JSON.stringify(body,null,4)}</code></pre></p>`;
      //body:{errorCode: 'AUTHORIZATION_INVALID_TOKEN', message: 'The access token provided is expired, revoked or malformed.' }
      if (body.message == 'The access token provided is expired, revoked or malformed.') out += `<p>Please ping Yuriy at yureckey@gmail.com to refresh token!</p>`
      out += `</body></html>`;
      res.send(out);
    } else {
      // Not a DocuSign exception
      throw e;
    }
  }
}

// The mainline
const port = process.env.PORT || 3000,
  host = process.env.HOST || "localhost",
  app = express()
    .post("/", openSigningCeremonyController)
    .get("/", (req, res) => {
      res.send(`
          <html lang="en">
            <head>
              <style>
.container {
  width: 100%;
  height: 98%;
  background: #e1ede1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainButton {
  width: 30rem;
  height: 4rem;
  background: #285c4d;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  font-family: "Roboto", "-apple-system", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 5px;
}
</style>
            </head>
            <body>
              <script type="text/javascript">
                  function btnDisable(btn) {
                      var btnSubmit = document.getElementById(btn.id);
                      btnSubmit.disabled = true;
                  };
              </script>
              <form action="${req.url}" method="post">
                <div class="container">
  <!-- onclick="btnDisable(this)"-->
                  <input id="mainButton" type="submit" value="Launch signing with DocuSign" class="mainButton"  />
                </div>
              </form>
            </body>
          </html>`);
    })
    .get("/dsreturn", (req, res) => {
      //console.log('dsreturn: ', req);
      if (req && req.query && req.query.event == 'signing_complete' && req.query.state == 'additionalCheck123') {
        //todo: save res to DB here?
      }
      res.send(`
      <html lang="en">
            <head>
              <style>
.container {
  width: 100%;
  height: 98%;
  background: #e1ede1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
            </head>
      <body>
      <div class="container"><hr style="width: 35em;"><p>The signing ceremony was completed with status <strong>${req.query.event}</strong></p><hr style="width: 30em;"></div>
      </body>
      </html>`);
    })
    .listen(port);

// If baseUrl was not set then try to figure it out.
if (baseUrl == "{base_url}") {
  baseUrl = `http://${host}:${port}`;
  if (process.env.PROJECT_DOMAIN) {
    // Running on glitch.com!
    baseUrl = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  }
}

console.log(`Your server is running on ${host}:${port}`);
console.log(`baseUrl set to ${baseUrl}`);
