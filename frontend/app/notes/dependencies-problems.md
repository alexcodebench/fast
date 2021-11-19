# Dependencies and Compatibilities Issues

## Needed Libraries

* [ng-zorro](https://ng.ant.design/docs/introduce/en) <br /> Its table system is quite handy, especially for nested tables

* [zorro-sharper](https://github.com/1-2-3/zorro-sharper) <br /> This is needed to fix ng-zorro's problem — table content overflow out of page bottom

## Issues

* Version Conflicts
  - Angular: 13 -> 11
  - ng-zorro: 12 -> 11
  - zorro-sharper: 11

* Dependency issues
  - zorro-sharper has problem loading due to version conflict with its dependency [@delon/abc](https://github.com/ng-alain/delon). <br />
Need to manually fix it by uninstalling and reinstall a proper version (11.x): <br />
    ```bash
    npm uninstall @delon/abc
    npm install @delon/abc@11.10.4
    ```
* CORS
  - Configs for CORS could be done either using Nginx or FastAPI
  - However, when FastAPI is behind an Nginx proxy and using HTTPS protocol, there seems to be a bug in FastAPI's CORS middleware. Some tweaks are needed on both Nginx config and FastAPI:
    - Avoid rewriting URL unintentionally on both Nginx and the FastAPI app
    - Trailing slash on the URL could cause problem. Make sure matching endpoint URLs between front and back end exactly (including trailing slash '/')

