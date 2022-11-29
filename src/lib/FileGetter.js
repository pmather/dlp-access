import { Storage } from "aws-amplify";

export default class FileGetter {
  async getFile(copyURL, type, component, attr, siteId = "", pathPrefix = "") {
    const stateObj = {};
    const stateAttr = attr || "copy";
    let prefix;
    let filename;
    const anyBucketMatches = copyURL?.match(/(collectionmap\d{6}-)/);
    if (
      copyURL?.indexOf("http") === 0 &&
      copyURL?.indexOf(Storage._config.AWSS3.bucket) === -1 &&
      anyBucketMatches === null &&
      copyURL?.indexOf("s3") === -1
    ) {
      // external
      stateObj[stateAttr] = copyURL;
      component.setState(stateObj);
      return copyURL;
    } else if (
      copyURL?.indexOf("http") === 0 &&
      copyURL?.indexOf(Storage._config.AWSS3.bucket) !== -1 &&
      copyURL?.indexOf("s3") !== -1
    ) {
      // correct bucket
      console.log("correct bucket");
      filename = copyURL.split("/").pop();
      const domain = `https://${Storage._config.AWSS3.bucket}.s3.amazonaws.com`;
      prefix = copyURL.replace(filename, "").replace(domain, "");
    } else if (
      copyURL?.indexOf("http") === 0 &&
      copyURL?.indexOf(Storage._config.AWSS3.bucket) === -1 &&
      anyBucketMatches?.length &&
      copyURL?.indexOf("s3") !== -1
    ) {
      // full url, incorrect bucket
      const domain = "amazonaws.com/";
      const start = copyURL.indexOf(domain);
      const length = start + domain.length;
      copyURL = copyURL.replace(copyURL.substr(0, length), "");
      filename = copyURL.split("/").pop();
      prefix = `${pathPrefix}/${type}/${siteId}/`;
    } else if (
      // rel url / prefix/filename
      copyURL?.indexOf("http") === -1 &&
      copyURL?.indexOf("https") === -1 &&
      copyURL?.indexOf("amazonaws.com") === -1 &&
      copyURL?.indexOf("www.") === -1
    ) {
      filename = copyURL.split("/").pop();
      prefix = copyURL.replace(filename, "");
      if (prefix.charAt(0) === "/") {
        prefix = prefix.substring(1);
      }
    }
    if ((attr === "featured" || attr === "featuredStatic") && !!siteId.length) {
      prefix = `${pathPrefix}/${type}/${siteId}/${prefix}`;
    }

    try {
      await Storage.configure({
        customPrefix: {
          public: prefix
        }
      });

      let copyLink = await Storage.get(filename);

      if (type === "audio") {
        copyLink = copyLink.replace(/%20/g, "+");
      }
      stateObj[stateAttr] = copyLink;
      component.setState(stateObj);
      return copyLink;
    } catch (e) {
      console.error(e);
    }
  }
}
