const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

async function getSecret() {
    const client = new SecretManagerServiceClient();
    const projectId = "811735143918";
    const secretName = "ahuza";
    const version = "latest";

    const [versionResponse] = await client.accessSecretVersion({
        name: `projects/${projectId}/secrets/${secretName}/versions/${version}`,
    });

    const secretValue = versionResponse.payload.data.toString("utf8");

    const fs = require("fs");
    fs.writeFileSync(".env", secretValue);
}

getSecret().catch(console.error);
