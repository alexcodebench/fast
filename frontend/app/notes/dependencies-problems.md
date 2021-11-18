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
  - ...

